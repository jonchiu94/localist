<template>
    <div>
        <v-toolbar class="nav-bar">
            <v-toolbar-items>
                <v-btn
                    to="/"
                    class="cyan--text text--darken-2 font-weight-black font-italic"
                    style="text-decoration: none"
                >Localist</v-btn>
                <!-- <v-btn to="/guides" style="text-decoration: none" flat> Guides </v-btn> -->
            </v-toolbar-items>

            <v-spacer></v-spacer>

            <v-text-field
                flat
                hide-details
                solo-inverted
                label="Search activities that interest you"
                style="max-width: 300px;"
                class="hidden-sm-and-down"
                v-model="searchInput"
                @keyup.enter="searchEnter()"
            ></v-text-field>
            <v-btn icon>
                <v-icon class="cyan--text text--darken-2 hidden-sm-and-down">search</v-icon>
            </v-btn>
            <v-toolbar-items class="hidden-sm-and-down" v-if="isLoggedIn">
                <v-btn to="/tours/createtour" style="text-decoration: none" flat>Host a tour</v-btn>
            </v-toolbar-items>

            <v-btn dark to="/signin" v-if="!isLoggedIn">Sign In/Sign Up</v-btn>
            <v-menu :nudge-width="100" v-else>
                <template v-slot:activator="{ on }">
                    <v-toolbar-title v-on="on">
                        <v-avatar>
                            <img :src="getThumbnail" v-bind:placeholder="getUserImage()">
                        </v-avatar>
                    </v-toolbar-title>
                </template>

                <v-list>
                    <v-list-tile>
                        <v-list-tile-title>{{getName}}</v-list-tile-title>
                    </v-list-tile>

                    <v-list-tile to="/profile" tyle="text-decoration: none">
                        <v-list-tile-title>
                            <v-icon class="cyan--text text--darken-2">person</v-icon>Profile
                        </v-list-tile-title>
                    </v-list-tile>

                    <v-list-tile to="/" style="text-decoration: none">
                        <v-list-tile-title>
                            <v-icon class="cyan--text text--darken-2">settings</v-icon>Settings
                        </v-list-tile-title>
                    </v-list-tile>

                    <v-list-tile @click="signout" style="text-decoration: none">
                        <v-list-tile-title>
                            <v-icon class="cyan--text text--darken-2">logout</v-icon>Signout
                        </v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
        </v-toolbar>
    </div>
</template>

<script>
import router from "../router";
export default {
    name: "Navigation",
    data: () => ({
        showNavbar: true,
        searchInput: ""
    }),
    methods: {
        searchEnter() {
            this.$store.commit("setSearchTitle", this.searchInput);
            router.push("/tours");
        },
        signout() {
            this.$store.dispatch("logout");
            router.push("/signin");
        },
        getUserImage: function() {
            var instance = this;
            this.$http
                .get("/user/find/" + this.$store.getters.getUserKey)
                .then(function(response) {
                    if (response.data.image) {
                        instance.$store.commit(
                            "setThumbnail",
                            response.data.image
                        );
                    }
                    if (response.data.name) {
                        instance.$store.commit(
                            "setName",
                            response.data.name.first
                        );
                    }
                });
        }
    },
    computed: {
        isLoggedIn: function() {
            return this.$store.getters.getCurrentUser;
        },
        isAdmin: function() {
            return this.$store.getters.getAdminStatus;
        },
        getThumbnail: function() {
            return this.$store.getters.getThumbnail;
        },
        getName: function() {
            return this.$store.getters.getName;
        }
    }
};
</script>


<style scoped>
.nav-bar {
    color: black;
    z-index: 5;
    position: fixed;
    box-shadow: 0 2px 15px rgba(71, 120, 120, 0.5);
    transform: translate3d(0, 0, 0);
}

.nav-bar.nav-bar--hidden {
    box-shadow: none;
    transform: translate3d(0, -100%, 0);
    top: 120%;
}

#submit-button {
    color: black;
    background: #ff0000; /* fallback for old browsers */
    /* background: -webkit-linear-gradient(to left, #FF0000, #FFF200, #1E9600);
        background: linear-gradient(to left, #FF0000, #FFF200, #1E9600);  */
}
</style>

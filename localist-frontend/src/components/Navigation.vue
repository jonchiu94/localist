<template>
    <div>
        <v-toolbar class="nav-bar">
            <v-btn to="/" icon>
                <v-icon style="text-decoration: none">home</v-icon>
            </v-btn>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn to="/tours" style="text-decoration: none" flat> Tours </v-btn>
                <v-btn to="/guides" style="text-decoration: none" flat> Guides </v-btn>
                <v-btn v-if="isAdmin" to="/users" style="text-decoration: none" flat>Admin</v-btn>
            </v-toolbar-items>

            <v-spacer></v-spacer>

            <v-spacer />
            <v-text-field
              flat
              hide-details
              solo-inverted
              style="max-width: 300px;"
            />
            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>

            <v-btn dark to="/signin" v-if="!isLoggedIn">Sign In/Sign Up</v-btn>
            <v-menu :nudge-width="100" v-if="getUsername">
                <template v-slot:activator="{ on }">
                    <v-toolbar-title v-on="on">
                        <v-avatar>
                            <img
                                src="https://media.licdn.com/dms/image/C4E03AQHpOc7og5BUuw/profile-displayphoto-shrink_800_800/0?e=1562198400&v=beta&t=BsWTGGTHMroIWmeg-toVM3I5OVGNd45vAsNkSnYDvkY"
                                alt="Jacob Smith"
                            >
                        </v-avatar>
                    </v-toolbar-title>
                </template>

                <v-list>
                    <v-list-tile>
                        <v-list-tile-title>{{username}}</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile to="/">
                        <v-list-tile-title>Profile</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile to="/">
                        <v-list-tile-title>
                            <v-icon light>settings</v-icon>Settings
                        </v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile @click="signout">
                        <v-list-tile-title>Signout</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
        </v-toolbar>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Navigation",
    data: () => ({
        username: "",
        items: ["Profile", "Settings", "Signout"]
    }),
    methods: {
        signout() {
            axios.post;
        }
    },
    computed: {
        isLoggedIn: function() {
            return this.$store.getters.getCurrentUser;
        },
        isAdmin: function() {
            return this.$store.getters.getAdminStatus;
        },
        getUsername: function() {
            this.username = this.$store.getters.getUsername;
            return this.$store.getters.getUsername;
        }
    }
};
</script>


<style>
.nav-bar {
    color: black;
}

#submit-button {
    color: black;
    background: #ff0000; /* fallback for old browsers */
    /* background: -webkit-linear-gradient(to left, #FF0000, #FFF200, #1E9600);
    background: linear-gradient(to left, #FF0000, #FFF200, #1E9600);  */
}
</style>

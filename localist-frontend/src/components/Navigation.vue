<template>
    <div>
        <v-toolbar class="nav-bar" :class="{ 'nav-bar--hidden': !showNavbar }">
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn to="/" class="cyan--text text--darken-2 font-weight-black font-italic" style="text-decoration: none">
                    Localist
                </v-btn>
                <v-btn to="/tours" style="text-decoration: none" flat> Tours </v-btn>
                <v-btn to="/guides" style="text-decoration: none" flat> Guides </v-btn>
                <v-btn v-if="isAdmin" to="/users" style="text-decoration: none" flat>Admin</v-btn>
            </v-toolbar-items>

            <v-spacer></v-spacer>

            <v-text-field
              flat
              hide-details
              solo-inverted
              style="max-width: 300px;"
            />
            <v-btn icon>
                <v-icon class="cyan--text text--darken-2">search</v-icon>
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
                        <v-list-tile-title>{{getUsername}}</v-list-tile-title>
                    </v-list-tile>

                    <v-list-tile to="/userprofile" tyle="text-decoration: none">
                        <v-list-tile-title>
                            <v-icon class="cyan--text text--darken-2">person</v-icon> Profile
                        </v-list-tile-title>
                    </v-list-tile>

                    <v-list-tile to="/" style="text-decoration: none">
                        <v-list-tile-title>
                            <v-icon class="cyan--text text--darken-2">settings</v-icon> Settings
                        </v-list-tile-title>
                    </v-list-tile>

                    <v-list-tile @click="signout" style="text-decoration: none">
                        <v-list-tile-title>
                            <v-icon class="cyan--text text--darken-2">logout</v-icon> Signout
                        </v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
        </v-toolbar>
    </div>
</template>

<script>
export default {
    name: "Navigation",
    data () {
        return {
            showNavbar: true,
            lastScrollPosition: 0,
            scrollValue: 0
        }
    },
    mounted () {
        this.lastScrollPosition = window.pageYOffset
        window.addEventListener('scroll', this.onScroll)
        const viewportMeta = document.createElement('meta')
        viewportMeta.name = 'viewport'
        viewportMeta.content = 'width=device-width, initial-scale=1'
        document.head.appendChild(viewportMeta)
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
        signout() {
            this.$store.dispatch("logout");
            // this.$http
            //     .post("/entrance/signout")
            //     .then(function(response) {
            //         if (response.status == 200) {
            //             this.$state.actions.clearData();
            //         }
            //         console.log({ id: this.$state.userId });
            //     })
            //     .catch(error => alert(error));
            // .finally(() => (this.loading = false));
        },
        onScroll () {
          const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
            if (currentScrollPosition < 0) {
                return
          }
          // Stop executing this function if the difference between
          // current scroll position and last scroll position is less than some offset
            if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
                return
            }
            this.showNavbar = currentScrollPosition < this.lastScrollPosition
            this.lastScrollPosition = currentScrollPosition
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
            return this.$store.getters.getUsername;
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

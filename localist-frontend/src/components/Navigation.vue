<template>
    <div>
        <!-- <b-navbar toggleable="lg" type="light" variant="info" class="nav-bar" absolute>
            <b-navbar-brand to="/" class="nav-item nav-link" active-class="active" exact>Localist</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item
                        to="/tours"
                        class="nav-item nav-link"
                        active-class="active"
                        exact
                    >Tours</b-nav-item>
                    <b-nav-item
                        to="/guides"
                        class="nav-item nav-link"
                        active-class="active"
                        exact
                    >Guides</b-nav-item>
                    <b-nav-item
                        v-if="isAdmin"
                        to="/users"
                        class="nav-item nav-link"
                        active-class="active"
                        exact
                    >Admin</b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input
                            class="col-lg-5"
                            size="md"
                            placeholder="What is your dream experience?"
                        ></b-form-input>
                        <b-form-input class="col-lg-2" size="md" placeholder="mm/dd/yy"></b-form-input>
                        <b-form-input class="col-lg-2" size="md" placeholder="# of Guests"></b-form-input>
                        <b-button
                            size="md"
                            id="submit-button"
                            class="my-2 my-sm-0"
                            type="submit"
                        >Search</b-button>
                    </b-nav-form>
                    <b-nav-item
                        v-if="!isLoggedIn"
                        to="/signin"
                        class="nav-item nav-link"
                        active-class="active"
                        exact
                    >Sign In/Sign Up</b-nav-item>
                    <b-nav-item-dropdown
                        v-if="getUsername"
                        id="my-nav-dropdown"
                        :text="username"
                        extra-toggle-classes="nav-link-custom"
                        right
                    >
                        <b-dropdown-item to="/profile">Profile</b-dropdown-item>
                        <b-dropdown-item to="/settings">Settings</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item to="/signout">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>-->

        <v-toolbar class="nav-bar" light>
            <v-toolbar-side-icon></v-toolbar-side-icon>

            <v-btn to="/" icon>
                <v-icon>home</v-icon>
            </v-btn>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn to="/tours" flat>Tours</v-btn>
                <v-btn to="/guides" flat>Guides</v-btn>
                <v-btn v-if="isAdmin" to="/users" flat>Admin</v-btn>
            </v-toolbar-items>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>

            <v-btn dark to="/signin" v-if="!isLoggedIn">Sign In/Sign Up</v-btn>
            <v-menu :nudge-width="100" v-if="getUsername">
                <template v-slot:activator="{ on }">
                    <v-toolbar-title v-on="on">
                        <span>{{ username }}</span>
                        <v-icon light>arrow_drop_down_circle</v-icon>
                    </v-toolbar-title>
                </template>

                <v-list>
                    <v-list-tile to="/">
                        <v-list-tile-title>Profile</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile to="/">
                        <v-list-tile-title>
                            <v-icon light>settings</v-icon>Settings
                        </v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile to="/">
                        <v-list-tile-title>Signout</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
        </v-toolbar>
    </div>
</template>

<script>
export default {
    name: "Navigation",
    data: () => ({
        username: "",
        items: ["Profile", "Settings", "Signout"]
    }),
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
    background: #1e9600; /* fallback for old browsers */
    background: -webkit-linear-gradient(
        to right,
        #ff0000,
        #fff200,
        #1e9600
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
        to right,
        #ff0000,
        #fff200,
        #1e9600
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

#submit-button {
    color: black;
    background: #ff0000; /* fallback for old browsers */
    /* background: -webkit-linear-gradient(to left, #FF0000, #FFF200, #1E9600);
    background: linear-gradient(to left, #FF0000, #FFF200, #1E9600);  */
}
</style>

<template>
    <div>
        <v-navigation-drawer height="200vh" v-model="drawer" permanent class="profileNavigation">
            <v-toolbar flat class="transparent">
                <v-list class="pa-0">
                    <v-list-tile avatar>
                        <v-list-tile-avatar>
                            <img :src="getThumbnail">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>{{name}}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-toolbar>

            <v-list class="pt-0" dense>
                <v-divider></v-divider>

                <v-list-tile v-for="item in items" :key="item.title" @click="navigate(item.path)">
                    <v-list-tile-action>
                        <v-icon>{{item.icon}}</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>
<script>
import router from "../router";
export default {
    data() {
        return {
            name: "",
            userPic: "",
            drawer: true,
            items: [
                {
                    title: "Profile",
                    icon: "face",
                    path: "/profile/" + this.$store.getters.getUserKey
                },
                {
                    title: "Edit Profile",
                    icon: "dashboard",
                    path: "/account"
                },
                { title: "Your Tours", icon: "create", path: "/edit" }
            ],
            right: null
        };
    },
    methods: {
        navigate(link) {
            router.push(link);
        }
    },
    created() {
        var instance = this;
        this.$http
            .get("/user/find/" + this.$store.getters.getUserKey)
            .then(function(response) {
                response = response.data;
                if (response.name) {
                    instance.name =
                        response.name.first + " " + response.name.last;
                }
            });
    },
    computed: {
        getThumbnail: function() {
            return this.$store.getters.getThumbnail;
        }
    }
};
</script>
<style scoped>
.profileNavigation {
    padding-top: 5%;
}
</style>
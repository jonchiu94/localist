<template>
    <v-layout>
        <v-flex xs2 md2>
            <ProfileNavigation></ProfileNavigation>
        </v-flex>
        <v-flex xs10 md10>
            <v-layout row wrap>
                <v-flex>
                    <img v-if="userImage" :src="userImage" class="preview" height="300px">
                </v-flex>
                <v-flex>

                </v-flex>

            </v-layout>
        </v-flex>
    </v-layout>
</template>
<script>
    import ProfileNavigation from "./ProfileNavigation.vue";
    export default {
        data: () => ({
            userName: "",
            gender: "",
            city: "",
            country: "",
            userImage: "",

        }),
        created(){
            var instance = this;
            this.$http
                .get("/user/find/" + this.$route.params.id)
                .then(function(response){
                    response = response.data;
                    if (response.name) {
                        instance.userName = response.name.first + " " + response.name.last;
                    }
                    if (response.gender) {
                        instance.gender = response.gender;
                    }
                    if (response.location) {
                        instance.country = response.location.country;
                        instance.city = response.location.city;
                    }
                    if (response.image) {
                        instance.userImage = response.image;
                    }
                })
        },
        components: { ProfileNavigation }
    }
</script>
<style scoped>

</style>
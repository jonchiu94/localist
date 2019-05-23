<template>
    <v-layout class="profile">
        <v-flex xs2 md2>
            <ProfileNavigation></ProfileNavigation>
        </v-flex>
        <v-flex xs10 md10>
            <v-layout row wrap>
                <v-flex>
                    <h1>{{userName}}</h1>
                    <img v-if="userImage" :src="userImage" class="preview" height="300px">
                    <p>{{gender}}</p>
                    <p>{{city}}, {{country}}</p>
                    <p>Hi, I am {{userName}}. I am a Computer System Technology student from British Columbia Institute of Technology. <br>
                        Having been living in Vancouver for all my life, I have become familiar to all the unique spots that other don't know <br>
                    I hope that I can help you enjoy the city as much as I have.</p>

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
.profile{
    padding-top: 5%;
}
</style>
<template>
    <div>
        <form v-on:submit.prevent="editGuide">
            <div>
                <input type="text" :placeholder= "first_name" v-model="first_name">
                <input type="text" :placeholder= "last_name" v-model="last_name">
                <input type="text" :placeholder= "age" v-model="age">
                <input type="text" :placeholder= "gender" v-model="gender">
                <input type="text" :placeholder= "city" v-model="city">
                <input type="text" :placeholder= "country" v-model="country">
            </div>
            <button type="submit">Edit Tour</button>
        </form>
    </div>
</template>
<script>
    import router from "../router";
    export default {
        name: "editGuide",
        data: () => ({
            first_name: "",
            last_name: "",
            age: "",
            gender: "",
            city: "",
            country: ""
        }),
        mounted(){
            this.$http
                .get("/guide/" + this.$route.params.id)
                .then(response => (this.info = response))
                .catch(error => alert(error))
                .finally(() => (this.loading = false));
        },
        methods: {
            editGuide() {
                const formData = {
                    first_name: this.first_name,
                    last_name: this.last_name,
                    age: this.age,
                    gender: this.gender,
                    city: this.city,
                    country: this.country
                };
                this.$http
                    .patch("/guide/update/" + this.$route.params.id, formData)
                    .then(function(response) {
                        router.push("/guides");
                    })
                    .catch(function(error) {
                        alert(error);
                    });
            }
        }
    };
</script>
<style scoped>
</style>
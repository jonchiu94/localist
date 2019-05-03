<template>
    <div>
        <form v-on:submit.prevent="createTour">
            <div>
                <input type="text" :placeholder="title" v-model="title">
                <input type="text" :placeholder="description" v-model="description">
                <input type="text" :placeholder="duration_long" v-model="duration_long">
                <input type="text" :placeholder="duration_short" v-model="duration_short">
                <input type="text" :placeholder="price_high" v-model="price_high">
                <input type="text" :placeholder="price_low" v-model="price_low">
            </div>
            <button type="submit">Create Tour</button>
        </form>
    </div>
</template>
<script>
    import router from "../router";
    export default {
        name: "editTour",
        data: () => ({
            title: "",
            description: "",
            duration_long: "",
            duration_short: "",
            price_high: "",
            price_low: ""
        }),
        mounted(){
            this.$http
                .get("/tour/" + this.$route.params.id)
                .then(response => (this.info = response))
                .catch(error => alert(error))
                .finally(() => (this.loading = false));
        },
        methods: {
            editTour() {
                const formData = {
                    title: this.title,
                    description: this.description,
                    duration_long: this.duration_long,
                    duration_short: this.duration_short,
                    price_high: this.price_high,
                    price_low: this.price_low
                };
                this.$http
                    .patch("/tour/update/" + this.$route.params.id, formData)
                    .then(function(response) {
                        router.push("/tours");
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
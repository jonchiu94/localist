<template>
    <div >
        <form v-on:submit.prevent="createTour">
            <v-divider></v-divider>
            <div>
                <input type="text" placeholder="Title" v-model="title">
                <br>
                <input type="text" placeholder="Description" v-model="tour_description">
                <input type="text" placeholder="Category" v-model="category">
                <br>
                <input type="text" placeholder="Country" v-model="location.country">
                <input type="text" placeholder="City" v-model="location.city">
                <br>
                <input type="text" placeholder="Max Duration" v-model="duration.long">
                <input type="text" placeholder="Min Duration" v-model="duration.short">
                <br>
                <input type="text" placeholder="Max Price" v-model="price.high">
                <input type="text" placeholder="Min Price" v-model="price.low">
            </div>
            <button type="submit">Create Tour</button>
        </form>
    </div>
</template>
<script>
import router from "../router";
export default {
    name: "createTour",
    data: () => ({
        title: "Bike Up Cypress",
        tour_description: "asdsfd",
        category:"Bike",
        location: {
            country: "Canada",
            city: "Vancouver"
        },
        duration: {
            long: "8",
            short: "2"
        },
        price: {
            high: "300",
            low: "80"
        },
        user_key: 
        // this.$store.getters.getUserId
        "-LeIrh-Z8PYSfp9CTZsk"
    }),
    methods: {
        createTour() {
            const formData = {
                title: this.title,
                tour_description: this.tour_description,
                category: this.category,
                location: {
                    city: this.location.city,
                    country: this.location.country
                },
                duration: {
                    short: this.duration.short,
                    long: this.duration.long
                },
                price: {
                    high: this.price.high,
                    low: this.price.low
                },
                user_key: this.user_key
            };
            this.$http
                .post("/tour/add", formData)
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
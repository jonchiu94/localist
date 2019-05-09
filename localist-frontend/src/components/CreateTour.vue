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
        title: "Master the art of vegan cheese making",
        tour_description: "tour_description: SD@#345$%s^df&*(&f^%$#@",
        category:"COOKING CLASS",
        location: {
            country: "Canada",
            city: "Vancouver"
        },
        duration: {
            long: 5,
            short: 2
        },
        price: {
            high: 140,
            low: 98
        },
        user_key: "-LeIrh-Z8PYSfp9CTZsk"
    }),
    methods: {
        createTour() {
            const formData = {
                title: this.title,
                tour_description: this.tour_description,
                category: this.category,
                location: {
                    country: this.location.country,
                    city: this.location.city                    
                },
                duration: {
                    long: this.duration.long,
                    short: this.duration.short
                },
                price: {
                    high: this.price.high,
                    low: this.price.low
                },
                user_key: this.user_key
            };
            console.log(formData);
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
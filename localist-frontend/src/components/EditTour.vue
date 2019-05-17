<template>
    <div>
        <form v-on:submit.prevent="editTour">
            <v-layout row justify-center>
                <v-flex md5>
                    <v-text-field
                        xs4
                        label="Title *"
                        :placeholder="info.data.title"
                        v-model="title"
                    ></v-text-field>
                </v-flex>
            </v-layout>

            <v-layout row justify-center>
                <v-flex mx-2 md3>
                <v-text-field 
                    xs4
                    label="Description *"
                    v-model="tour_description"
                    :placeholder="info.data.tour_description"
                    ></v-text-field>
                </v-flex>

                <v-flex mx-2 md3>
                    <v-text-field
                        xs4
                        label="Category *"
                        v-model="category"
                        :placeholder="info.data.category"
                    ></v-text-field>
                </v-flex>
                </v-layout>

                <v-layout row justify-center>
                <v-flex mx-2 md3>
                <v-text-field
                    xs4
                    label="Country *"
                    v-model="location.country"
                    :placeholder="info.data.location.country"
                    ></v-text-field>
                </v-flex>

                <v-flex mx-2 md3>
                <v-text-field
                    xs4
                    label="City *"
                    v-model="location.city"
                    :placeholder="info.data.location.city"
                    ></v-text-field>
                </v-flex>
            </v-layout>



            <div>
                <p>Title</p>
                <input type="text" :placeholder="info.data.title" v-model="title">
                <br>
                <p>Description</p>
                <input type="text" :placeholder="info.data.description" v-model="description">
                <br>
                <p>Max Duration</p>
                <input type="text" :placeholder="info.data.duration.long" v-model="duration_long">
                <br>
                <p>Min Duration</p>
                <input type="text" :placeholder="info.data.duration.short" v-model="duration_short">
                <br>
                <p>Max Price</p>
                <input type="text" :placeholder="info.data.price.high" v-model="price_high">
                <br>
                <p>Min Price</p>
                <input type="text" :placeholder="info.data.price.low" v-model="price_low">
            </div>
            <button type="submit">Edit Tour</button>
        </form>
    </div>
</template> 


<script>
    import router from "../router";

    export default {
        name: "editTour",

        data: () => ({
            info: "",

            title: "",
            tour_description: "",
            category:"",
            location: {
                country: "",
                city: ""
            },
            duration: {
                long: "",
                short: ""
            },
            price: {
                high: "",
                low: ""
            },
            guests: {
                high: "",
                low: ""
            },
            additional_comments: "",
            availability: [],
            user_key: "",

        }),

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
        },

        mounted() {
            this.$http
                .get("/tour/find/" + this.$route.params.id + "/true")
                .then(response => (this.info = response))
                .catch(error => alert(error))
                .finally(() => (this.loading = false));
        },
    }
    
</script>
<style scoped>
</style>
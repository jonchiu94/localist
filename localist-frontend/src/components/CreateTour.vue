<template>
    <div >

        <form v-on:submit.prevent="createTour">
            <v-divider></v-divider>
            <v-layout row justify-center>
                <v-flex md5>
                    <v-text-field
                            xs4
                            label="Title *"
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
                      ></v-text-field>
                </v-flex>

                <v-flex mx-2 md3>
                    <v-text-field
                            xs4
                            label="Category *"
                            v-model="category"
                      ></v-text-field>
                </v-flex>
            </v-layout>

            <v-layout row justify-center>
                <v-flex mx-2 md3>
                    <v-text-field
                            xs4
                            label="Country *"
                            v-model="location.country"
                      ></v-text-field>
                </v-flex>

                <v-flex mx-2 md3>
                    <v-text-field
                            xs4
                            label="City *"
                            v-model="location.city"
                      ></v-text-field>
                </v-flex>
            </v-layout>

            <v-layout row justify-center>
                <v-flex mx-2 md3>

                    <v-text-field
                            xs4
                            label="Max Duration *"
                            v-model="duration.long"
                      ></v-text-field>
                </v-flex>

                <v-flex mx-2 md3>
                    <v-text-field
                            xs4
                            label="Min Duration *"
                            v-model="duration.short"
                      ></v-text-field>
                </v-flex>
            </v-layout>

            <v-layout row justify-center>
                <v-flex mx-2 md3>
                    <v-text-field
                            xs4
                            label="Max Price *"
                            v-model="price.high"
                      ></v-text-field>
                </v-flex>

                <v-flex mx-2 md3>
                    <v-text-field
                            xs4
                            label="Min Price *"
                            v-model="price.low"
                      ></v-text-field>
                </v-flex>
            </v-layout>
            <v-layout mx-5 row justify-center>
                <v-flex mx-5 md3>
                    <v-text-field
                            xs4
                            background-color="white"
                            label="Additional Comments"
                            v-model="additional_comments"
                    ></v-text-field>
                </v-flex>

                <v-flex mx-5 md3>
                    <v-text-field
                            xs4
                            background-color="white"
                            label="# of Guests"
                            v-model="guests"
                    ></v-text-field>
                </v-flex>
            </v-layout>
            <v-layout mx-5 row justify-center>
                <v-flex mx-5 md3>
                    <v-date-picker v-model="pickAvaiability.pickDate"></v-date-picker>
                </v-flex>
                <v-flex mx-5 md3>
                    <v-time-picker v-model="pickAvaiability.pickTime" format="24hr"></v-time-picker>
                </v-flex>
                <v-flex mx-5 md3>
                    <v-btn @click="addAvailability" large class="cyan darken-2 white--text">Add Availability</v-btn>
                    <v-list subheader>
                        <v-subheader>Recent chat</v-subheader>
                        <v-list-tile
                                v-for="(timeslots, i) in availability"
                                :key="i"
                                avatar
                        >
                            <v-list-tile-avatar>
                                <img src="../assets/img/clock.png">
                            </v-list-tile-avatar>

                            <v-list-tile-content>
                                <v-list-tile-title>{{timeslots.pickDate}}</v-list-tile-title>
                                <v-list-tile-content>{{timeslots.pickTime}}</v-list-tile-content>
                            </v-list-tile-content>

                            <v-btn @click="deleteTimeSlot(i)"
                                flat
                            >
                                <v-icon>remove_circle</v-icon>
                            </v-btn>
                        </v-list-tile>
                    </v-list>
                </v-flex>


            </v-layout>

            <v-layout row justify-center>
                <v-flex mx-2 md3>
                    <v-text-field
                            xs4
                            label="Max Guests"
                            v-model="guests.high"
                      ></v-text-field>
                </v-flex>

                <v-flex mx-2 md3>
                    <v-text-field
                            xs4
                            label="Min Guests"
                            v-model="guests.low"
                      ></v-text-field>
                </v-flex>
            </v-layout>

            <v-layout row justify-center>
                <v-flex md5>
                    <v-text-field
                            xs4
                            label="Additional Comments"
                            v-model="additional_comments"
                      ></v-text-field>
                </v-flex>
            </v-layout>

            <v-btn large class="cyan darken-2 white--text" type="submit">Create Tour</v-btn>
        </form>
    </div>
</template>
<script>
import router from "../router";
export default {
    name: "createTour",
    data: () => ({
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
        guests: "",
        availability: [
        ],
        user_key: "",
        pickAvaiability:{
            pickDate: new Date().toISOString().substr(0, 10),
            pickTime: "",
        }
    }),
    methods: {
        deleteTimeSlot(i){
           this.availability.splice(i, 1)
        },
        addAvailability(){
            if((this.pickAvaiability.pickDate != null || "") && (this.pickAvaiability.pickTime != null || "")){
                this.availability.push(this.pickAvaiability);
                console.log(this.availability[0]);
            }
        },
        createTour() {
            const formData = {
                title: this.title,
                tour_description: this.tour_description,
                additional_comments: this.additional_comments,
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
                guests: {
                    high: this.guests.high,
                    low: this.guests.low
                },
                user_key: this.$store.getters.getUserKey
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
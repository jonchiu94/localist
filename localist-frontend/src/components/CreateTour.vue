<template>
    <div>
        <form v-on:submit.prevent="createTour">
            <v-divider></v-divider>
            <v-flex xs4>
                <h2>Profile Image</h2>
                <div id="prev">
                    <div id="preview">
                        <img v-if="url" :src="url" class="preview">
                        <img v-else :src="imgURL" class="preview">
                    </div>
                    <br>
                    <input
                        type="file"
                        id="files"
                        accept="image/x-png, image/gif, image/jpeg"
                        ref="files"
                        v-on:change="onFileChange"
                    >
                </div>
            </v-flex>
            <v-flex xs4>
                <h2>Profile Image</h2>
                <div id="prev">
                    <div id="preview">
                        <img v-if="additionalUrl" :src="additionalUrl" class="preview">
                        <img v-else :src="imgURL" class="preview">
                    </div>
                    <br>
                    <input
                        multiple
                        type="file"
                        id="additionalFiles"
                        accept="image/x-png, image/gif, image/jpeg"
                        ref="additionalFiles"
                        v-on:change="onAdditionalFileChange"
                    >
                </div>
            </v-flex>
            <v-layout row justify-center>
                <v-flex md5>
                    <v-text-field xs4 label="Title *" v-model="title"></v-text-field>
                </v-flex>
            </v-layout>

            <v-layout row justify-center>
                <v-flex mx-2 md3>
                    <v-text-field xs4 label="Description *" v-model="tour_description"></v-text-field>
                </v-flex>

                <v-flex mx-2 md3>
                    <v-text-field xs4 label="Category *" v-model="category"></v-text-field>
                </v-flex>
            </v-layout>

            <v-layout row justify-center>
                <v-flex mx-2 md3>
                    <v-text-field xs4 label="Country *" v-model="location.country"></v-text-field>
                </v-flex>

                <v-flex mx-2 md3>
                    <v-text-field xs4 label="City *" v-model="location.city"></v-text-field>
                </v-flex>
            </v-layout>

            <v-layout row justify-center>
                <v-flex mx-2 md3>
                    <v-text-field xs4 label="Max Duration *" v-model="duration.long"></v-text-field>
                </v-flex>

                <v-flex mx-2 md3>
                    <v-text-field xs4 label="Min Duration *" v-model="duration.short"></v-text-field>
                </v-flex>
            </v-layout>

            <v-layout row justify-center>
                <v-flex mx-2 md3>
                    <v-text-field xs4 label="Max Price *" v-model="price.high"></v-text-field>
                </v-flex>

                <v-flex mx-2 md3>
                    <v-text-field xs4 label="Min Price *" v-model="price.low"></v-text-field>
                </v-flex>
            </v-layout>

            <v-layout row justify-center>
                <v-flex mx-2 md3>
                    <v-text-field xs4 label="Max Guests" v-model="guests.high"></v-text-field>
                </v-flex>

                <v-flex mx-2 md3>
                    <v-text-field xs4 label="Min Guests" v-model="guests.low"></v-text-field>
                </v-flex>
            </v-layout>

            <v-layout row justify-center>
                <v-flex md5>
                    <v-text-field xs4 label="Additional Comments" v-model="additional_comments"></v-text-field>
                </v-flex>
            </v-layout>

            <v-btn large class="cyan darken-2 white--text" type="submit">Create Tour</v-btn>

            <v-layout mx-5 row justify-center>
                <v-flex mx-5 md3>
                    <v-date-picker v-model="dateInput"></v-date-picker>
                </v-flex>
                <v-flex mx-5 md3>
                    <v-time-picker v-model="timeInput" format="24hr"></v-time-picker>
                </v-flex>
                <v-flex mx-5 md3>
                    <v-btn
                        @click="addAvailability"
                        large
                        class="cyan darken-2 white--text"
                    >Add Availability</v-btn>
                    <v-list subheader>
                        <v-subheader>Availability</v-subheader>
                        <v-list-tile v-for="timeSlot in availability" :key="timeSlot.date" avatar>
                            <v-list-tile-avatar>
                                <img src="../assets/img/clock_black.png">
                            </v-list-tile-avatar>

                            <v-list-tile-content>
                                <v-list-tile-title>{{timeSlot.date}}</v-list-tile-title>
                                <v-list-tile-content>{{timeSlot.time}}</v-list-tile-content>
                            </v-list-tile-content>

                            <v-btn @click="deleteTimeSlot(i)" flat>
                                <v-icon>remove_circle</v-icon>
                            </v-btn>
                        </v-list-tile>
                    </v-list>
                </v-flex>
            </v-layout>
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
        category: "",
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
        dateInput: "",
        timeInput: "",
        pickAvailability: {
            date: new Date().toISOString().substr(0, 10),
            time: ""
        },
        files: [],
        additionalFiles: [],
        url: "",
        imgURL: ""
    }),

    methods: {
        deleteTimeSlot(i) {
            this.availability.splice(i, 1);
        },
        addAvailability() {
            this.pickAvailability.date = this.dateInput;
            this.pickAvailability.time = this.timeInput;
            if (
                (this.pickAvailability.date != null || "") &&
                (this.pickAvailability.time != null || "")
            ) {
                this.availability.push({
                    date: this.pickAvailability.date,
                    time: this.pickAvailability.time
                });
            }
        },

        createTour() {
            var instance = this;
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
                guests: {
                    high: this.guests.high,
                    low: this.guests.low
                },
                additional_comments: this.additional_comments,
                availability: this.availability,
                user_key: this.$store.getters.getUserKey
            };

            this.$http
                .post("/tour/add", formData)
                .then(function(response) {
                    instance.submitFiles(response.data.id);
                    instance.submitAdditionalFiles(response.data.id);
                    router.push("/tours");
                })
                .catch(function(error) {
                    alert(error);
                });
        },
        onFileChange(e) {
            this.files = [];
            this.files.push(e.target.files[0]);
            this.url = URL.createObjectURL(this.files[0]);
            // this.files = this.$refs.files.files;
        },
        onAdditionalFileChange(e) {
            // this.additionalFiles = [];
            // this.additionalFiles.push(e.target.files[0]);
            // this.additionalUrl = URL.createObjectURL(this.additionalFiles[0]);
            this.additionalFiles = this.$refs.additionalFiles.files;
        },

        /*
              Submits files to the server
            */
        submitFiles(tour_key) {
            var instance = this;
            /*
                  Initialize the form data
                */
            var fileData = new FormData();
            /*
                  Iteate over any file sent over appending the files
                  to the form data.
                */
            for (let i = 0; i < this.files.length; i++) {
                fileData.append("img", this.files[i]);
            }
            /*
                  Make the request to the POST /select-files URL
                */
            if (this.files.length > 0) {
                this.$http
                    .post("/tour/image/main/" + tour_key, fileData, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    })
                    .then(function(data) {
                        // router.push("/tours");
                    })
                    .catch(function(err) {
                        console.log(err);
                    });
            }
        },
        submitAdditionalFiles(tour_key) {
            var instance = this;
            /*
                  Initialize the form data
                */
            var fileData = new FormData();
            /*
                  Iteate over any file sent over appending the files
                  to the form data.
                */
            for (let i = 0; i < this.additionalFiles.length; i++) {
                fileData.append("img", this.additionalFiles[i]);
            }
            /*
                  Make the request to the POST /select-files URL
                */
            if (this.additionalFiles.length > 0) {
                this.$http
                    .post("/tour/image/additional/" + tour_key, fileData, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    })
                    .then(function(data) {
                        // router.push("/tours");
                    })
                    .catch(function(err) {
                        console.log(err);
                    });
            }
        },

        /*
              Removes a select file the user has uploaded
            */
        removeFile(key) {
            this.files.splice(key, 1);
        }
    }
};
</script>
<style scoped>
</style>
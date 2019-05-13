<template>
    <v-container grid-list-xl text-xs-center>
        <v-layout row wrap>
            <v-flex xs12>
                <form v-on:submit.prevent="updateProfile">
                    <div>
                        <v-flex xs12>
                            <h1>Profile</h1>
                        </v-flex>
                        <v-layout row wrap>
                            <v-flex xs4>
                            <h2>Profile Image</h2>
                                <div id="prev">
                                    <div id="preview">
                                        <img v-if="url" :src="url" class="preview">
                                    </div>
                                    <br>
                                    <input
                                        type="file"
                                        id="file"
                                        accept="image/x-png, image/gif, image/jpeg"
                                        ref="file"
                                        v-on:change="onFileChange">
                                </div>
                            </v-flex>
                            <v-flex xs4>
                                <v-layout row wrap>
                                    <v-flex xs6 class="field">
                                        First Name 
                                    </v-flex>
                                    <v-flex xs6>
                                        <v-text-field
                                            single-line
                                            outline
                                            v-model="first_name"
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap>
                                    <v-flex xs6 class="field">
                                        Last Name
                                    </v-flex>
                                    <v-flex xs6>
                                        <v-text-field
                                            single-line
                                            outline
                                            v-model="last_name"
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap>
                                    <v-flex xs6 class="field">
                                        Date of Birth
                                    </v-flex>
                                    <v-flex xs6>
                                        <v-menu
                                            v-model="date_menu"
                                            :close-on-content-click="false"
                                            full-width
                                            max-width="290"
                                            >
                                            <template v-slot:activator="{ on }">
                                                <v-text-field
                                                :value="computedDateFormatted"
                                                clearable
                                                readonly
                                                v-on="on"
                                                ></v-text-field>
                                            </template>
                                            <v-date-picker
                                                v-model="dob"
                                                @change="date_menu = false"
                                            ></v-date-picker>
                                        </v-menu>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                            <v-flex xs4>
                                <v-layout row wrap>
                                    <v-flex xs6 class="field">
                                        Gender
                                    </v-flex>
                                    <v-flex xs6>
                                        <v-select
                                            :items="genders"
                                            v-model="gender"
                                            ></v-select>
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap>
                                    <v-flex xs6 class="field">
                                        City
                                    </v-flex>
                                    <v-flex xs6>
                                        <v-text-field
                                            single-line
                                            outline
                                            v-model="city"
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap>
                                    <v-flex xs6 class="field">
                                        Country
                                    </v-flex>
                                    <v-flex xs6>
                                        <v-text-field
                                            single-line
                                            outline
                                            v-model="country"
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                        </v-layout>
                    </div>
                </form>
                <div class="large-12 medium-12 small-12 cell">
                    <v-btn v-on:click="submitFiles()">Submit</v-btn>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import moment from 'moment'
import router from "../router";
export default {

    data: () => ({
        files: [],
        url: null,
        first_name: "",
        last_name: "",
        dob: "",
        gender: "",
        city: "",
        country: "",
        genders: ['Male', 'Female', 'Other'],
        date_menu: false
    }),

    /*
          Defines the method used by the component
        */
    computed: {
        computedDateFormatted () {
        return this.dob ? moment(this.dob).format('dddd, MMMM Do YYYY') : ''
      },
    },
    methods: {
        createGuide() {
            formData = {
                first_name: this.first_name,
                last_name: this.last_name,
                dob: this.dob,
                gender: this.gender,
                city: this.city,
                country: this.country
            };
        },
        onFileChange(e) {
            this.files = [];
            this.files.push(e.target.files[0]);
            this.url = URL.createObjectURL(this.files[0]);
            // this.files = this.$refs.files.files;
        },
        /*
              Adds a file
            */
        addFiles() {
            this.$refs.files.click();
        },

        /*
              Submits files to the server
            */
        submitFiles() {
            /*
                  Initialize the form data
                */
            var fileData = new FormData();
            var formData = new FormData();

            /*
                  Iteate over any file sent over appending the files
                  to the form data.
                */
            var file = [];
            for (let i = 0; i < this.files.length; i++) {
                fileData.append("img", this.files[i]);
            }
            formData.append("first_name", this.first_name);
            formData.append("last_name", this.last_name);
            formData.append("date_of_birth", mystring = this.dob.split('-').join(''));
            formData.append("gender", this.gender);
            formData.append("city", this.city);
            formData.append("country", this.country);
            for (var value of formData.values()) {
                console.log(value);
            }
            /*
                  Make the request to the POST /select-files URL
                */
            this.$http
                .post(
                    "/image/user/" + this.$store.getters.getUserKey,
                    fileData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    }
                )
                .then(function(data) {
                    // router.push("/tours");
                })
                .catch(function() {
                    console.log("FAILURE!!");
                });
        },

        /*
              Handles the uploading of files
            */
        handleFilesUpload() {
            let uploadedFiles = this.$refs.files.files;

            /*
                  Adds the uploaded file to the files array
                */
            for (let i = 0; i < uploadedFiles.length; i++) {
                this.files.push(uploadedFiles[i]);
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
    .field{
        font-size: 24px;
    }
    .preview{
        max-height: 200px;
    }
</style>
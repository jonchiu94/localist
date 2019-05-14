<template>

<!--     <div class="container">
        <div id="prev">
            <input
                type="file"
                id="file"
                accept="image/x-png, image/gif, image/jpeg"
                ref="file"
                v-on:change="onFileChange"
            >
            <div id="preview">
                <img v-if="url" :src="url" height="100">
            </div>
        </div> -->

        <!-- <div class="large-12 medium-12 small-12 cell">-->
        <!--<label>-->
        <!--<input type="file" id="files" accept="image/x-png, image/gif, image/jpeg" ref="files" v-on:change="handleFilesUpload()"/>-->
        <!--</label>-->
        <!--</div>-->
        <!--<div class="large-12 medium-12 small-12 cell">-->
        <!--<div v-for="(file, key) in files" class="file-listing">{{ file.name }} <span class="remove-file" v-on:click="removeFile( key )">Remove</span></div>-->
        <!--</div>-->
        <!--<br> -->
        
        <!-- <form v-on:submit.prevent="updateProfile">
            <div>
                <h3>Your Profile</h3>
                <input type="text" placeholder="First Name" v-model="first_name">
                <br>
                <input type="text" placeholder="Last Name" v-model="last_name">
                <br>
                <input type="text" placeholder="Age" v-model="age">
                <br>
                <input type="text" placeholder="Gender" v-model="gender">
                <br>
                <input type="text" placeholder="City" v-model="city">
                <br>
                <input type="text" placeholder="Country" v-model="country">
            </div>
        </form>
        <div class="large-12 medium-12 small-12 cell">
            <button v-on:click="submitFiles()">Submit</button>
        </div>
    </div> -->

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
                                        v-on:change="onFileChange"
                                    >
                                </div>
                            </v-flex>
                            <v-flex xs4>
                                <v-layout row wrap>
                                    <v-flex xs6 class="field">First Name</v-flex>
                                    <v-flex xs6>
                                        <v-text-field single-line outline v-model="first_name"></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap>
                                    <v-flex xs6 class="field">Last Name</v-flex>
                                    <v-flex xs6>
                                        <v-text-field single-line outline v-model="last_name"></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap>
                                    <v-flex xs6 class="field">Date of Birth</v-flex>
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
                                    <v-flex xs6 class="field">Gender</v-flex>
                                    <v-flex xs6>
                                        <v-select :items="genders" v-model="gender"></v-select>
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap>
                                    <v-flex xs6 class="field">City</v-flex>
                                    <v-flex xs6>
                                        <v-text-field single-line outline v-model="city"></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap>
                                    <v-flex xs6 class="field">Country</v-flex>
                                    <v-flex xs6>
                                        <v-text-field single-line outline v-model="country"></v-text-field>
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
import moment from "moment";
import router from "../router";
export default {
    name: "profile",
    data: () => ({
        files: [],
        url: null,
        first_name: "",
        last_name: "",
        dob: "",
        gender: "",
        city: "",
        country: "",
        genders: ["Male", "Female", "Other"],
        date_menu: false
    }),
    mounted() {
        var r = this;
        this.$http
            .get("/user/find/" + this.$store.getters.getUserKey)
            .then(function(response) {
                response.data.location
                    ? (r.city = response.data.location.city)
                    : "";
                response.data.location
                    ? (r.country = response.data.location.country)
                    : "";
                response.data.name
                    ? (r.first_name = response.data.name.first)
                    : "";
                response.data.name
                    ? (r.last_name = response.data.name.last)
                    : "";
                r.gender = response.data.gender;
                r.url = response.data.image;
                // r.dob = response.data.date_of_birth;
            })
            .catch(error => alert(error))
            .finally(() => (this.loading = false));
    },
    computed: {
        computedDateFormatted() {
            return this.dob
                ? moment(this.dob).format("dddd, MMMM Do YYYY")
                : "";
        }
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
            formData.append(
                "date_of_birth",
                (mystring = this.dob.split("-").join(""))
            );
            formData.append("gender", this.gender);
            formData.append("city", this.city);
            formData.append("country", this.country);
            for (var value of formData.values()) {
                this.console.log(value);
            }
            /*
                  Make the request to the POST /select-files URL
                */
            this.$http
                .post(
                    "/user/image/" + this.$store.getters.getUserKey,
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
                    this.console.log("FAILURE!!");
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
.field {
    font-size: 24px;
}
.preview {
    max-height: 200px;
}
</style>
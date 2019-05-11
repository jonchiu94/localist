<template>
    <div class="container">
        <div id="prev">
            <input
                type="file"
                id="files"
                multiple
                accept="image/x-png, image/gif, image/jpeg"
                ref="files"
                v-on:change="onFileChange"
            >
            <div id="preview">
                <img v-if="url" :src="url" height="100">
            </div>
        </div>
        <form v-on:submit.prevent="updateProfile">
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
    </div>
</template>
<script>
import router from "../router";
export default {
    /*
          Defines the data used by the component
        */
    data: () => ({
        files: [],
        url: null,
        first_name: "",
        last_name: "",
        age: "",
        gender: "",
        city: "",
        country: ""
    }),

    /*
          Defines the method used by the component
        */
    methods: {
        createGuide() {
            formData = {
                first_name: this.first_name,
                last_name: this.last_name,
                age: this.age,
                gender: this.gender,
                city: this.city,
                country: this.country
            };
        },
        onFileChange() {
            // this.files = [];
            // this.files.push(e.target.files[0]);
            // this.url = URL.createObjectURL(this.files[0]);
            this.files = this.$refs.files.files;
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
            formData.append("age", this.age);
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
                .post("/image", fileData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })
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
</style>
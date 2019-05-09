<template>
    <div class="container">
        <div id="prev">
            <input type="file" accept="image/x-png, image/gif, image/jpeg" ref="files" v-on:change="onFileChange" />
            <div id="preview">
                <img v-if="url" :src="url" height="100" />
            </div>
        </div>
        <!--<div class="large-12 medium-12 small-12 cell">-->
            <!--<label>-->
                <!--<input type="file" id="files" accept="image/x-png, image/gif, image/jpeg" ref="files" v-on:change="handleFilesUpload()"/>-->
            <!--</label>-->
        <!--</div>-->
        <!--<div class="large-12 medium-12 small-12 cell">-->
            <!--<div v-for="(file, key) in files" class="file-listing">{{ file.name }} <span class="remove-file" v-on:click="removeFile( key )">Remove</span></div>-->
        <!--</div>-->
        <!--<br>-->
        <form v-on:submit.prevent="updateProfile">
        <div>
            <h3>Your Profile</h3>
            <input type="text" placeholder="First Name" v-model="first_name"><br>
            <input type="text" placeholder="Last Name" v-model="last_name"><br>
            <input type="text" placeholder="Age" v-model="age"><br>
            <input type="text" placeholder="Gender" v-model="gender"><br>
            <input type="text" placeholder="City" v-model="city"><br>
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
        data: () =>({
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
            onFileChange(e) {
                this.files = [];
                this.files.push(e.target.files[0]);
                this.url = URL.createObjectURL(this.files[0]);
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
            submitFiles(){
                /*
                  Initialize the form data
                */
                var formData = new FormData();
                      //{
                    // first_name: this.first_name,
                    // last_name: this.last_name,
                    // age: this.age,
                    // gender: this.gender,
                    // city: this.city,
                    // country: this.country
                //};

                /*
                  Iteate over any file sent over appending the files
                  to the form data.
                */
                for( let i = 0; i < this.files.length; i++ ){
                    let file = this.files[i];

                    formData.append('img[' + i + ']', file);
                }
                for (var value of formData.values()) {
                    console.log(value); 
                }
                /*
                  Make the request to the POST /select-files URL
                */
                this.$http
                    .post( "/image",
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(function(){
                    console.log('SUCCESS!!');
                    // router.push("/tours");
                })
                .catch(function(){
                    console.log('FAILURE!!');
                });
            },

            /*
              Handles the uploading of files
            */
            handleFilesUpload(){
                let uploadedFiles = this.$refs.files.files;

                /*
                  Adds the uploaded file to the files array
                */
                for(let i = 0; i < uploadedFiles.length; i++ ){
                    this.files.push( uploadedFiles[i] );
                }
            },

            /*
              Removes a select file the user has uploaded
            */
            removeFile( key ){
                this.files.splice( key, 1 );
            }
        }
    }
</script>
<style scoped>

</style>
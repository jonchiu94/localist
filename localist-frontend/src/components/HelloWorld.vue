<template>
  <form v-on:submit.prevent="signUp">
    <div class="form-group">
      <label for="email">Email address </label>
        <input type="email" class="form-control" v-model="email" aria-describedby="emailHelp" placeholder="Enter email">
    </div>
    <div class="form-group">
      <label for="password">Password </label>
      <input type="password" class="form-control" v-model="password" placeholder="Password">
    </div>
    <div class="form-group">
      <label for="name">Name </label>
      <input class="form-control" v-model="name" placeholder="Name">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data: () => ({
            email: '',
            password: '',
            name: ''
        }),
        props: {
            msg: String
        },
        methods: {
            signUp() {
                var axios = require('axios');
                const formData = {
                    email: this.email,
                    password: this.password,
                    name: this.name
                };
                axios.post('http://localhost:1337/signup', formData)
                    .then(function(response) {
                        console.log(response);
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

</style>

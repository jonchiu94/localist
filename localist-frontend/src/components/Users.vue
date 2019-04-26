<template>
  <b-row>
    <b-col cols="12">
      <div class = "tableDiv">
        <b-jumbotron bg-variant ="dark" text-variant="white" border-variant="dark">
          <div class="media" v-for="user in users" :key="user.uid">
            <div class="media-body">
                <h1></h1>
              <h3>email: {{user.email}}</h3>
              <h3>admin: {{user.admin}}</h3>
              <hr>
            </div>
          </div>
        </b-jumbotron>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import router from '../router'

const API_URL = 'http://localhost:1337/users';

export default {
  name: 'Users',
  data: () => ({
    users: [],
    UserRecord: {
      email: '',
      admin: ''
    }
  }),
  mounted() {
        const axios = require('axios')

        axios.get(API_URL).then(response => {console.log(response.data);});
        axios.get(API_URL).then(response => {this.users = response.data.users;});
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

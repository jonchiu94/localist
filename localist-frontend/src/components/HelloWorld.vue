<template>
  <form v-on:submit.prevent="signUp">
    <div class="form-group">
      <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" class="form-control" id="password" placeholder="Password">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'HelloWorld',
    data: () => ({
      email: '',
      password: ''
  }),
  props: {
    msg: String
  },
  methods: {
    signUp()
    {
      const formData = {
        email: this.email,
        password: this.password
      };
      // this.$http.post('http://localhost:1337/signup', formData, {emulateJSON: true})
      // .then(response => {
        
      // }, response => {
      //   console.error(response.status);
      // })
      fetch('http://localhost:1337/signup', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'content-type': 'text/plain'
        }
      }).then(response => response.json()).then((result) => {
        
      })
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

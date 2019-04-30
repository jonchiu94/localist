<template>
  <div id="app">
    <h1>Localist</h1>
    <hr>
    <router-link to="/">Home</router-link>
    <router-link to="/tours">Tours</router-link>
    <router-link to="/guides">Guides</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {
      
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

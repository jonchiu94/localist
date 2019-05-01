<template>
  <div id="app">
    <Navigation id="navBar"></Navigation>
    <router-view></router-view>
  </div>
</template>

<script>

  import Navigation from './components/Navigation.vue'

  export default {
    name: 'App',
    components: { Navigation }
  }
</script>

<style>
  html, body {
    height: 100%;
  }

  #app {
    min-height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: url('https://images.unsplash.com/photo-1555985202-12975b0235dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80') no-repeat center center fixed;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
		/* background-image: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url('https://images.unsplash.com/photo-1550596334-7bb40a71b6bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'); */
  }

  #navBar {
    margin-bottom: 10%;
  }
</style>

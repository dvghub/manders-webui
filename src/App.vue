<template>
  <div id="app">
    <navi />
    <router-view/>
  </div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 0;
    margin: 0;
  }
</style>

<script>
  import navi from "./components/navi";

  export default {
    data() {
      return {
        user: null
      }
    },
    mounted() {
      this.user = sessionStorage.getItem('user');
    },
    components: {navi}
  }
</script>

<template>
    <div class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a href="/#/" class="navbar-brand">🤏 Acupunctuur Manders</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#dropdown" aria-label="Navi toggle" aria-expanded="false">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="dropdown">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" v-bind:class="{ active: homeActive }" href="/#/">homepagina</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" v-bind:class="{ active: contactActive }" href="/#/contact">contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" v-bind:class="{ active: infoActive }" href="/#/informatie">informatie</a>
                </li>
            </ul>

            <ul class="navbar-nav ml-auto">
                <li class="nav-item" v-if="this.$parent.user === null">
                    <a class="nav-link" v-bind:class="{ active: loginActive }" href="/#/login">login</a>
                </li>
                <li class="nav-item" v-if="this.$parent.user === null">
                    <a class="nav-link" v-bind:class="{ active: registerActive }" href="/#/register">registreren</a>
                </li>
                <li class="nav-item" v-if="this.$parent.user !== null">
                    <a class="nav-link" v-on:click="logout">uitloggen</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    methods: {
      logout() {
        this.$parent.user = null;
        sessionStorage.removeItem('user');
      }
    },
    computed: {
      homeActive() {
        return this.$route.path === '/'
      },
      contactActive() {
        return this.$route.path === '/contact'
      },
      infoActive() {
        return this.$route.path === '/informatie'
      },
      loginActive() {
        return this.$route.path === '/login'
      },
      registerActive() {
        return this.$route.path === '/register'
      }
    },
    name: "navi"
  }
</script>

<style scoped>

</style>

<template>
    <div class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a href="/#/" class="navbar-brand">🤏 Acupunctuur Manders</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#dropdown" aria-label="Navi toggle" aria-expanded="false">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="dropdown">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" v-bind:class="{ active: isActive('') }" href="/#/">homepagina</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" v-bind:class="{ active: isActive('contact') }" href="/#/contact">contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" v-bind:class="{ active: isActive('informatie') }" href="/#/informatie">informatie</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" v-bind:class="{ active: isActive('agenda') }" href="/#/agenda">agenda</a>
                </li>
            </ul>

            <ul class="navbar-nav ml-auto">
                <li class="nav-item" v-if="this.$parent.user === null">
                    <a class="nav-link" v-bind:class="{ active: isActive('login') }" href="/#/login">login</a>
                </li>
                <li class="nav-item" v-if="this.$parent.user === null">
                    <a class="nav-link" v-bind:class="{ active: isActive('register') }" href="/#/register">registreren</a>
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
      isActive(name) {
        return this.$route.path === '/' + name
      },
      logout() {
        this.$parent.user = null;
        sessionStorage.removeItem('user');
      }
    },
    name: "navi"
  }
</script>

<style scoped>

</style>

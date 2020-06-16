<template>
    <div class="card col-10 col-md-7 col-lg-5 mx-auto my-5 border-0">
        <h3 class="card-header bg-white">login</h3>
        <div class="card-body text-left">
            <form>
                <div class="form-group">
                    <label for="email">email</label>
                    <input type="email" class="form-control" id="email" v-model="email" />
                </div>
                <div class="form-group">
                    <label for="password">wachtwoord</label>
                    <input type="password" class="form-control" id="password" v-model="password" />
                </div>
                <div class="alert" v-if="error !== ''">{{ error }}</div>
                <button type="button" class="btn btn-secondary" v-on:click="login">login</button>
            </form>
        </div>
    </div>
</template>

<script>
  import api from '../api.config.js'
  const axios = require('axios');

  export default {
    data () {
      return {
        info: null,
        email: '',
        password: '',
        error: ''
      }
    },
    methods: {
      login () {
        axios.post(api.url + '/user/login', {
            email: this.email,
            password: this.password
          })
          .then(response => {
            console.log(response.data);
            this.$parent.user = response.data;
          })
      }
    },
    name: "login"
  }
</script>

<style scoped>

</style>

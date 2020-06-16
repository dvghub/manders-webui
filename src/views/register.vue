<template>
    <div class="card col-10 col-md-7 col-lg-5 mx-auto my-5 border-0">
        <h3 class="card-header bg-white">registreren</h3>
        <div class="card-body text-left">
            <div v-if="message !== ''" class="col-12 bg-light p-2">
                {{ message }}
            </div>
            <form>
                <div class="form-group">
                    <label for="firstname">naam</label>
                    <div class="row">
                        <div class="col">
                            <input type="text" class="form-control" id="firstname" placeholder="voornaam." v-model="firstname" />
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" id="lastname" placeholder="achternaam." v-model="lastname" />
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="email">email</label>
                    <input type="email" class="form-control" id="email" placeholder="" v-model="email" />
                </div>
                <div class="form-group">
                    <label for="password">wachtwoord</label>
                    <input type="password" class="form-control" id="password" placeholder="" v-model="password" />
                </div>
                <div class="form-group">
                    <label for="repeat">wachtwoord herhalen</label>
                    <input type="password" class="form-control" id="repeat" placeholder="" v-model="repeat" />
                </div>
                <button type="submit" class="btn btn-secondary" v-on:click="register">registreren</button>
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
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        repeat: '',
        message: ''
      }
    },
    methods: {
      register () {
        axios.post(api.url + '/user/register', {
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            password: this.password,
            repeat: this.repeat
          })
          .then(response => {
            console.log(response)
          });

        this.message = 'Welkom! U kunt nu inloggen met uw nieuwe account.';
      }
    },
    name: "register"
  }
</script>

<style scoped>

</style>

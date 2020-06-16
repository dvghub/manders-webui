<template>
  <div class="home">
  </div>
</template>

<script>
  export default {
    computed: {
      user() {
        return sessionStorage.getItem('user')
      }
    },
    methods: {

    },
    name: 'home',
    components: {
    }
  }
</script>

<template>
    <div>
        {{id}}
    </div>
</template>

<script>
  export default {
    data () {
      return {
        id: 0
      }
    },
    watch: {
      '$route.params.id': function (id) {
        this.id = id;
      }
    },
    name: "appointment"
  }
</script>

<style scoped>

</style>

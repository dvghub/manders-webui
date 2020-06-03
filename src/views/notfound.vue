<template>
    <div class="card col-10 col-md-7 col-lg-5 mx-auto my-5 border-0">
        <h3 class="card-header bg-white">404</h3>
        <div class="card-body text-left">
            <p class="card-text">
                Sorry, we konden '{{ currentRoute.substr(1) }}' niet vinden.
            </p>
            <a href="/#/" class="btn btn-secondary mx-auto">homepagina</a>
        </div>
    </div>
</template>

<script>
  export default {
    computed: {
      currentRoute() {
        return this.$route.path
      }
    },
    name: "notfound"
  }
</script>

<style scoped>

</style>
<template>
    <div class="card col-10 col-md-7 col-lg-5 mx-auto my-5 border-0">
        <h3 class="card-header bg-white">contact</h3>
        <div class="card-body text-left">
            <simpleeditor page="contact"></simpleeditor>
        </div>
    </div>
</template>

<script>
  import Simpleeditor from "../components/simpleeditor";

  export default {
    components: {Simpleeditor},
    name: "contact"
  }
</script>

<style scoped>

</style>

<template>
    <div class="card col-md-10 mx-auto my-5 border-0">
    <h3 class="card-header bg-white">home</h3>
    <div class="card-body text-left">
        <simpleeditor page="home"></simpleeditor>
    </div>
  </div>
</template>

<script>
  import Simpleeditor from "../components/simpleeditor";
  export default {
    name: 'home',
    components: {Simpleeditor}
  }
</script>

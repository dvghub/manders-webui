<template>
    <div class="card col-md-10 mx-auto my-5 border-0">
        <h3 class="card-header bg-white">informatie</h3>
        <div class="row card-body text-left">
            <div class="col-12 col-md-7">

            </div>
            <div class="col">
                double suh
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        today: new Date(),
        day: 0,
        month: this.today.getMonth() + 1,
        year: this.today.getFullYear()
      }
    },
    name: "agenda"
  }
</script>

<style scoped>

</style>

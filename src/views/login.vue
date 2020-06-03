<template>
    <div class="card col-10 col-md-7 col-lg-5 mx-auto my-5 border-0">
        <h3 class="card-header bg-white">login</h3>
        <div class="card-body text-left">
            <form>
                <div class="form-group">
                    <label for="email">email</label>
                    <input type="email" class="form-control" id="email" placeholder="" />
                </div>
                <div class="form-group">
                    <label for="password">wachtwoord</label>
                    <input type="password" class="form-control" id="password" placeholder="" />
                </div>
                <button type="submit" class="btn btn-secondary">login</button>
            </form>
        </div>
    </div>
</template>

<script>
  export default {
    name: "login"
  }
</script>

<style scoped>

</style>
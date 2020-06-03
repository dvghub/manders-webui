<template>
    <div class="card col-10 col-md-7 col-lg-5 mx-auto my-5 border-0">
        <h3 class="card-header bg-white">registreren</h3>
        <div class="card-body text-left">
            <form>
                <div class="form-group">
                    <label for="firstname">naam</label>
                    <div class="row">
                        <div class="col">
                            <input type="text" class="form-control" id="firstname" placeholder="voornaam." />
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" id="lastname" placeholder="achternaam." />
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="email">email</label>
                    <input type="email" class="form-control" id="email" placeholder="" />
                </div>
                <div class="form-group">
                    <label for="password">wachtwoord</label>
                    <input type="password" class="form-control" id="password" placeholder="" />
                </div>
                <div class="form-group">
                    <label for="repeat">wachtwoord herhalen</label>
                    <input type="password" class="form-control" id="repeat" placeholder="" />
                </div>
                <button type="submit" class="btn btn-secondary">registreren</button>
            </form>
        </div>
    </div>
</template>

<script>
  export default {
    name: "register"
  }
</script>

<style scoped>

</style>
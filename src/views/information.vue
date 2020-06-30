<template>
    <div class="card col-md-10 mx-auto my-5 border-0">
        <h3 class="card-header bg-white">informatie</h3>
        <div class="row card-body text-left">
            <div class="col-12 col-md-4 p-0">
                <div class="list-group-flush p-0">
                    <a href="/#/informatie/energie" class="list-group-item list-group-item-action " v-bind:class="{ active: page === 'energie'}">
                        Acupunctuur en energiebanen
                    </a>
                    <a href="/#/informatie/helpen" class="list-group-item list-group-item-action " v-bind:class="{ active: page === 'helpen'}">
                        Waarmee kan acupunctuur u helpen?
                    </a>
                    <a href="/#/informatie/sessie" class="list-group-item list-group-item-action " v-bind:class="{ active: page === 'sessie'}">
                        Hoe verloopt een sessie?
                    </a>
                    <a href="/#/informatie/interesse" class="list-group-item list-group-item-action " v-bind:class="{ active: page === 'interesse'}">
                        Interesse?
                    </a>
                    <a href="/#/informatie/certificatie" class="list-group-item list-group-item-action " v-bind:class="{ active: page === 'certificatie'}">
                        Vakbekwaamheid
                    </a>
                    <a href="/#/informatie/privacy" class="list-group-item list-group-item-action " v-bind:class="{ active: page === 'privacy'}">
                        Privacyverklaring Wet AVG
                    </a>
                </div>
            </div>
            <div class="col card-text pt-3">
                <simpleeditor :page="page"></simpleeditor>
            </div>
        </div>
    </div>
</template>

<script>
  import Simpleeditor from "../components/simpleeditor";

  export default {
    data () {
      return {
        page: 'energie'
      }
    },
    watch: {
      '$route.params.page': function (page) {
        this.page = page;
      }
    },
    components: {
      Simpleeditor
    },
    name: "information"
  }
</script>

<style scoped>

</style>

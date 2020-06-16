<template>
    <div class="card col-md-10 mx-auto my-5 border-0">
        <h3 class="card-header bg-white">informatie</h3>
        <div class="row card-body text-left">
            <div class="col-12 col-md-4 p-0">
                <div class="list-group-flush p-0">
                    <a href="#" class="list-group-item list-group-item-action" v-on:click="turn('info-energy')">
                        Acupunctuur en energiebanen
                    </a>
                    <a href="#" class="list-group-item list-group-item-action" v-on:click="turn('info-help')">
                        Waarmee kan acupunctuur u helpen?
                    </a>
                    <a href="#" class="list-group-item list-group-item-action" v-on:click="turn('info-session')">
                        Hoe verloopt een sessie?
                    </a>
                    <a href="#" class="list-group-item list-group-item-action" v-on:click="turn('info-certs')">
                        Vakbekwaamheid
                    </a>
                    <a href="#" class="list-group-item list-group-item-action" v-on:click="turn('info-privacy')">
                        Privacyverklaring Wet AVG
                    </a>
                </div>
            </div>
            <div class="col card-text pt-3">
                <infoenergy v-if="page === 'info-energy'" />
                <infohelp v-if="page === 'info-help'"  />
                <infosession v-if="page === 'info-session'"  />
                <infocerts v-if="page === 'info-certs'"  />
                <infoprivacy v-if="page === 'info-privacy'"  />
            </div>
        </div>
    </div>
</template>

<script>
  import infoenergy from "../components/infoenergy";
  import infohelp from "../components/infohelp";
  import infosession from "../components/infosession";
  import infocerts from "../components/infocerts";
  import infoprivacy from "../components/infoprivacy";

  export default {
    data () {
      return {
        page: 'info-energy'
      }
    },
    methods: {
      turn (name) {
        this.page = name;
      }
    },
    components: {
      infoenergy,
      infohelp,
      infosession,
      infocerts,
      infoprivacy
    },
    name: "information"
  }
</script>

<style scoped>

</style>

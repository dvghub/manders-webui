<template>
    <div class="card col-10 col-md-7 col-lg-5 mx-auto my-5 border-0">
        <h3 class="card-header bg-white">contact</h3>
        <div class="card-body text-left">
            <div class="card-text" v-if="this.$parent.user !== null">
                <ckeditor :editor="editor" v-model="content"></ckeditor>
                <button class="float-right btn btn-danger mt-3" v-on:click="save">Save</button>
            </div>
            <div class="card-text" v-if="this.$parent.user === null">
                <span v-html="content"></span>
            </div>
        </div>
    </div>
</template>

<script>
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  import api from '../api.config.js'
  const axios = require('axios');

  export default {
    mounted() {
      this.getContent();
    },
    data() {
      return {
        editor: ClassicEditor,
        content: ''
      }
    },
    methods: {
      save() {
        axios.post(api.url + '/page/update/contact', {
          'page': 'contact',
          'content': this.content
        }).then(response => {
          this.content = response.data;
        })
      },
      getContent() {
        axios.get(api.url + '/page/read/contact').then(response => {
          this.content = response.data;
        })
      }
    },
    name: "contact"
  }
</script>

<style scoped>

</style>

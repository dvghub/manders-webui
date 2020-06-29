<template>
    <div class="p-0">
        <div class="card-text" v-if="this.$parent.$parent.user !== null">
            <ckeditor :editor="editor" :config="config" v-model="content"></ckeditor>
            <button class="float-right btn btn-danger mt-3" v-on:click="save">Save</button>
        </div>
        <div class="card-text" v-if="this.$parent.$parent.user === null">
            <span v-html="content"></span>
        </div>
    </div>
</template>

<script>
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  import api from '../api.config.js';
  const axios = require('axios');

  export default {
    props: {
      page: String
    },
    watch: {
      'page': function(page) {
        this.page = page;
        this.getContent();
      }
    },
    mounted() {
      this.getContent();
    },
    data() {
      return {
        content: '',
        editor: ClassicEditor,
        config: {
          removePlugins: [
            'EasyImage',
            'Image',
            'ImageCaption',
            'ImageStyle',
            'ImageToolbar',
            'ImageUpload',
            'MediaEmbed'
          ]
        }
      }
    },
    methods: {
      save() {
        axios.post(api.url + '/page/update/' + this.page, {
          'page': this.page,
          'content': this.content
        }).then(response => {
          this.content = response.data;
        })
      },
      getContent() {
        axios.get(api.url + '/page/read/' + this.page).then(response => {
          this.content = response.data;
        }).catch(this.content = '')
      }
    },
    name: "simpleeditor"
  }
</script>

<style scoped>

</style>

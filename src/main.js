import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'jquery/dist/jquery.min.js'
import 'bootstrap'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

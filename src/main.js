import Vue from 'vue'
import router from './router-config'

import app from './page/app.vue'


let vm = new Vue({
  el: '#app',
  router,
  render : h => h(app),
});
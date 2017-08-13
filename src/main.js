import Vue from 'vue'
import router from './router-config'

import app from './page/app.vue'
import chat from './page/chat.vue'


let vm = new Vue({
  el: '#app',
  router,
  render : h => h(chat),
});
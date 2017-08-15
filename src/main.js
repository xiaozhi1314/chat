import Vue from 'vue'
import store from './store/index'
import router from './router-config'


import app from './page/app.vue'
import chat from './page/chat.vue'

let vm = new Vue({
  el: '#app',
  store,
  router,
  render : h => h(chat),
});
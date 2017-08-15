import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'

import friend from './modules/friend'


Vue.use(Vuex)


export default new Vuex.Store({
  state : {
    clientId : '',
    clientName : '',
    clientList : [],
    loginTime : '',
    loginStatus : false,
  },
  mutations,
  modules : {
    friend
  }
});
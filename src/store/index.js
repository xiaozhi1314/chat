import Vue from 'vue'
import Vuex from 'vuex'

import friend from './modules/friend'


Vue.use(Vuex)


export default new Vuex.Store({
  state : {

  },
  modules : {
    friend
  }
});
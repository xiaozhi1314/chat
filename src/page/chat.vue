<template>
<div id="chat" class="jq22-container">
  <div class="jq22-content bgcolor-3">
    <div id="chatbox">
      <transition name='transitionName' keep-alive>
        <router-view></router-view>
      </transition>
      <!-- <friend></friend>
      <chat-message></chat-message> -->
    </div>
  </div>
</div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  computed : {
    ...mapState({
      loginStatus : state => state.loginStatus
    })
  },
  methods : {
    OnLoginCallback(msg){
      this.$store.commit('setClientInfo', msg);
    }
  },
  mounted (){
    this.$chatService.startService({
      url : 'ws://192.168.56.101:7272',
      OnLoginCallback : this.OnLoginCallback
    });
    if(this.loginStatus === false){
      this.$router.push('login');
    }
  }
}
</script>

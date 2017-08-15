<template>
<div id="friendslist" style="display: block;">
  <div id="topmenu">
    <span class="friends"></span>
      <span class="chats"></span>
      <span class="history"></span>
  </div>
  
  <div id="friends">

    <div class="friend" @click="sendMessage(friendKey)" v-for="(friendItem, friendKey) in friendList" v-bind:key="friendItem.id">
      <img src="/static/img/1_copy.jpg"/>
        <p>
          <span>{{friendKey}}</span>
          <span>{{friendItem}}</span>
        </p>
        <div class="status" :class="friendItem.id%2 ? 'available' : 'inactive'"></div>
    </div>
    
    <search></search>
  </div>
    
</div>

</template>


<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
import search from './search.vue'

export default {
  computed : {
    ...mapState({
        // friendList : state => state.friend.friendList,
        friendList : state => state.clientList,
      })
  },
  watch : {
    friendList(newValue, oldValue){

    }
  },
  components: {
    search
  },
  methods : {
    sendMessage(receiveAccount){
      this.$store.commit('setSelectReceive', receiveAccount);
      this.$router.push('chatMessage');
    }
  }
}
</script>


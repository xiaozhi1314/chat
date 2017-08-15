<template>
<div id="friendslist" style="display: block;">
  <div id="topmenu">
    <span class="friends"></span>
      <span class="chats"></span>
      <span class="history"></span>
  </div>
  
  <div id="friends">

    <div class="friend" @click="sendMessage(friendItem.id)" v-for="friendItem in friendList" v-bind:key="friendItem.id">
      <img :src="friendItem.avatar"/>
        <p>
          <strong>{{friendItem.name}}</strong>
          <span>{{friendItem.email}}</span>
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
        friendList : state => state.friend.friendList
      })
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


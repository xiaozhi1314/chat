<template>
  <div id="chat">
    <router-view></router-view>
  </div>
</template>

<script>
import ChatInstance from '../api/chatInstance'

export default {
  data (){
    return {
      cahtService : null
    }
  },
  mounted (){
    ChatInstance.setListeners({
      listenerMessage : (event) => {console.log(event)}
    });
  }
}
</script>

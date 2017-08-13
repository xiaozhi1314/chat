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
import friend from './friend.vue'
import chatMessage from './chat-message.vue'
export default {
  components: {
    friend, chatMessage
  }
}
</script>

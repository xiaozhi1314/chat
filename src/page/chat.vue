<template>
<div class="jq22-container">
  <div class="jq22-content bgcolor-3">
    <div id="chatbox">
      <friend></friend>
      <chat-message></chat-message>
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

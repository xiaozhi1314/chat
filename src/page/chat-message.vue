<template>
  <div id="chatview" class="p1">
    <div id="profile">
        <img src="/static/img/3_copy.jpg" class="floatingImg">
        <div id="close" @click="closeSendView">
            <div class="cy s1 s2 s3"></div>
            <div class="cx s1 s2 s3"></div>
        </div>
        
        <p class="animate">Tomas Kennedy</p>
        <span class="animate">tomaskennedy@gmail.com</span>
    </div>

    <div id="chat-messages">
      <label>Thursday 02</label>
        
        <div class="message">
          <img src="/static/img/1_copy.jpg" />
            <div class="bubble">
              Really cool stuff!
                <div class="corner"></div>
                <span>3 min</span>
            </div>
        </div>
        
        <div class="message right">
          <img src="/static/img/2_copy.jpg" />
            <div class="bubble">
              Can you share a link for the tutorial?
                <div class="corner"></div>
                <span>1 min</span>
            </div>
        </div>
        
        <div class="message">
          <img src="/static/img/1_copy.jpg" />
            <div class="bubble">
              Yeah, hold on
                <div class="corner"></div>
                <span>Now</span>
            </div>
        </div>
        
        <div class="message right">
          <img src="/static/img/2_copy.jpg" />
            <div class="bubble">
              Can you share a link for the tutorial?
                <div class="corner"></div>
                <span>1 min</span>
            </div>
        </div>
        
        <div class="message">
          <img src="/static/img/1_copy.jpg" />
            <div class="bubble">
              Yeah, hold on
                <div class="corner"></div>
                <span>Now</span>
            </div>
        </div>
        
    </div>

    <div id="sendmessage">
      <input type="text" placeholder="Send message..." v-model="sendData"/>
      <button id="send" @click="sendMessage"></button>
    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return{
        sendData : '',
        receiveAccount : '',
      }
    },
    methods : {
      closeSendView(){
        this.$router.push('chat');
      },
      sendMessage(){
        this.$websocket.send(this.sendData);
        this.sendData = '';
      }
    }
  }
</script>
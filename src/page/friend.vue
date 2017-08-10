<template>
<div id="friendslist" style="display: block;">
  <div id="topmenu">
    <span class="friends"></span>
      <span class="chats"></span>
      <span class="history"></span>
  </div>
  
  <div id="friends">
    <div class="friend">
        <img src="/static/img/1_copy.jpg"/>
          <p>
            <strong>Miro Badev</strong>
            <span>mirobadev@gmail.com</span>
          </p>
          <div class="status available"></div>
      </div>
      
      <div class="friend">
        <img src="/static/img/2_copy.jpg" />
          <p>
            <strong>Martin Joseph</strong>
            <span>marjoseph@gmail.com</span>
          </p>
          <div class="status away"></div>
      </div>
      
      <div class="friend">
        <img src="/static/img/3_copy.jpg" />
          <p>
            <strong>Tomas Kennedy</strong>
            <span>tomaskennedy@gmail.com</span>
          </p>
          <div class="status inactive"></div>
      </div>
      
      <search></search>
  </div>
    
</div>

</template>


<script>
import search from './search.vue'
export default {
  components: {
    search
  }
}
</script>


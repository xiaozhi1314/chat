<template>
  <div id="login">
    <form class="form-horizontal" role="form">
      <div class="form-group">
        <div class="col-sm-6">
          <input type="text" class="form-control" v-model="username" placeholder="请输入账号">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-6">
          <input type="password" class="form-control" v-model="password" placeholder="请输入密码">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-6">
          <button type="submit" class="btn btn-default" @click="userLogin">登录</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
export default{
  data (){
    return {
      username : '',
      password : '',
      msgcontent : '',
    }
  },
  computed : {
    ...mapState({
      loginStatus : state => state.loginStatus,
    })
  },
  watch : {
    loginStatus(newValue, oldValue){
      if(this.loginStatus === true){
        this.$router.push('friend');
      }
    }
  },
  methods :{
    userLogin(){
      let sendMsgData = {
        'type' : 'login',
        'room_id' : 1,
        'client_name' : this.username,
      }
      this.$chatService.onLogin(JSON.stringify(sendMsgData));
      return false;
    },
    sendMsg(){
      let sendMsgData = {
        'type' : 'say',
        'room_id' : 1,
        'to_client_id' : 'all',
        'content' : this.msgcontent,
      }
      ws.send(JSON.stringify(sendMsgData));
      return false;
    }
  },
  mounted(){
    if(this.loginStatus === true){
      this.$router.push('friend');
    }
  }
}
</script>

<style scoped>
  #login{
    margin-top : 150px;
  }
</style>

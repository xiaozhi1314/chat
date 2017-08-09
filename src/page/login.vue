<template>
  <div id="login">
    <div>
      <form class="form-horizontal" role="form">
        <div class="form-group">
          <label for="firstname" class="col-sm-2 control-label">账号</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" v-model="username" placeholder="请输入账号">
          </div>
        </div>
        <div class="form-group">
          <label for="lastname" class="col-sm-2 control-label">密码</label>
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
    <div class="msg-send">

      <form class="form-horizontal" role="form">
        <div class="form-group">
          <label for="firstname" class="col-sm-2 control-label">消息内容</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" v-model="msgcontent" placeholder="请输入发送内容">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-6">
            <button type="submit" class="btn btn-default" @click="sendMsg">发送</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  
  const ws = new WebSocket('ws://0.0.0.0:7272');
  // const ws = new WebSocket('ws://121.40.165.18:8088');
  export default{
    data (){
      return {
        username : '',
        password : '',
        msgcontent : '',
      }
    },
    methods :{
      initWs(){
        ws.onmessage = (event) => {
          let msg = JSON.parse(event.data);
          switch (msg['type']){
            case 'ping':
              console.log('心跳包！');
              break;
            case 'say':
              $.notify({
                'message' : '发送人：'+msg['from_client_name'] + '消息内容：' + msg['content']
              },{
                'type' : 'success'
              });
              break;
          }
          // console.log('收到消息：'+event.data);
        };
        ws.onopen = (event) => {
          console.log('服务器连接成功！');
        };
        ws.onerror = (event) => {
          console.log(event);
        };
        ws.onclose = (event) => {
          console.log('断开服务器连接！');
        };

      },
      userLogin(){
        let sendMsgData = {
          'type' : 'login',
          'room_id' : 1,
          'client_name' : this.username,
        }
        ws.send(JSON.stringify(sendMsgData));
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
      this.initWs();
    }
  }
  
</script>
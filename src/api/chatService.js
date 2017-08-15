const EVENT_TYPE_PING           = 'ping';     //0;  // 心跳包事件
const EVENT_TYPE_LOGIN          = 'login';    //1;  // 登陆事件
const EVENT_TYPE_NEWMSG         = 'say';      //2;  // 新消息事件

const CALLBACK_ONLOGIN                = 'OnLoginCallback';        // 登陆事件回掉函数

export default{

  install(Vue, options){
    let ws  = null;
    let url = null;
    const defaultUrl = 'ws://0.0.0.0:8080';

    let addListeners = (options) => {
      if(ws !== null){
        ws.onmessage = (event) => {
          let msg = JSON.parse(event.data);

          switch(msg.type){
            case EVENT_TYPE_PING:
              break;
            case EVENT_TYPE_LOGIN:
                if(options[CALLBACK_ONLOGIN]){
                  options[CALLBACK_ONLOGIN](msg);
                }
              break;
            case EVENT_TYPE_NEWMSG:
                console.log(msg);
              break;
            default:
              break;
          }
        };
        ws.onopen = (event) => {
        if(options.onOpen){
          options.onOpen(event);
        }
        console.log('ChatService-服务器连接成功！');
      };
      ws.onerror = (event) => {
        if(options.onError){
          options.onError(event);
        }
        console.log(event);
      };
      ws.onclose = (event) => {
        if(options.onClose){
          options.onClose(event);
        }
        console.log('断开服务器连接！');
      };
      }
    };
    let removeListeners = () => {
    };

    let onLogin = (sendData) => {
      if(ws !== null){
        ws.send(sendData);
      }
    };
    let onSendMsg = (from, to, data) => {
      if(ws !== null){
        let sendData = {
          type : EVENT_TYPE_NEWMSG,
          to_client_id : to,
          content : data,
        }
        ws.send(sendData);
      }
    }

    Vue.prototype.$chatService = {
      // onOpen : null,
      // onClose : null,
      // onError : null,
      // onMessage : null,
      onLogin,
      onSendMsg,
      // onConnect : null,
      // onReconnect : null,
    };

    /* 启动聊天服务 */
    Vue.prototype.$chatService.startService = (options) => {
      if(options['url'] !== null && typeof options['url'] === 'string'){
        url = options['url'];
      }

      ws = new WebSocket(url);
      addListeners(options);
    }


    Vue.mixin({
        // beforeCreate:addListeners,
        // beforeDestroy:removeListeners
    });
  },
}


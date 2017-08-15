export default{

  install(Vue, url, options){

    if(url !== null && typeof url === 'string'){
    }else{
      url = 'ws://0.0.0.0:8080';
    }

    let ws = new WebSocket(url);
    

    Vue.prototype.$websocket = ws;

    let addListeners = () => {

      ws.onmessage = (event) => {
        let msg = JSON.parse(event.data);
        if(options.onMessage){
          options.onMessage(event);
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
    };
    let removeListeners = () => {

    };

    Vue.mixin({
        beforeCreate:addListeners,
        beforeDestroy:removeListeners
    });
  },
}


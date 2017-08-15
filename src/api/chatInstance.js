import Vue from 'vue'
import ChatService from './chatService'

let listenerOpen = null;
let listenerClose = null;
let listenerError = null;
let listenerMessage = null;

function onOpen(event){
  if(listenerOpen){
    listenerOpen(event);
  }
  console.log('ChatInstance-服务器连接成功！');
}
function onClose(event){
  if(listenerClose){
    listenerClose(event);
  }
}
function onError(event){
  if(listenerError){
    listenerError(event);
  }
}
function onMessage(event){
  if(this.listenerMessage){
    this.listenerMessage(event);
  }
}

function setListeners(listeners={}){
  this.listenerOpen = listeners.listenerOpen
  this.listenerClose = listeners.listenerClose
  this.listenerError = listeners.listenerError
  this.listenerMessage = listeners.listenerMessage

  Vue.use(ChatService, {
    onOpen  : onOpen,
    onClose : onClose,
    onError : onError,
    onMessage : listeners.listenerMessage,
    url : 'ws://192.168.20.101:7272',
  });
}


export default {
  setListeners
}
import Vue from 'vue'
import VueRouter from 'vue-router'

import login from './page/login.vue'
import chat from './page/chat.vue'
import friend from './page/friend.vue'
import chatMessage from './page/chat-message.vue'

Vue.use(VueRouter)


const routes = [
    {path : '/', name : 'friend', component : friend},
    {path : '/login', name : 'login', component : login},
    {path : '/friend', name : 'friend', component : friend},
    {path : '/chatMessage', name : 'chatMessage', component : chatMessage},
    {path : '*', name : 'default', component : friend}
];

let router = new VueRouter({
    mode : 'hash',
    routes 
});

export default router;
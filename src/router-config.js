import Vue from 'vue'
import VueRouter from 'vue-router'

import login from './page/login.vue'
import chat from './page/chat.vue'

Vue.use(VueRouter)


const routes = [
    {path : '/', name : 'login', component : login},
    {path : '/chat', name : 'chat', component : chat},
    {path : '*', name : 'default', component : login}
];

let router = new VueRouter({
    mode : 'hash',
    routes 
});

export default router;
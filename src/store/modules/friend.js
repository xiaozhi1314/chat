const state = {
  selectReceive : '',
  friendList : [
    {'id':1, 'name':'测试员123121231231231', 'email':'abcdasdf123@qq.com', 'avatar':'/static/img/1_copy.jpg'},
    {'id':2, 'name':'测试员123121231231231', 'email':'abcdasdf123@qq.com', 'avatar':'/static/img/1_copy.jpg'},
    {'id':3, 'name':'测试员123121231231231', 'email':'abcdasdf123@qq.com', 'avatar':'/static/img/1_copy.jpg'},
    {'id':4, 'name':'测试员123121231231231', 'email':'abcdasdf123@qq.com', 'avatar':'/static/img/1_copy.jpg'},
    {'id':5, 'name':'测试员123121231231231', 'email':'abcdasdf123@qq.com', 'avatar':'/static/img/1_copy.jpg'},
    {'id':6, 'name':'测试员123121231231231', 'email':'abcdasdf123@qq.com', 'avatar':'/static/img/1_copy.jpg'},
    {'id':7, 'name':'测试员123121231231231', 'email':'abcdasdf123@qq.com', 'avatar':'/static/img/1_copy.jpg'},
    {'id':8, 'name':'测试员123121231231231', 'email':'abcdasdf123@qq.com', 'avatar':'/static/img/1_copy.jpg'},
    {'id':9, 'name':'测试员123121231231231', 'email':'abcdasdf123@qq.com', 'avatar':'/static/img/1_copy.jpg'},
  ],
}


const getters = {

}

const actions = {

}


const mutations = {
  setSelectReceive(state, receiveAccount){
    state.selectReceive = receiveAccount;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}


export const setClientInfo = (state, clientInfo) => {

  if(state.clientId === ''){
    state.clientId   = clientInfo.client_id;
    state.clientName = clientInfo.client_name;
    state.clientList = clientInfo.client_list
    state.loginTime  = clientInfo.time;

    if(clientInfo['client_id'] !== null && typeof clientInfo['client_id'] === 'string'){
      state.loginStatus = true;
    }
  }else{
    state.clientList[clientInfo.client_id] = clientInfo.client_name;
  }
}

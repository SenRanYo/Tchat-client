/*
 * @Author: 根级别mutations
 * @Date: 2020-02-11 13:56:43
 * @LastEditTime: 2020-02-25 20:59:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\store\mutations.js
 */
export const state = {
  socket: {},
  token: JSON.parse(localStorage.getItem("token")) || {}
};
export const mutations = {
  // socket
  setSocket(state, data) {
    state.socket = data;
  },
  // token
  setToken(state, data) {
    state.token = data.token;
  },
  // 清楚数据
  deleteUserInfo(state) {
    console.log(state.socket);
    if (state.socket.connected) {
      state.socket.close();
    }
    // socket 断开连接
    // state.socket.close();
    // state.token = {};
    // state.user = {};
    // state.friend = {};
    // state.group = {};
    // state.dialogue = {};
    // localStorage.removeItem("token");
  }
};

import * as types from "./mutation-types";
export const state = {
  socket: {},
  token: JSON.parse(localStorage.getItem("token")) || {}
};
export const mutations = {
  // socket
  [types.SET_SOCKET](state, data) {
    state.socket = data;
  },
  // token
  [types.SET_TOKEN](state, data) {
    state.token = data.token;
  }
};

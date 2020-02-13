import * as types from "../mutation-types";
// import { MessageBox } from "element-ui";

const state = {
  friendList: []
};

const mutations = {
  [types.SET_FRIEND_LIST](state, data) {
    state.friendList = data;
  }
};

const actions = {
  getFriendList({ commit, rootState }) {
    rootState.socket.emit("getFriendList", response => {
      if (response.result) {
        commit(types.SET_FRIEND_LIST, response.data);
        console.log("提示：获取好友列表成功");
      }
    });
  },
  onGetFriendList({ commit, rootState }) {
    rootState.socket.on("onGetFriendList", response => {
      if (response.result) {
        commit(types.SET_FRIEND_LIST, response.data);
        console.log("提示：更新好友列表成功");
      }
    });
  }
};

export default {
  state,
  mutations,
  actions
};

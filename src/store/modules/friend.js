/*
 * @Author: 好友相关模块
 * @Date: 2020-02-13 18:04:18
 * @LastEditTime: 2020-02-25 21:33:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\store\modules\friend.js
 */
const state = {
  friendList: [],
  friendInfo: {}
};

const mutations = {
  // 设置好友列表
  setFriendList(state, data) {
    state.friendList = data;
  },
  // 设置好友信息
  setFriendInfo(state, data) {
    state.friendInfo = data;
  }
};

const actions = {
  // 监听获取好友列表
  onGetFriendList({ commit, rootState }) {
    rootState.socket.on("onGetFriendList", response => {
      if (response.result) {
        commit("setFriendList", response.data);
        console.log("好友列表数据", response.data);
      }
    });
  },
  // 监听获取好友状态
  onGetFriendStatus({ commit, rootState }) {
    rootState.socket.on("onGetFriendStatus", response => {
      if (response.result) {
        commit("setFriendList", response.data);
        console.log("好友列表更新数据", response.data);
      }
    });
  },
  // 监听获取添加好友
  onGetAddFriend({ commit, rootState }) {
    rootState.socket.on("onGetAddFriend", response => {
      if (response.result) {
        commit("setFriendList", response.data);
        console.log("添加好友数据", response.data);
      }
    });
  },
  // 监听获取删除好友
  onGetDeleteFriend({ commit, rootState }) {
    rootState.socket.on("onGetDeleteFriend", response => {
      if (response.result) {
        commit("setFriendList", response.data);
        console.log("删除好友数据", response.data);
      }
    });
  },
  // 获取好友信息
  getFriendInfo({ commit, rootState }, params) {
    rootState.socket.emit("getFriendInfo", params, response => {
      if (response.result) {
        commit("setFriendInfo", response.data);
        console.log("好友信息数据", response.data);
      }
    });
  }
};

export default {
  state,
  mutations,
  actions
};

/*
 * @Author: 消息模块
 * @Date: 2020-02-24 13:43:15
 * @LastEditTime: 2020-02-27 22:17:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\store\modules\message.js
 */
const state = {
  allMessageRecord: {}
};

const mutations = {
  // 设置全部消息记录
  setAllMessageRecord(state, data) {
    state.allMessageRecord = data;
  }
};

const actions = {
  // 监听获取全部消息记录
  onGetAllMessageRecord({ commit, rootState }) {
    rootState.socket.on("onGetAllMessageRecord", response => {
      if (response.result) {
        commit("setAllMessageRecord", response.data);
        console.log("全部消息记录数据", response.data);
      }
    });
  },
  // 发送好友消息
  sendFriendMessage({ rootState }, params) {
    rootState.socket.emit("sendFriendMessage", params, response => {
      // if (response.result) {
      // }
      console.log(response);
    });
  },
  // 发送群聊消息
  sendGroupMessage({ rootState }, params) {
    rootState.socket.emit("sendGroupMessage", params, response => {
      // if (response.result) {
      // }
      console.log(response);
    });
  }
};

export default {
  state,
  mutations,
  actions
};

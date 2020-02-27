/*
 * @Author: 消息模块
 * @Date: 2020-02-24 13:43:15
 * @LastEditTime: 2020-02-28 00:23:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\store\modules\message.js
 */
const state = {
  messageRecord: []
};

const mutations = {
  // 设置全部消息记录
  setMessageRecord(state, data) {
    state.messageRecord = data;
  }
};

const actions = {
  // 监听获取全部消息记录
  onGetMessageRecord({ commit, rootState }) {
    rootState.socket.on("onGetMessageRecord", response => {
      if (response.result) {
        commit("setMessageRecord", response.data);
        console.log("全部消息记录数据", response.data);
      }
    });
  },
  // 获取消息记录
  getMessageRecord({ commit, rootState }, params) {
    rootState.socket.emit("getMessageRecord", params, response => {
      if (response.result) {
        commit("setMessageRecord", response.data);
        console.log("消息记录数据", response.data);
      }
    });
  },
  // 发送好友消息
  sendFriendMessage({ rootState }, params) {
    rootState.socket.emit("sendFriendMessage", params, response => {
      if (response.result) {
        console.log(response);
      }
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

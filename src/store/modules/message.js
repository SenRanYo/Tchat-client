/*
 * @Author: 消息模块
 * @Date: 2020-02-24 13:43:15
 * @LastEditTime: 2020-02-28 19:24:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\store\modules\message.js
 */
const state = {
  messageRecord: []
};

const mutations = {
  // 设置消息记录
  setMessageRecord(state, data) {
    state.messageRecord = data;
  },
  // 更新好友消息记录
  updateFriendMessageRecord(state, data) {
    // 如果数组长度为0就直接添加元素
    if (state.messageRecord.length < 1) {
      state.messageRecord.push(data);
      return;
    }
    // 判断列表中是否有更新数据值的对象
    let exists = state.messageRecord.some(item => {
      if (
        item.creator_id == data.creator_id ||
        item.creator_id == data.friend_id
      ) {
        return true;
      }
    });
    if (exists) {
      state.messageRecord.push(data);
      return;
    }
  },
  // 更新群聊消息记录
  updateGroupMessageRecord(state, data) {
    // 如果数组长度为0就直接添加元素
    if (state.messageRecord.length < 1) {
      state.messageRecord.push(data);
      return;
    }
    // 判断列表中是否有更新数据值的对象
    let exists = state.messageRecord.some(item => {
      if (item.group_id == data.group_id) {
        return true;
      }
    });

    // 如果存在
    if (exists) {
      state.messageRecord.push(data);
      return;
    }
  }
};

const actions = {
  // 监听服务端获取消息记录
  onGetMessageRecord({ commit, rootState }) {
    rootState.socket.on("onGetMessageRecord", response => {
      if (response.result) {
        commit("setMessageRecord", response.data);
        console.log("服务端推送聊天记录数据", response.data);
      }
    });
  },
  // 监听服务端更新消息记录
  onUpdateMessageRecord({ commit, rootState }) {
    rootState.socket.on("onUpdateMessageRecord", response => {
      let dialogueInfoType = rootState.dialogue.dialogueInfo.dialogue_type;
      if (response) {
        // 如果当前会话类型为好友
        if (dialogueInfoType == "friend") {
          commit("updateFriendMessageRecord", response);
          console.log("服务端推送好友发送过来的消息", response);
        }
        // 如果当前会话类型为群聊
        if (dialogueInfoType == "group") {
          commit("updateGroupMessageRecord", response);
          console.log("服务端推送群聊发送过来的消息", response);
        }
      }
    });
  },
  // 根据参数获取指定聊天记录
  getMessageRecord({ commit, rootState }, params) {
    rootState.socket.emit("getMessageRecord", params, response => {
      if (response.result) {
        commit("setMessageRecord", response.data);
        console.log("客户端主动获取聊天记录数据", response.data);
      }
    });
  },
  // 发送好友消息
  sendFriendMessage({ commit, rootState }, params) {
    rootState.socket.emit("sendFriendMessage", params, response => {
      let dialogueInfoType = rootState.dialogue.dialogueInfo.dialogue_type;
      if (response.result) {
        // 如果当前会话类型为好友
        if (dialogueInfoType == "friend") {
          commit("updateFriendMessageRecord", response.data);
          console.log("发送好友信息成功返回最后一条消息数据", response.data);
        }
      }
    });
  },
  // 发送群聊消息
  sendGroupMessage({ commit, rootState }, params) {
    rootState.socket.emit("sendGroupMessage", params, response => {
      let dialogueInfoType = rootState.dialogue.dialogueInfo.dialogue_type;
      if (response.result) {
        // 如果当前会话类型为群聊
        if (dialogueInfoType == "group") {
          commit("updateGroupMessageRecord", response.data);
          console.log("发送群聊信息成功返回最后一条消息数据", response.data);
        }
      }
    });
  }
};

export default {
  state,
  mutations,
  actions
};

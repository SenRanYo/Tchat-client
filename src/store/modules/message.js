/*
 * @Author: 消息模块
 * @Date: 2020-02-24 13:43:15
 * @LastEditTime: 2020-03-02 17:52:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\store\modules\message.js
 */
const state = {
  // 当前会话聊天记录数据
  chatMessageRecord: []
};

const mutations = {
  // 设置消息记录
  setChatMessageRecord(state, data) {
    state.chatMessageRecord = data;
  },
  // 更新好友消息记录
  updateFriendMessageRecord(state, data) {
    // 如果数组长度为0就直接添加元素
    if (state.chatMessageRecord.length < 1) {
      state.chatMessageRecord.push(data);
      return;
    }
    // 判断列表中是否有更新数据值的对象
    let exists = state.chatMessageRecord.some(item => {
      if (
        item.creator_id == data.creator_id ||
        item.creator_id == data.friend_id
      ) {
        return true;
      }
    });
    if (exists) {
      state.chatMessageRecord.push(data);
      return;
    }
  },
  // 更新群聊消息记录
  updateGroupMessageRecord(state, data) {
    // 如果数组长度为0就直接添加元素
    if (state.chatMessageRecord.length < 1) {
      state.chatMessageRecord.push(data);
      return;
    }
    // 判断列表中是否有更新数据值的对象
    let exists = state.chatMessageRecord.some(item => {
      if (item.group_id == data.group_id) {
        return true;
      }
    });

    // 如果存在
    if (exists) {
      state.chatMessageRecord.push(data);
      return;
    }
  }
};

const actions = {
  // 监听服务端更新推送好友聊天记录
  onUpdateFriendChatRecord({ commit, rootState }) {
    rootState.socket.on("onUpdateFriendChatRecord", lastMessageData => {
      // 获取当前会话ID
      let dialogueInfoId = rootState.dialogue.dialogueInfo._id;
      if (
        dialogueInfoId == lastMessageData.creator_id ||
        dialogueInfoId == lastMessageData.friend_id
      ) {
        // 更新好友聊天记录数据
        commit("updateFriendMessageRecord", lastMessageData);
        // 重置好友聊天未读数据
        rootState.socket.emit(
          "resetFriendUnread",
          dialogueInfoId,
          friendInfoData => {
            // 更新好友列表数据
            commit("updateFriendList", friendInfoData);
          }
        );
      }
    });
  },
  // 监听服务端更新推送群聊聊天记录
  onUpdateGroupChatRecord({ commit, rootState }) {
    rootState.socket.on("onUpdateGroupChatRecord", lastMessageData => {
      // 获取当前会话ID
      let dialogueInfoId = rootState.dialogue.dialogueInfo._id;
      if (dialogueInfoId == lastMessageData.group_id) {
        // 更新群聊聊天记录数据
        commit("updateGroupMessageRecord", lastMessageData);

        // 重置好友聊天未读数据
        rootState.socket.emit(
          "resetGroupUnread",
          dialogueInfoId,
          groupInfoData => {
            // 更新好友列表数据
            commit("updateGroupList", groupInfoData);
          }
        );
      } else {
        // 获取群聊信息数据
        rootState.socket.emit(
          "findGroupInfo",
          lastMessageData.group_id,
          groupInfoData => {
            // 更新好友列表数据
            commit("updateGroupList", groupInfoData);
          }
        );
      }
    });
  },
  // 查询好友聊天记录数据
  findFriendChatRecord({ commit, rootState }, friendId) {
    rootState.socket.emit(
      "findFriendChatRecord",
      friendId,
      (friendInfoData, friendChatRecordData) => {
        // 设置当前会话信息数据
        commit("setDialogueInfo", friendInfoData);
        // 更新好友列表数据
        commit("updateFriendList", friendInfoData);
        // 设置聊天记录数据
        commit("setChatMessageRecord", friendChatRecordData);
      }
    );
  },
  // 查询群聊聊天记录数据
  findGroupChatRecord({ commit, rootState }, groupId) {
    rootState.socket.emit(
      "findGroupChatRecord",
      groupId,
      (groupInfoData, groupChatRecordData) => {
        // 设置当前会话信息数据
        commit("setDialogueInfo", groupInfoData);
        // 更新群聊列表数据
        commit("updateGroupList", groupInfoData);
        // 设置聊天记录数据
        commit("setChatMessageRecord", groupChatRecordData);
      }
    );
  },
  // 发送好友消息
  sendFriendMessage({ commit, rootState }, params) {
    rootState.socket.emit(
      "sendFriendMessage",
      params,
      (friendInfoData, lastMessageData) => {
        let dialogueInfoType = rootState.dialogue.dialogueInfo.dialogue_type;
        // 如果当前会话类型为好友
        if (dialogueInfoType == "friend") {
          // 更新好列表
          commit("updateFriendList", friendInfoData);
          // 更新消息记录
          commit("updateFriendMessageRecord", lastMessageData);
        }
      }
    );
  },
  // 发送群聊消息
  sendGroupMessage({ commit, rootState }, params) {
    rootState.socket.emit(
      "sendGroupMessage",
      params,
      (groupInfoData, lastMessageData) => {
        let dialogueInfoType = rootState.dialogue.dialogueInfo.dialogue_type;
        // 如果当前会话类型为群聊
        if (dialogueInfoType == "group") {
          // 更新群聊列表
          commit("updateGroupList", groupInfoData);
          // 更新消息记录
          commit("updateGroupMessageRecord", lastMessageData);
        }
      }
    );
  }
};

export default {
  state,
  mutations,
  actions
};

/*
 * @Author: 会话模块
 * @Date: 2020-02-25 19:42:55
 * @LastEditTime: 2020-02-28 18:02:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\store\modules\dialogue.js
 */
import router from "../../router/index";

const state = {
  dialogueInfo: {}
};

const mutations = {
  setDialogueInfo(state, data) {
    state.dialogueInfo = data;
  }
};

const actions = {
  // 添加好友会话
  addFriendDialogue({ rootState }, params) {
    rootState.socket.emit("addFriendDialogue", params, response => {
      if (response.result) {
        // 添加成功跳转路由
        router.push({ name: "dialogue" });
      }
    });
  },
  // 添加群聊会话
  addGroupDialogue({ rootState }, params) {
    rootState.socket.emit("addGroupDialogue", params, response => {
      if (response.result) {
        // 添加成功跳转路由
        router.push({ name: "dialogue" });
      }
    });
  },
  // 删除好友会话
  deleteFriendDialogue({ commit, rootState }, params) {
    rootState.socket.emit("deleteFriendDialogue", params, response => {
      if (response.result) {
        commit("setDialogueInfo", {});
      }
    });
  },
  // 删除群聊会话
  deleteGroupDialogue({ commit, rootState }, params) {
    rootState.socket.emit("deleteGroupDialogue", params, response => {
      if (response.result) {
        commit("setDialogueInfo", {});
      }
    });
  }
};

export default {
  state,
  mutations,
  actions
};

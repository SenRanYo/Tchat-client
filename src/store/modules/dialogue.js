/*
 * @Author: 会话模块
 * @Date: 2020-02-25 19:42:55
 * @LastEditTime: 2020-03-01 14:50:39
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
  addFriendDialogue({ commit, rootState }, friendId) {
    rootState.socket.emit(
      "addFriendDialogue",
      friendId,
      (friendInfoData, friendChatRecordData) => {
        // 更新好友列表数据
        commit("updateFriendList", friendInfoData);
        // 设置当前会话信息数据
        commit("setDialogueInfo", friendInfoData);
        // 设置当前会话聊天记录数据
        commit("setChatMessageRecord", friendChatRecordData);
        // 如果不在dialogue页面就跳转路由
        if (window.location.href.indexOf("dialogue") == -1) {
          router.push({ name: "dialogue" });
        }
      }
    );
  },
  // 添加群聊会话
  addGroupDialogue({ commit, rootState }, groupId) {
    rootState.socket.emit(
      "addGroupDialogue",
      groupId,
      (groupInfoData, groupChatRecordData) => {
        // 更新群聊列表数据
        commit("updateGroupList", groupInfoData);
        // 设置当前会话信息数据
        commit("setDialogueInfo", groupInfoData);
        // 设置当前会话聊天记录数据
        commit("setChatMessageRecord", groupChatRecordData);
        if (window.location.href.indexOf("dialogue") == -1) {
          router.push({ name: "dialogue" });
        }
      }
    );
  },
  // 删除好友会话
  deleteFriendDialogue({ commit, state, rootState }, friendId) {
    rootState.socket.emit("deleteFriendDialogue", friendId, friendInfoData => {
      // 更新好友列表数据
      commit("updateFriendList", friendInfoData);
      // 如果删除的会话是当前会话就清空当前会话数据
      if (state.dialogueInfo._id == friendInfoData._id) {
        commit("setDialogueInfo", {});
      }
    });
  },
  // 删除群聊会话
  deleteGroupDialogue({ commit, state, rootState }, groupId) {
    rootState.socket.emit("deleteGroupDialogue", groupId, groupInfoData => {
      // 更新群聊列表数据
      commit("updateGroupList", groupInfoData);
      // 如果删除的会话是当前会话就清空当前会话数据
      if (state.dialogueInfo._id == groupInfoData._id) {
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

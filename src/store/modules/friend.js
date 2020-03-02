/*
 * @Author: 好友相关模块
 * @Date: 2020-02-13 18:04:18
 * @LastEditTime: 2020-03-01 19:34:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\store\modules\friend.js
 */
import router from "../../router/index";

const state = {
  friendList: [],
  friendInfo: {}
};

const mutations = {
  // 设置好友列表
  setFriendList(state, data) {
    state.friendList = data;
  },
  // 更新好友列表
  updateFriendList(state, data) {
    // 判断列表中是否有更新数据_id的对象
    let exists = state.friendList.some(item => {
      if (item._id == data._id) {
        return true;
      }
    });
    // 存在对象就更新
    if (exists) {
      state.friendList = state.friendList.map(item => {
        return item._id == data._id ? data : item;
      });
    } else {
      // 不存在添加
      state.friendList.push(data);
    }
  },
  // 删除好友列表_id等于data的数据
  deleteFriend(state, id) {
    // 更新好友列表返回好友列表中_id不等于id的数据
    state.friendList = state.friendList.filter(function(obj) {
      return obj._id !== id;
    });
    // 如果当前好友信息ID等于删除好友的ID就清空当前好友数据
    if (state.friendInfo._id == id) {
      state.friendInfo = {};
    }
  },
  // 设置好友信息
  setFriendInfo(state, data) {
    state.friendInfo = data;
  }
};

const actions = {
  // 监听获取好友列表
  onGetFriendList({ commit, rootState }) {
    rootState.socket.on("onGetFriendList", friendListData => {
      // 设置好友列表数据
      commit("setFriendList", friendListData);
    });
  },
  // 监听服务端推送更新好友列表好
  onUpdateFriendList({ commit, rootState }) {
    rootState.socket.on("onUpdateFriendList", friendInfoData => {
      // 更新好友列表数据
      commit("updateFriendList", friendInfoData);
    });
  },
  // 监听获取删除好友
  onGetDeleteFriend({ commit, rootState }) {
    rootState.socket.on("onGetDeleteFriend", response => {
      if (response.result) {
        commit("setFriendList", response.data);
      }
    });
  },
  // 获取好友信息
  getFriendInfo({ commit, rootState }, params) {
    rootState.socket.emit("getFriendInfo", params, response => {
      if (response.result) {
        commit("setFriendInfo", response.data);
      }
    });
  },
  // 添加好友
  addFriend({ commit, rootState }, friendId) {
    rootState.socket.emit("addFriend", friendId, addFriendInfoData => {
      // 更新好友列表数据
      commit("updateFriendList", addFriendInfoData);
      // 设置当前好友信息数据
      commit("setFriendInfo", addFriendInfoData);
      // 如果不在friend页面就跳转路由
      if (window.location.href.indexOf("friend") == -1) {
        router.push({ name: "friend" });
      }
    });
  },
  // 删除好友
  deleteFriend({ commit, rootState }, friendId) {
    rootState.socket.emit("deleteFriend", friendId, deleteFriendId => {
      // 获取当前会话的_id
      let dialogueInfoId = rootState.dialogue.dialogueInfo._id;
      // 如果当前会话的ID等于删除好友的ID就清空数据
      if (dialogueInfoId == deleteFriendId) {
        commit("setDialogueInfo", {});
        commit("setChatMessageRecord", []);
      }
      // 更新好友列表数据
      commit("deleteFriend", deleteFriendId);
    });
  },
  // 更新好友备注名称
  updateFriendRemarkName({ commit, state, rootState }, params) {
    rootState.socket.emit("updateFriendRemarkName", params, friendInfoData => {
      // 更新好友列表数据
      commit("updateFriendList", friendInfoData);
      // 如果当前好友信息的_id等于更新备注名的好友ID更新当前好友信息数据
      if (state.friendInfo._id == friendInfoData._id) {
        commit("setFriendInfo", friendInfoData);
      }
    });
  }
};

export default {
  state,
  mutations,
  actions
};

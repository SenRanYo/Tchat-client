/*
 * @Author: 群聊模块
 * @Date: 2020-02-13 18:56:14
 * @LastEditTime: 2020-03-01 17:21:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\store\modules\group.js
 */
import router from "../../router/index";

const state = {
  groupList: [],
  groupInfo: {},
  groupNotice: [],
  groupUserInfo: {}
};

const mutations = {
  // 设置群聊列表
  setGroupList(state, data) {
    state.groupList = data;
  },
  // 更新群聊列表
  updateGroupList(state, data) {
    // 判断列表中是否有更新数据_id的对象
    let exists = state.groupList.some(item => {
      if (item._id == data._id) {
        return true;
      }
    });
    // 存在对象就更新
    if (exists) {
      state.groupList = state.groupList.map(item => {
        return item._id == data._id ? data : item;
      });
    } else {
      // 不存在合并
      state.groupList.push(data);
    }
  },
  // 删除群聊列表数据
  deleteGroup(state, id) {
    // 更新群聊列表返回群聊列表中_id不等于id的数据
    state.groupList = state.groupList.filter(function(obj) {
      return obj._id !== id;
    });
    // 如果当前群聊信息ID等于删除群聊的ID就清空当前好友数据
    if (state.groupInfo._id == id) {
      state.groupInfo = {};
    }
  },
  // 设置群聊信息
  setGroupInfo(state, data) {
    state.groupInfo = data;
  },
  // 设置群聊公告数据
  setGroupNotice(state, data) {
    state.groupNotice = data;
  },
  // 设置群聊用户信息
  setGroupUserInfo(state, data) {
    state.groupUserInfo = data;
  }
};

const actions = {
  // 监听获取群聊列表数据
  onGetGroupList({ commit, rootState }) {
    rootState.socket.on("onGetGroupList", response => {
      commit("setGroupList", response);
    });
  },
  // 监听获取群聊公告数据
  onGetGroupNotice({ commit, rootState }) {
    rootState.socket.on("onGetGroupNotice", response => {
      commit("setGroupNotice", response);
    });
  },
  // 获取群聊用户数据
  getGroupUserInfo({ commit, rootState }, groupId) {
    rootState.socket.on("getGroupUserInfo", { groupId }, response => {
      if (response.result) {
        commit("setGroupUserInfo", response.data);
      }
    });
  },
  // 添加群聊
  addGroup({ commit, rootState }, groupId) {
    rootState.socket.on("addGroup", groupId, addGroupInfoData => {
      // 更新群聊列表数据
      commit("updateGroupList", addGroupInfoData);
      // 设置当前群聊信息数据
      commit("setGroupInfo", addGroupInfoData);
      // 如果不在group页面就跳转路由
      if (window.location.href.indexOf("group") == -1) {
        router.push({ name: "group" });
      }
    });
  },
  // 退出群聊
  quitGroup({ commit, rootState }, groupId) {
    rootState.socket.emit("quitGroup", groupId, deleteGroupId => {
      // 获取当前会话的_id
      let dialogueInfoId = rootState.dialogue.dialogueInfo._id;
      // 如果当前会话的ID等于删除群聊的ID就清空数据
      if (dialogueInfoId == deleteGroupId) {
        commit("setDialogueInfo", {});
        commit("setChatMessageRecord", []);
      }
      commit("deleteGroup", deleteGroupId);
    });
  },
  // 创建群聊
  createGroup({ commit, rootState }, params) {
    rootState.socket.emit("createGroup", params, createGroupInfoData => {
      // 更新群聊列表数据
      commit("updateGroupList", createGroupInfoData);
      // 设置当前群聊信息数据
      commit("setGroupInfo", createGroupInfoData);
      // 如果不在group页面就跳转路由
      if (window.location.href.indexOf("group") == -1) {
        router.push({ name: "group" });
      }
    });
  },
  // 发布群公告
  addGroupNotice({ commit, rootState }, params) {
    rootState.socket.emit("addGroupNotice", params, groupNoticeInfoData => {
      // 设置群聊公告数据
      commit("setGroupNotice", groupNoticeInfoData);
    });
  },
  // 查询群聊公告
  findGroupNotice({ commit, rootState }, groupId) {
    rootState.socket.emit("findGroupNotice", groupId, groupNoticeInfoData => {
      // 设置群聊公告数据
      commit("setGroupNotice", groupNoticeInfoData);
    });
  },
  // 删除群聊公告
  deleteGroupNotice({ commit, rootState }, params) {
    rootState.socket.emit("deleteGroupNotice", params, groupNoticeInfoData => {
      // 设置群聊公告数据
      commit("setGroupNotice", groupNoticeInfoData);
    });
  }
};

export default {
  state,
  mutations,
  actions
};

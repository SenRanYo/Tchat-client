/*
 * @Author: your name
 * @Date: 2020-02-13 18:56:14
 * @LastEditTime: 2020-02-25 21:12:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\store\modules\group.js
 */
const state = {
  groupList: [],
  groupInfo: {},
  groupUserInfo: {}
};

const mutations = {
  setGroupList(state, data) {
    state.groupList = data;
  },
  setGroupInfo(state, data) {
    state.groupInfo = data;
  },
  setGroupUserInfo(state, data) {
    state.groupUserInfo = data;
  }
};

const actions = {
  // 监听获取群聊列表数据
  onGetGroupList({ commit, rootState }) {
    rootState.socket.on("onGetGroupList", response => {
      if (response.result) {
        commit("setGroupList", response.data);
        console.log("群聊列表数据", response.data);
      }
    });
  },
  // 监听获取群聊状态数据
  onGetGroupStatus({ commit, rootState }, groupId) {
    rootState.socket.on("onGetGroupStatus", { groupId }, response => {
      if (response.result) {
        commit("setGroupList", response.data);
        console.log("群聊状态数据", response.data);
      }
    });
  },
  // 监听获取添加群聊数据
  onGetAddGroup({ commit, rootState }, groupId) {
    rootState.socket.on("onGetAddGroup", { groupId }, response => {
      if (response.result) {
        commit("setGroupList", response.data);
        console.log("加入群聊数据", response.data);
      }
    });
  },
  // 监听获取删除群聊数据
  onGetDeleteGroup({ commit, rootState }, groupId) {
    rootState.socket.on("onGetDeleteGroup", { groupId }, response => {
      if (response.result) {
        commit("setGroupList", response.data);
        console.log("删除群聊数据", response.data);
      }
    });
  },
  // 获取群聊用户数据
  getGroupUserInfo({ commit, rootState }, groupId) {
    rootState.socket.on("getGroupUserInfo", { groupId }, response => {
      if (response.result) {
        commit("setGroupUserInfo", response.data);
        console.log("群聊用户数据", response.data);
      }
    });
  }
};

export default {
  state,
  mutations,
  actions
};

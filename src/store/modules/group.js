/*
 * @Author: 群聊模块
 * @Date: 2020-02-13 18:56:14
 * @LastEditTime: 2020-02-28 18:50:04
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
      state.groupList.concat(data);
    }
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
        console.log("服务端推送群聊列表数据", response.data);
      }
    });
  },
  // 监听获取群聊状态数据
  onGetGroupStatus({ commit, rootState }) {
    rootState.socket.on("onGetGroupStatus", response => {
      if (response.result) {
        commit("updateGroupList", response.data);
        console.log("服务端推送群聊列表更新数据", response.data);
      }
    });
  },
  // 监听获取添加群聊数据
  onGetAddGroup({ commit, rootState }) {
    rootState.socket.on("onGetAddGroup", response => {
      if (response.result) {
        commit("setGroupList", response.data);
        console.log("加入群聊数据", response.data);
      }
    });
  },
  // 监听获取删除群聊数据
  onGetDeleteGroup({ commit, rootState }) {
    rootState.socket.on("onGetDeleteGroup", response => {
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

/*
 * @Author: 搜索模块
 * @Date: 2020-03-01 19:30:14
 * @LastEditTime: 2020-03-01 19:53:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\store\modules\search.js
 */
const state = {
  // 搜索用户数据
  searchUserList: []
};

const mutations = {
  // 设置搜索用户数据
  setSearchUserList(state, data) {
    state.searchUserList = data;
  }
};

const actions = {
  // 搜索用户
  searchUser({ commit, rootState }, name) {
    rootState.socket.emit("searchUser", name, searchUserData => {
      // 设置搜索用户数据
      commit("setSearchUserList", searchUserData);
    });
  }
};

export default {
  state,
  mutations,
  actions
};

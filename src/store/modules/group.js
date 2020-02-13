import * as types from "../mutation-types";
// import { MessageBox } from "element-ui";

const state = {
  groupList: []
};

const mutations = {
  [types.SET_GROUP_LIST](state, data) {
    state.groupList = data;
  }
};

const actions = {
  getGroupList({ commit, rootState }) {
    rootState.socket.emit("getGroupList", response => {
      if (response.result) {
        commit(types.SET_GROUP_LIST, response.data);
        console.log("提示：获取群聊列表成功");
      }
    });
  },
  onGetGroupList({ commit, rootState }) {
    rootState.socket.on("onGetGroupList", response => {
      if (response.result) {
        commit(types.SET_GROUP_LIST, response.data);
        console.log("提示：更新群聊列表成功");
      }
    });
  }
};

export default {
  state,
  mutations,
  actions
};

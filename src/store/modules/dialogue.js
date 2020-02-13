import * as types from "../mutation-types";
// import { MessageBox } from "element-ui";

const state = {
  dialogueList: []
};

const mutations = {
  [types.SET_DIALOGUE_LIST](state, data) {
    state.dialogueList = data;
  }
};

const actions = {
  getDialogueList({ commit, rootState }) {
    rootState.socket.emit("getDialogueList", response => {
      if (response.result) {
        commit(types.SET_DIALOGUE_LIST, response.data);
        console.log("提示：获取好友列表成功");
      }
    });
  },
  onGetDialogueList({ commit, rootState }) {
    rootState.socket.on("onGetDialogueList", response => {
      if (response.result) {
        commit(types.SET_DIALOGUE_LIST, response.data);
        console.log("提示：更新好友列表成功");
      }
    });
  }
};

export default {
  state,
  mutations,
  actions
};

/*
 * @Author: 会话模块
 * @Date: 2020-02-25 19:42:55
 * @LastEditTime: 2020-02-25 20:43:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\store\modules\dialogue.js
 */
const state = {
  dialogueId: ""
};

const mutations = {
  setDialogueId(state, id) {
    state.dialogueId = id;
  }
};

export default {
  state,
  mutations
};

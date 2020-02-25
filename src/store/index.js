/*
 * @Author: Vuex
 * @Date: 2020-02-11 11:52:17
 * @LastEditTime: 2020-02-25 21:01:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\store\index.js
 */
import Vue from "vue";
import Vuex from "vuex";
import { actions } from "./actions";
import * as getters from "./getters";
import { state, mutations } from "./mutations";
import user from "./modules/user";
import dialogue from "./modules/dialogue";
import message from "./modules/message";
import friend from "./modules/friend";
import group from "./modules/group";

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  modules: {
    user,
    dialogue,
    message,
    friend,
    group
  }
});

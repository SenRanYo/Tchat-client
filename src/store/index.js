import Vue from "vue";
import Vuex from "vuex";
import * as actions from "./actions";
import * as getters from "./getters";
import { state, mutations } from "./mutations";
import user from "./modules/user";
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
    friend,
    group
  }
});

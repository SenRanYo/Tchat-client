import * as types from "../mutation-types";
import router from "../../router";
import axios from "../../api/axiosConfig";
import api from "../../api/index";
import { MessageBox } from "element-ui";

const state = {
  userInfo: {}
};

const mutations = {
  [types.SET_USER_INFO](state, data) {
    state.userInfo = data;
  }
};

const actions = {
  // 注册账号
  register(_, data) {
    axios
      .post(api.register, data)
      .then(response => {
        MessageBox.alert(response.message, "Tchat", {
          confirmButtonText: "确定"
        });
      })
      .catch(error => {
        MessageBox.alert(error, "Tchat", {
          confirmButtonText: "确定"
        });
      });
  },
  // 登陆
  login({ commit }, data) {
    axios
      .post(api.login, data)
      .then(response => {
        if (response.result) {
          commit(types.SET_TOKEN, response.data);
          localStorage.setItem("token", JSON.stringify(response.data.token));
          router.push({ path: "/home" });
          console.log(`提示：${response.message}`);
        } else {
          MessageBox.alert(response.message, "Tchat", {
            confirmButtonText: "确定"
          });
        }
      })
      .catch(error => {
        MessageBox.alert(error, "Tchat", {
          confirmButtonText: "确定"
        });
      });
  },
  // 改密
  changePassword(_, data) {
    axios
      .post(api.changePassword, data)
      .then(response => {
        MessageBox.alert(response.message, "Tchat", {
          confirmButtonText: "确定"
        });
      })
      .catch(error => {
        MessageBox.alert(error, "Tchat", {
          confirmButtonText: "确定"
        });
      });
  },
  // 获取用户信息
  getUserInfo({ commit, rootState }) {
    rootState.socket.emit(
      "getUserInfo",
      { token: rootState.token },
      response => {
        if (response.result) {
          commit(types.SET_USER_INFO, response.data);
          console.log("提示：获取登陆用户信息成功");
        }
      }
    );
  }
};

export default {
  state,
  mutations,
  actions
};

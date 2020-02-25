/*
 * @Author: your name
 * @Date: 2020-02-11 19:35:10
 * @LastEditTime: 2020-02-25 21:13:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\store\modules\user.js
 */
import router from "../../router";
import axios from "../../api/axiosConfig";
import api from "../../api/index";
import { MessageBox } from "element-ui";

const state = {
  userInfo: {}
};

const mutations = {
  setUserInfo(state, data) {
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
          commit("setToken", response.data);
          localStorage.setItem("token", JSON.stringify(response.data.token));
          router.push({ path: "/home/dialogue" });
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
  onGetUserInfo({ commit, rootState }) {
    rootState.socket.on("onGetUserInfo", response => {
      commit("setUserInfo", response.data);
      console.log("登陆用户信息数据", response.data);
    });
  }
};

export default {
  state,
  mutations,
  actions
};

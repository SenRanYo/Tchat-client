/*
 * @Author: 根级别actions
 * @Date: 2020-02-11 13:56:35
 * @LastEditTime: 2020-03-01 18:50:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\store\actions.js
 */
import io from "socket.io-client";
import api from "../api/index";
import { Message } from "element-ui";

export const actions = {
  // 初始化程序
  initApp({ dispatch, commit, state }) {
    const socket = io(`${api.socketUrl}?token=${state.token}`);
    commit("setSocket", socket);
    // socket连接成功处理
    socket.on("connect", () => {
      dispatch("onGetUserInfo");
      dispatch("onUpdateFriendChatRecord");
      dispatch("onUpdateGroupChatRecord");
      dispatch("onGetFriendList");
      dispatch("onUpdateFriendList");
      dispatch("onGetGroupList");
      dispatch("onGetGroupNotice");
    });
    // 错误信息
    socket.on("error", err => {
      Message.closeAll();
      Message({
        showClose: true,
        message: err,
        type: "error",
        duration: 3000
      });
    });
    // 重新连接
    socket.on("reconnect", () => {
      window.location.reload();
    });
    // 断开连接
    socket.on("disconnect", () => {
      state.user.userInfo.online_status = false;
      Message.closeAll();
      Message({
        showClose: true,
        message: "服务器断开连接",
        type: "error",
        duration: 3000
      });
    });
    // 自动重连
    socket.on("reconnecting", timeout => {
      Message.closeAll();
      Message({
        showClose: true,
        message: `服务器断开连接,尝试第${timeout}次连接`,
        type: "error",
        duration: 3000
      });
    });
  }
};

/*
 * @Author: 根级别actions
 * @Date: 2020-02-11 13:56:35
 * @LastEditTime: 2020-02-25 21:15:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\store\actions.js
 */
import io from "socket.io-client";
import api from "../api/index";
import { MessageBox } from 'element-ui';

export const actions = {
  // 初始化程序
  initApp({ dispatch, commit, state }) {
    const socket = io(`${api.socketUrl}?token=${state.token}`);
    commit("setSocket", socket);
    // socket连接成功处理
    socket.on("connect", () => {
      // 用户相关
      dispatch("onGetUserInfo");
      // 消息相关
      dispatch("onGetAllMessageRecord");
      // 好友相关
      dispatch("onGetFriendList");
      dispatch("onGetFriendStatus");
      dispatch("onGetAddFriend");
      dispatch("onGetDeleteFriend");
      // 群聊相关
      dispatch("onGetGroupList");
      dispatch("onGetGroupStatus");
      dispatch("onGetAddGroup");
      dispatch("onGetDeleteGroup");
    });
    // 连接错误
    socket.on("error", err => {
      MessageBox.alert(err, "错误");
    });
    // 重新连接
    socket.on("reconnect", () => {
      console.log("服务器重新连接成功");
    });
    // 断开连接
    socket.on("disconnect", () => {
      state.user.userInfo.online = false;
      console.log("服务器断开连接");
    });
    // 自动重连
    socket.on("reconnecting", timeout => {
      state.user.userInfo.online = false;
      console.log(`服务器断开连接,尝试第${timeout}次连接`);
    });
  }
};

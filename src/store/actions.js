// import { MessageBox } from "element-ui";
import io from "socket.io-client";
import api from "../api/index";
import * as types from "./mutation-types";
// 初始化应用
// eslint-disable-next-line no-unused-vars
export const initApp = ({ dispatch, commit, state }) => {
  const socket = io(`${api.socketUrl}?token=${state.token}`);
  commit(types.SET_SOCKET, socket);
  // 初始化获取数据
  dispatch("getUserInfo");
  dispatch("getFriendList");
  dispatch("getGroupList");

  socket.on("error", err => {
    // MessageBox.alert(err, "Tchat");
    console.log(err);
  });
  socket.on("reconnect", () => {
    console.log("服务器重新连接成功");
  });
  socket.on("disconnect", () => {
    // MessageBox.alert("服务器断开连接", "Tchat");
    console.log("服务器断开连接");
  });
  socket.on("reconnecting", timeout => {
    // MessageBox.alert(`服务器断开连接,尝试第${timeout}次连接`, "Tchat");
    console.log(`服务器断开连接,尝试第${timeout}次连接`);
  });
};
export const closeSocket = ({ state }) => {
  state.socket.close();
};

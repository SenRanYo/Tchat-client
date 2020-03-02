/*
 * @Author: your name
 * @Date: 2020-02-11 19:31:00
 * @LastEditTime: 2020-03-01 20:22:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\api\index.js
 */
let baseUrl = "";
// 开发环境
if (process.env.NODE_ENV === "development") {
  baseUrl = "http://localhost:3000";
}
// 上线环境
if (process.env.NODE_ENV === "production") {
  baseUrl = "http://tchat-server.vipnps.vip";
}
// api
const api = {
  // 登陆
  login: `${baseUrl}/api/login`,
  // 注册
  register: `${baseUrl}/api/register`,
  // 改密
  changePassword: `${baseUrl}/api/changePassword`,
  // socketUrl
  socketUrl: baseUrl
};

export default api;

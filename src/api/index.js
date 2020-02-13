let baseUrl = "";
// 开发环境
if (process.env.NODE_ENV === "development") {
  baseUrl = "http://localhost:3000";
}
// 上线环境
if (process.env.NODE_ENV === "production") {
  baseUrl = "http://localhost:3000";
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

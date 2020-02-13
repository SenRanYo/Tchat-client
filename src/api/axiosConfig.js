import axios from "axios";
import qs from "qs";

axios.create({
  // 超时时间
  timeout: 1000 * 15,
  // 请求头
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
  },
  // 序列化 'indices' = 'a[0]=b&a[1]=c' / 'brackets' = 'a[]=b&a[]=c' / 'repeat' = 'a=b&a=c'
  paramsSerializer: function(params) {
    return qs.stringify(params, { indices: false });
  }
});
// 请求拦截器
axios.interceptors.request.use(
  config => {
    if (config.method === "post") {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axios;

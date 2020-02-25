/*
 * @Author: your name
 * @Date: 2020-02-11 13:58:09
 * @LastEditTime: 2020-02-20 22:36:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\vue.config.js
 */
module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 80,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        ws: false,
        changeOrigin: false
      }
    }
  }
};

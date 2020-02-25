/*
 * @Author: your name
 * @Date: 2020-02-11 11:52:17
 * @LastEditTime: 2020-02-25 19:58:46
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import EvaIcons from "vue-eva-icons";
import "./registerServiceWorker";
import "./plugins/element.js";
import "./assets/iconfont/iconfont.css";
import "./assets/style/reset.scss";

Vue.config.productionTip = false;

Vue.use(EvaIcons);

const requireComponent = require.context(
  // 其组件目录的相对路径
  "./components",
  // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName);
  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 获取和目录深度无关的文件名
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );

  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  );
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

/*
 * @Author: your name
 * @Date: 2020-02-11 11:52:17
 * @LastEditTime: 2020-03-01 21:38:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\router\index.js
 */
import Vue from "vue";
// import Store from "../store/index";
import VueRouter from "vue-router";
// 一级路由
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Password from "../views/Password.vue";
// 二级路由
import Personal from "../views/Personal.vue";
import Dialogue from "../views/Dialogue.vue";
import Friend from "../views/Friend.vue";
import Group from "../views/Group.vue";
import Search from "../views/Search.vue";
import Record from "../views/Record.vue";
import Setting from "../views/Setting.vue";

Vue.use(VueRouter);

const routes = [
  { path: "*", redirect: "/login" },
  { path: "/login", name: "login", component: Login },
  { path: "/register", name: "register", component: Register },
  { path: "/password", name: "password", component: Password },
  {
    path: "/home",
    name: "home",
    component: Home,
    children: [
      { path: "/home/personal", name: "personal", component: Personal },
      { path: "/home/dialogue", name: "dialogue", component: Dialogue },
      { path: "/home/friend", name: "friend", component: Friend },
      { path: "/home/group", name: "group", component: Group },
      { path: "/home/search", name: "search", component: Search },
      { path: "/home/record", name: "record", component: Record },
      { path: "/home/setting", name: "setting", component: Setting }
    ]
  }
];

const router = new VueRouter({
  routes
});

// 路由守卫
router.beforeEach((to, from, next) => {
  // 切换到login页时
  if (to.name === "login" && from.name !== null) {
    // window.location.reload();
  }
  next();
});
export default router;

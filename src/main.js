import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import EvaIcons from "vue-eva-icons";
import UserAvatar from "./components/UserAvatar";
import ChatListHead from "./components/ChatListHead";
import SearchLinkman from "./components/SearchLinkman";
import ChatList from "./components/ChatList";
import ChatBar from "./components/ChatBar";
import InfoBar from "./components/InfoBar";
import SendBar from "./components/SendBar";
import Emoji from "./components/Emoji";
import "./registerServiceWorker";
import "./plugins/element.js";
import "./assets/iconfont/iconfont.css";
import "./assets/style/reset.scss";

Vue.config.productionTip = false;

Vue.use(EvaIcons);
Vue.use(UserAvatar);
Vue.use(ChatListHead);
Vue.use(SearchLinkman);
Vue.use(ChatList);
Vue.use(ChatBar);
Vue.use(InfoBar);
Vue.use(SendBar);
Vue.use(Emoji);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

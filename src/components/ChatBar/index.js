import ChatBar from "./ChatBar.vue";

ChatBar.install = function(Vue) {
  Vue.component(ChatBar.name, ChatBar);
};

export default ChatBar;

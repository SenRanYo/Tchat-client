import ChatList from "./ChatList.vue";

ChatList.install = function(Vue) {
  Vue.component(ChatList.name, ChatList);
};

export default ChatList;

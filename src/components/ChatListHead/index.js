import ChatListHead from "./ChatListHead.vue";

ChatListHead.install = function(Vue) {
  Vue.component(ChatListHead.name, ChatListHead);
};

export default ChatListHead;

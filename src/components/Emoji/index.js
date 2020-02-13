import Emoji from "./Emoji.vue";

Emoji.install = function(Vue) {
  Vue.component(Emoji.name, Emoji);
};

export default Emoji;

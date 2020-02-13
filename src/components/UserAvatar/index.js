import UserAvatar from "./UserAvatar.vue";

UserAvatar.install = function(Vue) {
  Vue.component(UserAvatar.name, UserAvatar);
};

export default UserAvatar;

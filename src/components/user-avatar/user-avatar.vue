<!--
 * @Author: 用户头像组件
 * @Date: 2020-02-24 19:23:36
 * @LastEditTime: 2020-02-25 23:46:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\components\UserAvatar.vue
 -->
<template>
  <div
    :class="
      status == true ? 'user-avatar' : 'user-avatar  user-avatar--grayscale'
    "
    :style="{ width: size + 'px', height: size + 'px' }"
  >
    <el-avatar :src="src" :size="size">
      <span>{{ name }}</span>
    </el-avatar>
    <eva-icon
      v-if="type == 1"
      class="avatar__icon"
      name="github-outline"
      fill="#6AC383"
      width="12px"
      height="12px"
    ></eva-icon>
  </div>
</template>

<script>
export default {
  name: "UserAvatar",
  props: {
    src: { type: String },
    name: { type: String },
    status: { type: Boolean },
    type: { type: Number },
    size: { type: Number, default: 40 }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.user-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .avatar__icon {
    position: absolute;
    top: 0px;
    right: 0px;
    padding: 1px;
    display: flex;
    border-radius: 50%;
    background-color: #fff;
  }
}
.user-avatar--grayscale {
  filter: grayscale(100%);
}
</style>

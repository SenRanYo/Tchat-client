<!--
 * @Author: your name
 * @Date: 2020-02-11 20:33:01
 * @LastEditTime: 2020-02-24 19:39:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\components\Avatar.vue
 -->
<template>
  <div
    class="avatar"
    :class="{ 'avatar--grayscale': !status && isStatus }"
    :style="{ width: size + 'px', height: size + 'px' }"
  >
    <!-- 头像组件 -->
    <el-avatar :src="src" :size="size" :shape="shape">
      <span>{{ content }}</span>
    </el-avatar>
    <!-- Github图标 -->
    <eva-icon
      v-if="userType == 1"
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
  name: "Avatar",
  props: {
    // 资源地址
    src: {
      type: String
    },
    // 资源加载失败显示的内容
    content: {
      type: String
    },
    // 在线状态状态
    status: {
      type: Boolean
    },
    // 用户类型
    userType: {
      type: Number,
      default: 0
    },
    // 头像大小
    size: {
      type: Number,
      default: 40
    },
    // 头像形状
    shape: {
      type: String,
      default: "circle"
    },
    // 是否需要检测状态
    isStatus: {
      type: Boolean,
      default: true
    }
  }
};
</script>
<style lang="scss">
.avatar {
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
.avatar--grayscale {
  filter: grayscale(100%);
}
</style>

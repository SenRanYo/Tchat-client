<template>
  <div
    class="user-avatar"
    :class="{ 'user-avatar--grayscale': status == false }"
  >
    <!-- 头像组件 -->
    <el-avatar :src="src" :size="size" :shape="shape">
      <span>{{ content }}</span>
    </el-avatar>
    <!-- Github图标 -->
    <eva-icon
      v-if="userType == 1"
      class="user-avatar__icon"
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
    // 资源地址
    src: {
      type: String
    },
    // 资源加载失败显示的内容
    content: {
      type: String
    },
    // 用户状态
    status: {
      type: Boolean,
      default: true
    },
    // 用户类型
    userType: {
      type: Number,
      default: 0
    },
    // 头像大小
    size: {
      type: Number
    },
    // 头像形状
    shape: {
      type: String,
      default: "circle"
    }
  }
};
</script>
<style lang="scss">
.user-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .user-avatar__icon {
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

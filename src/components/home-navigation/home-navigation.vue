<template>
  <!-- 导航栏 -->
  <div class="navigation">
    <router-link class="navigation__btn" :to="{ path: '/home/personal' }">
      <UserAvatar
        :src="userInfo.avatar"
        :name="userInfo.name"
        :status="userInfo.online_status"
        :type="userInfo.type"
      ></UserAvatar>
      <!-- hover显示动画元素 -->
      <span class="bottom"></span>
      <span class="right"></span>
      <span class="top"></span>
      <span class="left"></span>
    </router-link>
    <router-link class="navigation__btn" :to="{ path: '/home/dialogue' }">
      <eva-icon name="message-square" fill="#797A96"></eva-icon>
      <!-- hover显示动画元素 -->
      <span class="bottom"></span>
      <span class="right"></span>
      <span class="top"></span>
      <span class="left"></span>
    </router-link>
    <router-link class="navigation__btn" :to="{ path: '/home/friend' }">
      <eva-icon name="person" fill="#797A96"></eva-icon>
      <!-- hover显示动画元素 -->
      <span class="bottom"></span>
      <span class="right"></span>
      <span class="top"></span>
      <span class="left"></span>
    </router-link>
    <router-link class="navigation__btn" :to="{ path: '/home/group' }">
      <eva-icon name="people" fill="#797A96"></eva-icon>
      <!-- hover显示动画元素 -->
      <span class="bottom"></span>
      <span class="right"></span>
      <span class="top"></span>
      <span class="left"></span>
    </router-link>
    <router-link class="navigation__btn" :to="{ path: '/home/setting' }">
      <eva-icon name="settings-2" fill="#797A96"></eva-icon>
      <!-- hover显示动画元素 -->
      <span class="bottom"></span>
      <span class="right"></span>
      <span class="top"></span>
      <span class="left"></span>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HomeNavigation",
  computed: { ...mapGetters(["userInfo"]) }
};
</script>

<style lang="scss">
// 导航容器
.navigation {
  width: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #434157;
  // 导航按钮
  .navigation__btn {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: background-color 0.3s ease-in-out;
    cursor: default;
    // hover显示元素样式
    & > span {
      position: absolute;
      background-color: #6ac383;
      transition: transform 0.5s ease;
    }
    .bottom,
    .top {
      height: 2px;
      left: 0;
      right: 0;
      transform: scaleX(0);
    }

    .left,
    .right {
      width: 2px;
      top: 0;
      bottom: 0;
      transform: scaleY(0);
    }

    .bottom {
      bottom: 0;
      transform-origin: bottom right;
    }

    &:hover .bottom {
      transform-origin: bottom left;
      transform: scaleX(1);
    }

    .right {
      right: 0;
      transform-origin: top right;
    }

    &:hover .right {
      transform-origin: bottom right;
      transform: scaleY(1);
    }

    .top {
      top: 0;
      transform-origin: top left;
    }

    &:hover .top {
      transform-origin: top right;
      transform: scaleX(1);
    }

    .left {
      left: 0;
      transform-origin: bottom left;
    }

    &:hover .left {
      transform-origin: top left;
      transform: scaleY(1);
    }

    &:hover:not(:first-child) {
      .eva-hover > svg {
        fill: #efefef;
      }
    }
  }
  // 路由激活样式
  .router-link-active {
    background-color: #6ac383;
    & > .eva-hover > svg {
      fill: #efefef;
    }
  }
}
</style>

<template>
  <div class="home-nav">
    <router-link class="home-nav__item" :to="{ path: '/home/personal' }">
      <UserAvatar
        :src="userInfo.avatar"
        :content="userInfo.name"
        :status="userInfo.onlineStatus"
        :userType="userInfo.type"
        :size="40"
      ></UserAvatar>
      <!-- hover显示动画元素 -->
      <span class="bottom"></span>
      <span class="right"></span>
      <span class="top"></span>
      <span class="left"></span>
    </router-link>
    <router-link class="home-nav__item" :to="{ path: '/home/dialogue' }">
      <eva-icon name="message-square" fill="#797A96"></eva-icon>
      <!-- hover显示动画元素 -->
      <span class="bottom"></span>
      <span class="right"></span>
      <span class="top"></span>
      <span class="left"></span>
    </router-link>
    <router-link class="home-nav__item" :to="{ path: '/home/friend' }">
      <eva-icon name="person" fill="#797A96"></eva-icon>
      <!-- hover显示动画元素 -->
      <span class="bottom"></span>
      <span class="right"></span>
      <span class="top"></span>
      <span class="left"></span>
    </router-link>
    <router-link class="home-nav__item" :to="{ path: '/home/group' }">
      <eva-icon name="people" fill="#797A96"></eva-icon>
      <!-- hover显示动画元素 -->
      <span class="bottom"></span>
      <span class="right"></span>
      <span class="top"></span>
      <span class="left"></span>
    </router-link>
    <router-link class="home-nav__item" :to="{ path: '/home/setting' }">
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
  name: "homeNav",
  computed: { ...mapGetters(["userInfo"]) }
};
</script>
<style lang="scss">
.home-nav {
  width: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #434157;
  .home-nav__item {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: background-color 0.3s ease-in-out;
  }

  // hover效果
  .home-nav__item > span {
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

  .home-nav__item:hover .bottom {
    transform-origin: bottom left;
    transform: scaleX(1);
  }

  .right {
    right: 0;
    transform-origin: top right;
  }

  .home-nav__item:hover .right {
    transform-origin: bottom right;
    transform: scaleY(1);
  }

  .top {
    top: 0;
    transform-origin: top left;
  }

  .home-nav__item:hover .top {
    transform-origin: top right;
    transform: scaleX(1);
  }

  .left {
    left: 0;
    transform-origin: bottom left;
  }

  .home-nav__item:hover .left {
    transform-origin: top left;
    transform: scaleY(1);
  }

  .home-nav__item:hover:not(:first-child) {
    .eva-hover > svg {
      fill: #efefef;
    }
  }
  .router-link-active {
    background-color: #6ac383;
    & > .eva-hover > svg {
      fill: #efefef;
    }
  }
}
</style>

<!--
 * @Author: 好友列表项组件
 * @Date: 2020-02-25 21:31:03
 * @LastEditTime: 2020-02-25 23:41:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\components\friend-list-item\friend-list-item.vue
 -->
<template>
  <div
    :class="
      friendData._id == friendInfo._id
        ? 'friend-list-item dialogue-list-item--select'
        : 'friend-list-item'
    "
    @click="clickItemHandle(friendData._id)"
  >
    <!-- item左边 -->
    <div class="item__left">
      <!-- 头像 -->
      <UserAvatar
        :src="friendData.avatar"
        :name="friendData.name"
        :status="friendData.online_status"
        :type="friendData.type"
      ></UserAvatar>
    </div>
    <!-- item右边 -->
    <div class="item__right">
      <!-- item右边顶部 -->
      <div class="item__right__top">
        <!-- 名称 -->
        <span class="name" :title="friendData.name">
          {{ friendData.name }}
        </span>
        <!-- 设备 -->
        <span class="browser">
          {{ friendData.browser ? friendData.browser : "离线" }}
        </span>
      </div>
      <!-- item右边底部 -->
      <div class="item__right__bottom">
        <!-- 签名-->
        <span class="signature" :title="friendData.signature">
          {{ friendData.signature }}
        </span>
        <!-- 系统 -->
        <span class="device" v-if="friendData.device">
          {{ friendData.device }}
        </span>
      </div>
    </div>
    <!-- hover显示动画元素 -->
    <span class="bottom"></span>
    <span class="right"></span>
    <span class="top"></span>
    <span class="left"></span>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "FriendListItem",
  props: {
    friendData: Object
  },
  data() {
    return {};
  },
  computed: {
    // 映射Getters
    ...mapGetters(["friendInfo"])
  },
  methods: {
    // 映射Mutations
    ...mapMutations(["setFriendInfo"]),
    clickItemHandle() {
      this.setFriendInfo(this.friendData);
    }
  }
};
</script>

<style lang="scss">
.friend-list-item {
  width: 250px;
  height: 50px;
  padding: 5px 10px;
  display: flex;
  position: relative;
  // item左边
  .item__left {
    width: 40px;
    height: 100%;
  }
  // item右边
  .item__right {
    width: calc(100% - 40px);
    height: 100%;
    padding-left: 10px;
    line-height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #cfcfcf;
    .item__right__top {
      width: 100%;
      height: 20px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .name {
        color: #fff;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .browser {
        padding-left: 5px;
        flex-shrink: 0;
      }
    }
    .item__right__bottom {
      width: 100%;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .signature {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .device {
        flex-shrink: 0;
      }
    }
  }
  & > span {
    position: absolute;
    background-color: #6ac383;
    transition: transform 0.4s ease;
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
}
// item激活样式
.friend-list-item--select {
  background-color: #6ac383;
}
</style>

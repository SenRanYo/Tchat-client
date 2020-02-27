<!--
 * @Author: 群聊列表项组件
 * @Date: 2020-02-26 22:35:14
 * @LastEditTime: 2020-02-26 22:57:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\components\group-list-item\group-list-item.vue
 -->
<template>
  <div
    :class="
      groupData._id == groupInfo._id
        ? 'group-list-item group-list-item--select'
        : 'group-list-item'
    "
    @click="clickGroupHandle(groupData._id)"
  >
    <!-- item左边 -->
    <div class="item__left">
      <!-- 头像 -->
      <el-avatar :size="40" :src="groupData.avatar">
        <span>{{ groupData.name }}</span>
      </el-avatar>
    </div>
    <!-- item右边 -->
    <div class="item__right">
      <!-- item右边顶部 -->
      <div class="item__right__top">
        <!-- 名称 -->
        <span class="name" :title="groupData.name">
          {{ groupData.name }}
        </span>
        <!-- 人数 -->
        <span class="sum">
          {{ `共${groupData.user_sum}人` }}
        </span>
      </div>
      <!-- item右边底部 -->
      <div class="item__right__bottom">
        <!-- 群介绍-->
        <span class="introduce" :title="groupData.introduce">
          {{ groupData.introduce }}
        </span>
        <!-- 待定 -->
        <!-- <span class="device" v-if="groupData.device">
          {{ groupData.device }}
        </span> -->
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
  name: "GroupListItem",
  props: {
    groupData: Object
  },
  data() {
    return {};
  },
  computed: {
    // 映射Getters
    ...mapGetters(["groupInfo"])
  },
  methods: {
    // 映射Mutations
    ...mapMutations(["setGroupInfo"]),
    clickGroupHandle() {
      this.setGroupInfo(this.groupData);
    }
  }
};
</script>

<style lang="scss">
.group-list-item {
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
      .sum {
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
      .introduce {
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
.group-list-item--select {
  background-color: #6ac383;
}
</style>

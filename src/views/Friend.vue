<!--
 * @Author: 好友页
 * @Date: 2020-02-11 13:58:57
 * @LastEditTime: 2020-02-25 21:50:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\views\Friend.vue
 -->
<template>
  <!-- 好友页 -->
  <div class="friend">
    <div class="friend__left">
      <!-- 列表栏头部组件 -->
      <ListBarHead headTitle="好友列表" headNumber="共10个好友"></ListBarHead>
      <!-- 列表栏搜索组件 -->
      <ListBarSearch></ListBarSearch>
      <!-- 列表栏列表 -->
      <div class="friend-list">
        <el-scrollbar>
          <FriendListItem
            v-for="(item, index) in friendList"
            :key="index"
            :friendData="item"
          ></FriendListItem>
        </el-scrollbar>
      </div>
    </div>
    <div class="friend__right">
      <FriendInfo></FriendInfo>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Friend",
  data() {
    return {
      infoBarData: {}
    };
  },
  computed: {
    ...mapGetters(["friendList"])
  },
  created() {
    // console.log(this.friendList);
  },
  methods: {
    // 获取好友信息
    getFriendInfo(data) {
      this.infoBarData = data;
    }
  }
};
</script>
<style lang="scss">
// 好友页样式
.friend {
  width: 100%;
  height: 100%;
  display: flex;
  // 会话页左边
  .friend__left {
    width: 250px;
    height: 100%;
    background: #6e6f8d;
    display: flex;
    flex-direction: column;
    .friend-list {
      width: 250px;
      height: calc(100% - 100px);
      // 列表滚动栏样式
      .el-scrollbar {
        height: 100%;
        .el-scrollbar__wrap {
          overflow-x: hidden;
          user-select: none;
          cursor: default;
        }
      }
    }
  }
  // 会话页右边
  .friend__right {
    width: calc(100% - 250px);
    height: 100%;
    background-color: #fff;
    background-image: url("../assets/img/ikon.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 680px 400px;
  }
}
</style>

<!--
 * @Author: 好友页
 * @Date: 2020-02-11 13:58:57
 * @LastEditTime: 2020-02-28 10:50:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\views\Friend.vue
 -->
<template>
  <!-- 好友页 -->
  <div class="friend">
    <div class="friend__left">
      <!-- 列表栏头部组件 -->
      <ListHead
        headTitle="好友列表"
        :headNumber="`共${friendList.length}个好友`"
      ></ListHead>
      <!-- 列表栏搜索组件 -->
      <ListBarSearch></ListBarSearch>
      <!-- 列表栏列表 -->
      <div class="friend-list">
        <el-scrollbar>
          <div class="hint" v-if="friendList.length < 1">
            <p>还没有好友,快去添加吧</p>
          </div>
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
    return {};
  },
  computed: {
    ...mapGetters(["friendList"])
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
      // 没有数据时提示内容
      .hint {
        width: 250px;
        height: 50px;
        padding: 0 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
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

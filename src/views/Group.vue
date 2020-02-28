<!--
 * @Author: 群聊页
 * @Date: 2020-02-11 13:59:24
 * @LastEditTime: 2020-02-28 10:50:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\views\Group.vue
 -->
<template>
  <!-- 群聊页 -->
  <div class="group">
    <div class="group__left">
      <!-- 列表栏头部组件 -->
      <ListHead
        headTitle="好友列表"
        :headNumber="`共${groupList.length}个群聊`"
      ></ListHead>
      <!-- 列表栏搜索组件 -->
      <ListBarSearch></ListBarSearch>
      <!-- 列表栏列表 -->
      <div class="group-list">
        <el-scrollbar>
          <div class="hint" v-if="groupList.length < 1">
            <p>还没有群聊,快去添加吧</p>
          </div>
          <GroupListItem
            v-for="(item, index) in groupList"
            :key="index"
            :groupData="item"
          ></GroupListItem>
        </el-scrollbar>
      </div>
    </div>
    <div class="group__right">
      <GroupInfo></GroupInfo>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Group",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["groupList"])
  }
};
</script>
<style lang="scss">
// 群聊页样式
.group {
  width: 100%;
  height: 100%;
  display: flex;
  // 会话页左边
  .group__left {
    width: 250px;
    height: 100%;
    background: #6e6f8d;
    display: flex;
    flex-direction: column;
    .group-list {
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
  .group__right {
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

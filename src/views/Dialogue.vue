<template>
  <!-- 会话页 -->
  <div class="dialogue">
    <!-- 会话页左边 -->
    <div class="dialogue__left">
      <!-- 列表栏头部组件 -->
      <ListBarHead headTitle="会话列表" headNumber="共10条会话"></ListBarHead>
      <!-- 列表栏搜索组件 -->
      <ListBarSearch></ListBarSearch>
      <!-- 列表栏列表 -->
      <div class="dialogue-list">
        <el-scrollbar>
          <DialogueListItem
            v-for="(item, index) in dialogueData"
            :key="index"
            :dialogueData="item"
          ></DialogueListItem>
        </el-scrollbar>
      </div>
    </div>
    <!-- 会话页右边 -->
    <div class="dialogue__right">
      <ChatBar></ChatBar>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Dialogue",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["friendList", "groupList"]),
    dialogueData() {
      let data = [...this.friendList, ...this.groupList];
      return data;
    }
  },
  created() {},
  methods: {}
};
</script>
<style lang="scss">
// 会话页样式
.dialogue {
  width: 100%;
  height: 100%;
  display: flex;
  // 会话页左边
  .dialogue__left {
    width: 250px;
    height: 100%;
    background: #6e6f8d;
    display: flex;
    flex-direction: column;
    .dialogue-list {
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
  .dialogue__right {
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

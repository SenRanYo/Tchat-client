<template>
  <!-- 会话页 -->
  <div class="dialogue">
    <!-- 会话页左边 -->
    <div class="dialogue__left">
      <!-- 列表栏头部组件 -->
      <ListHead
        headTitle="会话列表"
        :headNumber="`共${dialogueList.length}个会话`"
      ></ListHead>
      <!-- 列表栏搜索组件 -->
      <ListBarSearch></ListBarSearch>
      <!-- 列表栏列表 -->
      <div class="dialogue-list">
        <el-scrollbar>
          <div class="hint" v-if="dialogueList.length < 1">
            <p>还没有会话内容,快去找人聊天吧</p>
          </div>
          <DialogueListItem
            v-for="(item, index) in dialogueList"
            :key="index"
            :dialogueData="item"
          ></DialogueListItem>
        </el-scrollbar>
      </div>
    </div>
    <!-- 会话页右边 -->
    <div class="dialogue__right">
      <DialogueChat></DialogueChat>
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
    dialogueList() {
      let data = [...this.friendList, ...this.groupList];
      let dialogueData = data.filter(function(obj) {
        return obj.is_dialogue == true;
      });
      return dialogueData.sort(function(a, b) {
        return b.send_time > a.send_time ? 1 : -1;
      });
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

<template>
  <div class="friend">
    <div class="friend-list">
      <ChatListHead
        title="好友列表"
        :hint="`共${friendList.length}个好友`"
      ></ChatListHead>
      <SearchLinkman></SearchLinkman>
      <div class="friend-list__content">
        <ChatList :itemData="friendList"></ChatList>
      </div>
    </div>
    <ChatBar></ChatBar>
    <InfoBar></InfoBar>
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
  // 会话列表
  .friend-list {
    width: 250px;
    height: 100%;
    background-color: #6e6f8d;
    display: flex;
    flex-direction: column;
    // 会话列表内容
    .friend-list__content {
      height: calc(100% - 100px);
      cursor: default;
    }
  }
}
</style>

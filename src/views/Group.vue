<template>
  <div class="group">
    <div class="group-list">
      <ChatListHead
        title="群聊列表"
        :hint="`共${groupList.length}个群聊`"
      ></ChatListHead>
      <SearchLinkman></SearchLinkman>
      <div class="group-list__content">
        <ChatList :itemData="groupList"></ChatList>
      </div>
    </div>
    <ChatBar></ChatBar>
    <InfoBar></InfoBar>
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
  // 会话列表
  .group-list {
    width: 250px;
    height: 100%;
    background-color: #6e6f8d;
    display: flex;
    flex-direction: column;
    // 会话列表内容
    .group-list__content {
      height: calc(100% - 100px);
      cursor: default;
    }
  }
}
</style>

<!--
 * @Author: 聊天栏组件
 * @Date: 2020-02-27 11:16:23
 * @LastEditTime: 2020-03-01 09:19:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\components\dialogue-chat\dialogue-chat.vue
 -->
<template>
  <!-- 会话聊天 -->
  <div class="dialogue-chat" v-if="!objectIsEmpty(dialogueInfo)">
    <!-- 会话聊天顶部 -->
    <div class="dialogue-chat__head">
      <!-- 左侧内容容器 -->
      <div class="left-container">
        <!-- 名称 -->
        <p class="name">{{ dialogueInfo.name }}</p>
      </div>
      <!-- 右侧内容容器 -->
      <div class="right-container">
        <!-- 删除会话按钮 -->
        <eva-icon
          class="button"
          title="删除当前会话"
          name="close-outline"
          fill="#ADADAF"
          @click="deleteDialogueHandle"
        ></eva-icon>
      </div>
    </div>
    <!-- 会话聊天主体 -->
    <div class="dialogue-chat__main">
      <el-scrollbar tag="ul" class="scrollbar">
        <DialogueChatRecord
          v-for="(item, index) in chatMessageRecord"
          :key="index"
          :recordData="item"
        ></DialogueChatRecord
      ></el-scrollbar>
    </div>
    <!-- 会话聊天底部 -->
    <div class="dialogue-chat__footer">
      <DialogueChatInput></DialogueChatInput>
    </div>
  </div>
</template>

<script>
import Mixin from "../../mixins/index";
import { mapGetters } from "vuex";
export default {
  name: "DialogueChat",
  data() {
    return {};
  },
  mixins: [Mixin],
  computed: {
    ...mapGetters(["dialogueInfo", "chatMessageRecord", "userInfo"])
  },
  methods: {
    // 删除会话
    deleteDialogueHandle() {
      console.log(this.chatMessageRecord);
    },
    setScrollBottom(target) {
      if (!target) throw new Error("target is not existed");
      let el = document.documentElement.querySelector(target);
      if (el) {
        el.scrollTop = el.scrollHeight;
      }
    }
  },
  watch: {
    chatMessageRecord: {
      deep: true,
      handler: function() {
        this.$nextTick(() => {
          this.setScrollBottom(".scrollbar .el-scrollbar__wrap");
        });
      }
    }
  }
};
</script>

<style lang="scss">
// 会话聊天样式
.dialogue-chat {
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  // 会话聊天顶部样式
  .dialogue-chat__head {
    width: 100%;
    height: 50px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // 用户名样式
    .left-container {
      display: flex;
      .name {
        font-size: 16px;
      }
    }
    // 按钮样式
    .right-container {
      display: flex;
      .button {
        width: 28px;
        height: 28px;
        margin: 0 5px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &:hover {
          background-color: #e5e5e5;
        }
      }
    }
  }
  // 会话聊天主体样式
  .dialogue-chat__main {
    width: 100%;
    height: calc(100% - 210px);
    // 列表滚动栏样式
    .el-scrollbar {
      height: 100%;
      .el-scrollbar__wrap {
        overflow-x: hidden;
        // user-select: none;
        cursor: default;
      }
    }
  }
  // 会话聊天底部样式
  .dialogue-chat__footer {
    width: 100%;
    height: 160px;
    display: flex;
    flex-direction: column;
  }
}
</style>

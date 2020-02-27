<!--
 * @Author: 会话输入框
 * @Date: 2020-02-27 12:09:57
 * @LastEditTime: 2020-02-27 19:09:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\components\dialogue-chat-input\dialogue-chat-input.vue
 -->
<template>
  <div class="dialogue-chat-input">
    <div class="dialogue-chat-input__head">
      <Emoji class="button" @selectEmoji="insertEmoji"></Emoji>
      <eva-icon class="button" name="image-outline" fill="#84869D"></eva-icon>
      <eva-icon
        class="button"
        name="folder-add-outline"
        fill="#84869D"
      ></eva-icon>
    </div>
    <div class="dialogue-chat-input__main">
      <el-scrollbar>
        <el-input
          type="textarea"
          ref="sendInput"
          resize="none"
          autosize
          placeholder="请输入聊天内容"
          v-model="inputValue"
          @keydown.native="enterSendHandle"
        >
          ></el-input
        >
      </el-scrollbar>
    </div>
    <div class="dialogue-chat-input__footer">
      <el-button
        type="primary"
        size="small"
        :disabled="checkValue"
        @click="sendMessageHandle"
      >
        发送(Enter)
      </el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "DialogueChatInput",
  data() {
    return {
      inputValue: ""
    };
  },
  computed: {
    ...mapGetters(["dialogueInfo"]),
    checkValue() {
      return !this.inputValue.trim();
    }
  },
  methods: {
    // 映射Actions
    ...mapActions(["sendFriendMessage", "sendGroupMessage"]),
    // 插入Emoji
    insertEmoji(emoji) {
      let elInput = this.$refs.sendInput.$refs.textarea;
      let startPos = elInput.selectionStart;
      let endPos = elInput.selectionEnd;
      if (startPos === undefined || endPos === undefined) return;
      let txt = elInput.value;
      let result = txt.substring(0, startPos) + emoji + txt.substring(endPos);
      elInput.value = result;
      elInput.focus();
      elInput.selectionStart = startPos + emoji.length;
      elInput.selectionEnd = startPos + emoji.length;
      this.inputValue = result;
    },
    // 发送消息处理
    sendMessageHandle() {
      // 好友消息
      if (this.dialogueInfo.dialogue_type == "friend") {
        let params = {
          friendId: this.dialogueInfo._id,
          messageType: "text",
          content: this.inputValue
        };
        this.sendFriendMessage(params);
      }
      // 群聊消息
      if (this.dialogueInfo.dialogue_type == "group") {
        let params = {
          groupId: this.dialogueInfo._id,
          messageType: "text",
          content: this.inputValue
        };
        this.sendGroupMessage(params);
      }
    },
    // 回车发送消息
    enterSendHandle(event) {
      if (event.key === "Enter" && !event.shiftKey && !this.checkValue) {
        this.sendMessageHandle();
        event.preventDefault();
      } else if (this.checkValue && event.key === "Enter" && !event.shiftKey) {
        this.$message.closeAll();
        this.$message({
          showClose: true,
          message: "请输入消息内容!",
          type: "warning",
          duration: 2000
        });
        event.preventDefault();
      }
    }
  }
};
</script>

<style lang="scss">
// 会话输入框样式
.dialogue-chat-input {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #eee;
  // 会话输入框顶部样式
  .dialogue-chat-input__head {
    width: 100%;
    height: 36px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    .button {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 5px;
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        background-color: #e5e5e5;
      }
    }
  }
  // 会话输入框样式
  .dialogue-chat-input__main {
    width: 100%;
    height: 73px;
    // 修改列表滚动栏样式
    .el-scrollbar {
      height: 73px;
      .el-scrollbar__wrap {
        overflow-x: hidden;
        user-select: none;
        cursor: default;
      }
    }
    // 修改输入框样式
    .el-textarea__inner {
      border: none;
      min-height: 73px !important;
      overflow: hidden;
    }
  }
  // 会话输入框底部样式
  .dialogue-chat-input__footer {
    width: 100%;
    height: 50px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>

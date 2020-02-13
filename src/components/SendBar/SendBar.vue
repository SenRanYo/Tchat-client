<template>
  <div class="send-bar">
    <div class="send-bar__top">
      <Emoji class="send-bar__top__btn" @selectEmoji="insertEmoji"></Emoji>
      <eva-icon
        class="send-bar__top__btn"
        name="image-outline"
        fill="#84869D"
      ></eva-icon>
      <eva-icon
        class="send-bar__top__btn"
        name="folder-add-outline"
        fill="#84869D"
      ></eva-icon>
    </div>
    <div class="send-bar__bottom">
      <el-scrollbar
        class="send-bar__scrollbar"
        wrapClass="send-bar__scrollbar__wrap"
      >
        <el-input
          type="textarea"
          ref="sendInput"
          resize="none"
          autosize
          placeholder="请输入聊天内容"
          v-model="sendContent"
        >
          ></el-input
        >
      </el-scrollbar>
      <el-button
        class="send-bar__send-bten"
        type="primary"
        size="small"
        @click="sendHandle"
        >发送(Enter)</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "SendBar",
  data() {
    return {
      sendContent: ""
    };
  },
  methods: {
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
      this.sendContent = result;
    },
    // 发送消息
    sendHandle() {
      console.log("发送消息");
    },
    // 回车发送消息
    enterSendHandle() {
      console.log("回车发送消息");
    }
  }
};
</script>

<style lang="scss">
// 发送栏
.send-bar {
  width: 100%;
  height: 160px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #eee;
  // 发送栏顶部
  .send-bar__top {
    height: 36px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    .send-bar__top__btn {
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
  // 发送栏底部
  .send-bar__bottom {
    height: 124px;
    position: relative;
    .send-bar__scrollbar {
      height: 72px;
      .send-bar__scrollbar__wrap {
        overflow-x: hidden;
        .el-textarea__inner {
          border: none;
          min-height: 72px !important;
          overflow: hidden;
        }
      }
    }
    .send-bar__send-bten {
      position: absolute;
      right: 10px;
      bottom: 10px;
    }
  }
}
</style>

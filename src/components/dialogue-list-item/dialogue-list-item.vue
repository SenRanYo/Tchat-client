<!--
 * @Author: 会话列表项组件
 * @Date: 2020-02-25 11:09:47
 * @LastEditTime: 2020-02-26 00:03:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\components\DialogueListBar.vue
 -->
<template>
  <div
    :class="
      dialogueData._id == dialogueId
        ? 'dialogue-list-item dialogue-list-item--select'
        : 'dialogue-list-item'
    "
    @click="clickDialogueHandle(dialogueData._id)"
  >
    <!-- item左边 -->
    <div class="item__left">
      <!-- 好友头像 -->
      <UserAvatar
        v-if="dialogueData.dialogue_type == 'friend'"
        :src="dialogueData.avatar"
        :name="dialogueData.name"
        :status="dialogueData.online_status"
        :type="dialogueData.type"
      ></UserAvatar>
      <!-- 群聊头像 -->
      <el-avatar
        v-if="dialogueData.dialogue_type == 'group'"
        :src="dialogueData.avatar"
        :size="40"
      >
        <span>{{ dialogueData.name }}</span>
      </el-avatar>
    </div>
    <!-- item右边 -->
    <div class="item__right">
      <!-- item右边顶部 -->
      <div class="item__right__top">
        <!-- 名称 -->
        <span class="name" :title="dialogueData.name">{{
          dialogueData.name
        }}</span>
        <!-- 时间 -->
        <span class="time">
          <!-- 需要对时间格式化 -->
          <!-- {{ dialogueData.send_time ? dialogueData.send_time : dialogueData.chat_time }} -->
          20:00
        </span>
      </div>
      <!-- 如果为好友会话 -->
      <div
        class="item__right__bottom"
        v-if="dialogueData.dialogue_type == 'friend'"
      >
        <!-- 消息内容 如果为文本-->
        <span
          class="message"
          :title="
            verifyMessage(dialogueData.message_type, dialogueData.content)
          "
        >
          <!-- {{ dialogueData.content }} -->
          {{ verifyMessage(dialogueData.message_type, dialogueData.content) }}
        </span>
        <!-- 未读条数 -->
        <span class="unread" v-if="dialogueData.unread > 0">
          {{ dialogueData.unread > 99 ? "99+" : dialogueData.unread }}
        </span>
      </div>
      <!-- 如果为群聊会话 -->
      <div
        class="item__right__bottom"
        v-if="dialogueData.dialogue_type == 'group'"
      >
        <span v-if="dialogueData.dialogue_type == 'friend'" class="message">
          {{ dialogueData.content }}
        </span>
        <span
          v-if="dialogueData.dialogue_type == 'group'"
          class="message"
        ></span>
      </div>
      <!-- 删除会话按钮 -->
      <div
        class="item__delete"
        title="删除会话"
        @click.stop="
          deleteDialogueHandle(dialogueData._id, dialogueData.dialogue_type)
        "
      >
        <eva-icon name="close" fill="#efefef"></eva-icon>
      </div>
    </div>
    <!-- hover显示动画元素 -->
    <span class="bottom"></span>
    <span class="right"></span>
    <span class="top"></span>
    <span class="left"></span>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "DialogueListItem",
  props: {
    dialogueData: Object
  },
  data() {
    return {};
  },
  computed: {
    // 映射Getters
    ...mapGetters(["dialogueId"]),
    // 效验消息类型
    verifyMessage() {
      return (type, value) => {
        if (type == undefined || type == null || type == "") {
          return "暂无消息内容";
        } else if (type == "text") {
          return value;
        } else if (type == "image") {
          return "[图片]";
        } else if (type == "share") {
          return "[分享]";
        } else if (type == "voice") {
          return "[语音消息]";
        } else if (type == "system") {
          return "[系统消息]";
        }
      };
    }
  },
  methods: {
    // 映射Mutations
    ...mapMutations(["setDialogueId"]),
    // 点击会话处理
    clickDialogueHandle(id) {
      this.setDialogueId(id);
    },
    // 删除会话处理
    deleteDialogueHandle(id, type) {
      console.log(id, type);
    }
  }
};
</script>

<style lang="scss">
.dialogue-list-item {
  width: 250px;
  height: 50px;
  padding: 5px 10px;
  display: flex;
  position: relative;
  // item左边
  .item__left {
    width: 40px;
    height: 100%;
  }
  // item右边
  .item__right {
    width: calc(100% - 40px);
    height: 100%;
    padding-left: 10px;
    line-height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #cfcfcf;
    .item__right__top {
      width: 100%;
      height: 20px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .name {
        color: #fff;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .time {
        padding-left: 5px;
        flex-shrink: 0;
      }
    }
    .item__right__bottom {
      width: 100%;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .message {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .unread {
        flex-shrink: 0;
        background-color: #f56c6c;
        border-radius: 10px;
        color: #fff;
        display: inline-block;
        font-size: 12px;
        height: 20px;
        line-height: 20px;
        padding: 0 6px;
        text-align: center;
        white-space: nowrap;
      }
    }
    // 删除会话按钮样式
    .item__delete {
      display: none;
      position: absolute;
      top: 0;
      right: 0;
      width: 50px;
      height: 50px;
      background-color: #6ac383;
      cursor: pointer;
      .eva-hover {
        display: flex;
      }
      &:hover {
        .eva-hover > svg {
          fill: #f56c6c;
        }
      }
    }
  }
  & > span {
    position: absolute;
    background-color: #6ac383;
    transition: transform 0.4s ease;
  }
  // 列表项hover效果
  &:hover .item__delete {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bottom,
  .top {
    height: 2px;
    left: 0;
    right: 0;
    transform: scaleX(0);
  }
  .left,
  .right {
    width: 2px;
    top: 0;
    bottom: 0;
    transform: scaleY(0);
  }
  .bottom {
    bottom: 0;
    transform-origin: bottom right;
  }
  &:hover .bottom {
    transform-origin: bottom left;
    transform: scaleX(1);
  }
  .right {
    right: 0;
    transform-origin: top right;
  }
  &:hover .right {
    transform-origin: bottom right;
    transform: scaleY(1);
  }
  .top {
    top: 0;
    transform-origin: top left;
  }
  &:hover .top {
    transform-origin: top right;
    transform: scaleX(1);
  }
  .left {
    left: 0;
    transform-origin: bottom left;
  }
  &:hover .left {
    transform-origin: top left;
    transform: scaleY(1);
  }
}
// item激活样式
.dialogue-list-item--select {
  background-color: #6ac383;
}
</style>

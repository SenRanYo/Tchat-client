<!--
 * @Author: 会话聊天记录项组件
 * @Date: 2020-02-27 12:11:25
 * @LastEditTime: 2020-02-28 16:12:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\components\dialogue-chat-record\dialogue-chat-record.vue
 -->
<template>
  <li
    class="dialogue-chat-record"
    :class="[checkOwner(dialogueInfo.dialogue_type) ? 'owner' : 'other']"
  >
    <div class="record-item__avatar">
      <!-- 好友聊天头像 -->
      <UserAvatar
        v-if="dialogueInfo.dialogue_type == 'friend'"
        :src="checkOwner ? recordData.creator_avatar : recordData.friend_avatar"
        :name="checkOwner ? recordData.creator_name : recordData.friend_name"
        :status="recordData.online_status"
        :type="checkOwner ? recordData.creator_type : recordData.friend_type"
      ></UserAvatar>
      <!-- 群聊聊天头像 -->
      <UserAvatar
        v-if="dialogueInfo.dialogue_type == 'group'"
        :src="recordData.user_avatar"
        :name="recordData.user_name"
        :type="recordData.user_type"
      ></UserAvatar>
    </div>
    <div class="record-item__content">
      <div class="content-top">
        <!-- 好友聊天 -->
        <span v-if="dialogueInfo.dialogue_type == 'friend'">
          {{ recordData.creator_name }}
        </span>
        <!-- 群聊聊天 -->
        <span v-if="dialogueInfo.dialogue_type == 'group'">
          {{ recordData.user_name }}
        </span>
        <span>{{ recordData.send_time | formatListDate }}</span>
      </div>
      <div class="content-bottom">
        <pre>{{ recordData.content }}</pre>
      </div>
    </div>
  </li>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DialogueChatRecord",
  props: {
    recordData: {
      type: Object
    }
  },
  computed: {
    // 映射Getters
    ...mapGetters(["userInfo", "dialogueInfo"]),
    // 验证是否是自己的信息
    checkOwner() {
      return function(type) {
        if (type == "friend") {
          return this.userInfo._id == this.recordData.creator_id;
        }
        if (type == "group") {
          return this.userInfo._id == this.recordData.user_id;
        }
      };
    }
  }
};
</script>
<style lang="scss">
// 记录项样式
.dialogue-chat-record {
  padding: 10px;
  display: flex;
  // 头像
  .record-item__avatar {
    width: 40px;
    height: 40px;
  }
  // 内容样式
  .record-item__content {
    max-width: 80%;
    display: flex;
    flex-direction: column;
    // 内容顶部
    .content-top {
      display: flex;
      align-items: center;
      line-height: 20px;
    }
    // 内容底部
    .content-bottom {
      margin-top: 2px;
      padding: 8px;
      border-radius: 3px;
      color: black;
      background-color: #eeeeee;
      position: relative;
    }
  }
}
// 记录项自己的样式
.owner {
  flex-direction: row-reverse;
  // 内容样式
  .record-item__content {
    padding-right: 10px;
    align-items: flex-end;
    // 内容顶部
    .content-top {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      span:first-child {
        margin-left: 10px;
        // margin-right: 0px !important;
      }
    }
    // 内容底部
    .content-bottom {
      background-color: #6ac383;
      color: #fff;
      // 三角形伪元素
      &:before {
        content: "";
        width: 0px;
        height: 0px;
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-left: 6px solid #6ac383;
        position: absolute;
        top: 5px;
        right: -6px;
      }
    }
  }
}
// 记录项其他人的样式
.other {
  flex-direction: row;
  // 内容样式
  .record-item__content {
    padding-left: 10px;
    align-items: flex-start;
    // 内容顶部
    .content-top {
      color: #999;
      span:first-child {
        margin-right: 10px;
      }
    }
    // 三角形伪元素
    .content-bottom:before {
      content: "";
      width: 0px;
      height: 0px;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 6px solid #eeeeee;
      position: absolute;
      top: 5px;
      left: -6px;
    }
  }
}
</style>

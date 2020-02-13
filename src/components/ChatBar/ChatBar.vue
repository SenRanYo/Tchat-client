<template>
  <!-- 聊天栏 -->
  <div class="chat-bar">
    <!-- 聊天栏头部 -->
    <div class="chat-bar__head">
      <p class="chat-bar__head__title">飞翔的企鹅</p>
    </div>
    <!-- 聊天记录 -->
    <div class="chat-bar__record">
      <el-scrollbar tag="ul">
        <li class="chat-bar__record__item chat-bar__record__item--own">
          <UserAvatar
            :src="userInfo.avatar"
            :content="userInfo.name"
            :status="userInfo.onlineStatus"
            :userType="userInfo.type"
            :size="40"
          ></UserAvatar>
          <div class="chat-bar__record__item__content">
            <p class="chat-bar__record__item__content__top">
              <span>飞翔的企鹅</span>
              <span>20:00</span>
            </p>
            <div class="chat-bar__record__item__content__bottom">
              <pre>
开发进度怎么样了开发进度怎么样了开发进度怎么样了开发进度怎么样了</pre
              >
            </div>
          </div>
        </li>
        <li class="chat-bar__record__item chat-bar__record__item--other">
          <UserAvatar
            :src="userInfo.avatar"
            :content="userInfo.name"
            :status="userInfo.onlineStatus"
            :userType="userInfo.type"
            :size="40"
          ></UserAvatar>
          <div class="chat-bar__record__item__content">
            <p class="chat-bar__record__item__content__top">
              <span>飞翔的企鹅</span>
              <span>20:00</span>
            </p>
            <div class="chat-bar__record__item__content__bottom">
              <pre>
开发进度怎么样了开发进度怎么样了开发进度怎么样了开发进度怎么样了开发进度怎么样了</pre
              >
            </div>
          </div>
        </li>
        <li class="chat-bar__record__item chat-bar__record__item--own">
          <UserAvatar
            :src="userInfo.avatar"
            :content="userInfo.name"
            :status="userInfo.onlineStatus"
            :userType="userInfo.type"
            :size="40"
          ></UserAvatar>
          <div class="chat-bar__record__item__content">
            <p class="chat-bar__record__item__content__top">
              <span>飞翔的企鹅</span>
              <span>20:00</span>
            </p>
            <div class="chat-bar__record__item__content__bottom">
              <pre>
开发进度怎么样了开发进度怎么样了开发进度怎么样了开发进度怎么样了</pre
              >
            </div>
          </div>
        </li>
        <li class="chat-bar__record__item chat-bar__record__item--other">
          <UserAvatar
            :src="userInfo.avatar"
            :content="userInfo.name"
            :status="userInfo.onlineStatus"
            :userType="userInfo.type"
            :size="40"
          ></UserAvatar>
          <div class="chat-bar__record__item__content">
            <p class="chat-bar__record__item__content__top">
              <span>飞翔的企鹅</span>
              <span>20:00</span>
            </p>
            <div class="chat-bar__record__item__content__bottom">
              <pre>
开发进度怎么样了开发进度怎么样了开发进度怎么样了开发进度怎么样了开发进度怎么样了</pre
              >
            </div>
          </div>
        </li>
        <li class="chat-bar__record__item chat-bar__record__item--own">
          <UserAvatar
            :src="userInfo.avatar"
            :content="userInfo.name"
            :status="userInfo.onlineStatus"
            :userType="userInfo.type"
            :size="40"
          ></UserAvatar>
          <div class="chat-bar__record__item__content">
            <p class="chat-bar__record__item__content__top">
              <span>飞翔的企鹅</span>
              <span>20:00</span>
            </p>
            <div class="chat-bar__record__item__content__bottom">
              <pre>
开发进度怎么样了开发进度怎么样了开发进度怎么样了开发进度怎么样了</pre
              >
            </div>
          </div>
        </li>
        <li class="chat-bar__record__item chat-bar__record__item--other">
          <UserAvatar
            :src="userInfo.avatar"
            :content="userInfo.name"
            :status="userInfo.onlineStatus"
            :userType="userInfo.type"
            :size="40"
          ></UserAvatar>
          <div class="chat-bar__record__item__content">
            <p class="chat-bar__record__item__content__top">
              <span>飞翔的企鹅</span>
              <span>20:00</span>
            </p>
            <div class="chat-bar__record__item__content__bottom">
              <pre>
开发进度怎么样了开发进度怎么样了开发进度怎么样了开发进度怎么样了开发进度怎么样了</pre
              >
            </div>
          </div>
        </li>
        <li class="chat-bar__record__item chat-bar__record__item--own">
          <UserAvatar
            :src="userInfo.avatar"
            :content="userInfo.name"
            :status="userInfo.onlineStatus"
            :userType="userInfo.type"
            :size="40"
          ></UserAvatar>
          <div class="chat-bar__record__item__content">
            <p class="chat-bar__record__item__content__top">
              <span>飞翔的企鹅</span>
              <span>20:00</span>
            </p>
            <div class="chat-bar__record__item__content__bottom">
              <pre>
开发进度怎么样了开发进度怎么样了开发进度怎么样了开发进度怎么样了</pre
              >
            </div>
          </div>
        </li>
        <li class="chat-bar__record__item chat-bar__record__item--other">
          <UserAvatar
            :src="userInfo.avatar"
            :content="userInfo.name"
            :status="userInfo.onlineStatus"
            :userType="userInfo.type"
            :size="40"
          ></UserAvatar>
          <div class="chat-bar__record__item__content">
            <p class="chat-bar__record__item__content__top">
              <span>飞翔的企鹅</span>
              <span>20:00</span>
            </p>
            <div class="chat-bar__record__item__content__bottom">
              <pre>
开发进度怎么样了开发进度怎么样了开发进度怎么样了开发进度怎么样了开发进度怎么样了</pre
              >
            </div>
          </div>
        </li>
        <li class="chat-bar__record__item chat-bar__record__item--own">
          <UserAvatar
            :src="userInfo.avatar"
            :content="userInfo.name"
            :status="userInfo.onlineStatus"
            :userType="userInfo.type"
            :size="40"
          ></UserAvatar>
          <div class="chat-bar__record__item__content">
            <p class="chat-bar__record__item__content__top">
              <span>飞翔的企鹅</span>
              <span>20:00</span>
            </p>
            <div class="chat-bar__record__item__content__bottom">
              <pre>
开发进度怎么样了开发进度怎么样了开发进度怎么样了开发进度怎么样了</pre
              >
            </div>
          </div>
        </li>
        <li class="chat-bar__record__item chat-bar__record__item--other">
          <UserAvatar
            :src="userInfo.avatar"
            :content="userInfo.name"
            :status="userInfo.onlineStatus"
            :userType="userInfo.type"
            :size="40"
          ></UserAvatar>
          <div class="chat-bar__record__item__content">
            <p class="chat-bar__record__item__content__top">
              <span>飞翔的企鹅</span>
              <span>20:00</span>
            </p>
            <div class="chat-bar__record__item__content__bottom">
              <pre>
开发进度怎么样了开发进度怎么样了开发进度怎么样了开发进度怎么样了开发进度怎么样了</pre
              >
            </div>
          </div>
        </li>
        <li class="chat-bar__record__item chat-bar__record__item--own">
          <UserAvatar
            :src="userInfo.avatar"
            :content="userInfo.name"
            :status="userInfo.onlineStatus"
            :userType="userInfo.type"
            :size="40"
          ></UserAvatar>
          <div class="chat-bar__record__item__content">
            <p class="chat-bar__record__item__content__top">
              <span>飞翔的企鹅</span>
              <span>20:00</span>
            </p>
            <div class="chat-bar__record__item__content__bottom">
              <pre>
开发进度怎么样了开发进度怎么样了开发进度怎么样了开发进度怎么样了</pre
              >
            </div>
          </div>
        </li>
        <li class="chat-bar__record__item chat-bar__record__item--other">
          <UserAvatar
            :src="userInfo.avatar"
            :content="userInfo.name"
            :status="userInfo.onlineStatus"
            :userType="userInfo.type"
            :size="40"
          ></UserAvatar>
          <div class="chat-bar__record__item__content">
            <p class="chat-bar__record__item__content__top">
              <span>飞翔的企鹅</span>
              <span>20:00</span>
            </p>
            <div class="chat-bar__record__item__content__bottom">
              <pre>
开发进度怎么样了开发进度怎么样了开发进度怎么样了开发进度怎么样了开发进度怎么样了</pre
              >
            </div>
          </div>
        </li>
      </el-scrollbar>
    </div>
    <SendBar></SendBar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ChatBar",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["userInfo"])
  }
};
</script>

<style lang="scss">
// 会话栏
.chat-bar {
  width: calc(100% - 500px);
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  // 会话栏头部
  .chat-bar__head {
    height: 50px;
    padding: 0 10px;
    border-bottom: 1px solid #eee;
    align-items: center;
    .chat-bar__head__title {
      color: black;
      font-size: 16px;
      line-height: 50px;
    }
  }
  // 会话栏主体内容
  .chat-bar__record {
    height: calc(100% - 210px);
    .el-scrollbar {
      height: 100%;
      .el-scrollbar__wrap {
        overflow-x: hidden;
      }
    }
    // 会话记录单项
    .chat-bar__record__item {
      padding: 10px;
      display: flex;
      cursor: default;
      .user-avatar{
        width: 40px;
        height: 40px;
      }
      // 会话记录单项右边
      .chat-bar__record__item__content {
        max-width: 80%;
        display: flex;
        flex-direction: column;
        // 会话记录单项右边底部
        .chat-bar__record__item__content__bottom {
          padding: 8px;
          border-radius: 3px;
          color: black;
          background-color: #eeeeee;
          position: relative;
        }
      }
    }
    // 会话记录单项 [自己的消息]
    .chat-bar__record__item--own {
      // 会话记录单项右边顶部
      .chat-bar__record__item__content__top {
        color: #999;
        span:first-child {
          margin-right: 10px;
        }
      }
      // 会话记录单项右边
      .chat-bar__record__item__content {
        padding-left: 10px;
      }
      // 信息背景三角形
      .chat-bar__record__item__content__bottom:before {
        content: "";
        width: 0px;
        height: 0px;
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-right: 6px solid #eeeeee;
        position: absolute;
        top: 6px;
        left: -6px;
      }
    }
    // 会话记录单项 [其他人的消息]
    .chat-bar__record__item--other {
      flex-direction: row-reverse;
      .chat-bar__record__item__content__top {
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        span:first-child {
          margin-left: 10px;
          margin-right: 0px !important;
        }
      }
      // 会话记录单项左边
      .chat-bar__record__item__content {
        padding-right: 10px;
        align-items: flex-end;
      }
      .chat-bar__record__item__content__bottom:before {
        content: "";
        width: 0px;
        height: 0px;
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-left: 6px solid #eeeeee;
        position: absolute;
        top: 6px;
        right: -6px;
      }
    }
  }
}
</style>

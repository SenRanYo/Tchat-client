<template>
  <div class="chat-list">
    <el-scrollbar tag="ul">
      <!-- 没有数据时显示 -->
      <li class="chat-list_tips" v-if="itemData.length == 0">
        <span>{{ tips }}</span>
      </li>
      <li
        class="chat-list__item"
        :class="{ 'chat-list__item--select': index == select }"
        @click="electHandle(index)"
        v-for="(item, index) in itemData"
        :key="index"
      >
        <!-- 头像 -->
        <div
          class="chat-list__item__avatar"
          :class="{
            'chat-list__item__avatar--grayscale': item.onlineStatus == false
          }"
        >
          <el-avatar :src="item.avatar" :size="40">
            <span>{{ item.name }}</span>
          </el-avatar>
          <eva-icon
            v-if="item.userType == 1"
            class="avatar-icon"
            name="github-outline"
            fill="#6AC383"
            width="12px"
            height="12px"
          ></eva-icon>
        </div>
        <!-- 如果为好友 -->
        <div class="chat-list__item__content" v-if="item.type == 'friend'">
          <div class="item__content__top">
            <p>
              <span v-if="item.remarkName">{{ item.remarkName }}</span>
              <span>{{
                item.remarkName ? "(" + item.name + ")" : item.name
              }}</span>
            </p>
            <span>{{ item.facility }}</span>
          </div>
          <div class="item__content__bottom">
            <span>{{ item.signature }}</span>
          </div>
        </div>
        <!-- 如果为群聊 -->
        <div class="chat-list__item__content" v-if="item.type == 'group'">
          <div class="item__content__top">
            <p>
              <span>{{ item.name }}</span>
            </p>
            <span>{{ item.users.length }}</span>
          </div>
          <div class="item__content__bottom">
            <span>{{ item.bulletin }}</span>
          </div>
        </div>
        <!-- 如果为好友会话 -->
        <div
          class="chat-list__item__content"
          v-if="item.type == 'friendDialogue'"
        >
          <div class="item__content__top">
            <!-- 如果好友设置了备注 -->
            <p>
              <span v-if="item.remarkName">{{ item.remarkName }}</span>
              <span v-if="!item.remarkName">{{ item.name }}</span>
            </p>
            <span>{{ item.time }}</span>
          </div>
          <div class="item__content__bottom">
            <span>{{ item.lastMessage }}</span>
          </div>
          <!-- 删除会话 -->
          <div class="item__delete">
            <eva-icon
              name="close"
              fill="#efefef"
              @click.stop="deleteHandle"
            ></eva-icon>
          </div>
        </div>
        <!-- 如果为群聊会话 -->
        <div
          class="chat-list__item__content"
          v-if="item.type == 'groupDialogue'"
        >
          <div class="item__content__top">
            <p>
              <span>{{ item.name }}</span>
            </p>
            <span>{{ item.time }}</span>
          </div>
          <div class="item__content__bottom">
            <span>{{ item.lastMessage }}</span>
          </div>
          <!-- 删除会话 -->
          <div class="item__delete">
            <eva-icon
              name="close"
              fill="#efefef"
              @click.stop="deleteHandle"
            ></eva-icon>
          </div>
        </div>
        <!-- hover显示动画元素 -->
        <span class="bottom"></span>
        <span class="right"></span>
        <span class="top"></span>
        <span class="left"></span></li
    ></el-scrollbar>
  </div>
</template>

<script>
export default {
  name: "ChatList",
  props: {
    itemData: {
      type: Array
    },
    tips: {
      type: String,
      default: "暂无内容"
    }
  },
  data() {
    return {
      select: Number
    };
  },
  methods: {
    // 点击处理
    electHandle(index) {
      this.select = index;
    },
    // 删除会话
    deleteHandle() {
      console.log("删除会话");
    }
  }
};
</script>

<style lang="scss">
// 列表样式
.chat-list {
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  .el-scrollbar {
    height: 100%;
    .el-scrollbar__wrap {
      overflow-x: hidden;
    }
  }
  // tips样式
  .chat-list_tips {
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #efefef;
  }
  // 列表项
  .chat-list__item {
    width: 250px;
    height: 50px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    transition: background-color 0.3s ease-in-out;
    position: relative;
    // 联系人头像
    .chat-list__item__avatar {
      width: 40px;
      height: 40px;
      margin-right: 10px;
      position: relative;
      // 用户类型Icon
      .avatar-icon {
        position: absolute;
        top: 0px;
        right: 0px;
        padding: 1px;
        display: flex;
        border-radius: 50%;
        background-color: #fff;
      }
    }
    // 用户在线状态样式
    .chat-list__item__avatar--grayscale {
      filter: grayscale(100%);
    }
    // 联系人信息
    .chat-list__item__content {
      width: calc(100% - 50px);
      height: 100%;
      line-height: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .item__content__top {
        width: 100%;
        height: 20px;
        color: #efefef;
        display: flex;
        align-items: center;
        justify-content: space-between;
        p {
          overflow: hidden;
          white-space: nowrap;
          span:last-child {
            color: #cfcfcf;
          }
        }
        & > span:last-child {
          padding-left: 5px;
        }
      }
      .item__content__bottom {
        width: 180px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #cfcfcf;
      }
    }
    // 删除会话
    .item__delete {
      display: none;
      position: absolute;
      top: 0;
      right: 0;
      width: 50px;
      height: 50px;
      background-color: #6ac383;
      cursor: pointer;
    }
    // hover效果
    &:hover .item__delete {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    // item选中样式
    &.chat-list__item--select {
      background-color: #6ac383;
    }
    // item hover效果
    & > span {
      position: absolute;
      background-color: #6ac383;
      transition: transform 0.5s ease;
    }
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

  .chat-list__item:hover .bottom {
    transform-origin: bottom left;
    transform: scaleX(1);
  }

  .right {
    right: 0;
    transform-origin: top right;
  }

  .chat-list__item:hover .right {
    transform-origin: bottom right;
    transform: scaleY(1);
  }

  .top {
    top: 0;
    transform-origin: top left;
  }

  .chat-list__item:hover .top {
    transform-origin: top right;
    transform: scaleX(1);
  }

  .left {
    left: 0;
    transform-origin: bottom left;
  }

  .chat-list__item:hover .left {
    transform-origin: top left;
    transform: scaleY(1);
  }
}
</style>

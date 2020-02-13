<template>
  <div class="dialogue-list">
    <div class="dialogue-list__head">
      <p class="dialogue-list__title">对话列表</p>
      <p class="dialogue-list__tips">共10个会话</p>
    </div>
    <SearchLinkman></SearchLinkman>
    <div class="dialogue-list__content">
      <el-scrollbar tag="ul">
        <li
          class="dialogue-list__item"
          :class="{ 'dialogue-list__item--select': index == select }"
          @click="selectHandle(index)"
          v-for="(item, index) in 20"
          :key="index"
        >
          <UserAvatar
            :src="userInfo.avatar"
            :content="userInfo.name"
            :status="userInfo.onlineStatus"
            :userType="userInfo.type"
            :size="40"
          ></UserAvatar>
          <div class="dialogue-list__item__right">
            <p class="dialogue-list__item__right__top">
              <span>飞翔的企鹅</span>
              <span>20:00</span>
            </p>
            <p class="dialogue-list__item__right__bottom">
              开发进度怎么样了？
            </p>
          </div>
          <!-- 删除会话按钮 -->
          <eva-icon
            class="dialogue-list__item_delete"
            name="close"
            fill="#efefef"
            @click="deleteHandle"
          ></eva-icon>
          <!-- hover显示动画元素 -->
          <span class="bottom"></span>
          <span class="right"></span>
          <span class="top"></span>
          <span class="left"></span>
        </li>
      </el-scrollbar>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "DialogueList",
  data() {
    return {
      select: Number
    };
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  methods: {
    // 点击处理
    selectHandle(index) {
      this.select = index;
    },
    // 删除会话出来
    deleteHandle() {
      console.log("删除");
    }
  }
};
</script>
<style lang="scss">
// 会话列表
.dialogue-list {
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #6e6f8d;
  // 会话列表头部
  .dialogue-list__head {
    height: 50px;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // 标题
    .dialogue-list__title {
      color: #efefef;
    }
    // 提示
    .dialogue-list__tips {
      color: #cfcfcf;
    }
  }
  // 会话列表内容
  .dialogue-list__content {
    height: calc(100% - 100px);
    cursor: default;
    .el-scrollbar {
      height: 100%;
      .el-scrollbar__wrap {
        overflow-x: hidden;
      }
    }
    // 会话列表内容单项
    .dialogue-list__item {
      height: 50px;
      padding: 0 10px;
      display: flex;
      align-items: center;
      position: relative;
      transition: background-color 0.3s ease-in-out;
      // 单项右边边内容
      .dialogue-list__item__right {
        flex: 1;
        padding-left: 10px;
        // 单项左边顶部内容
        .dialogue-list__item__right__top {
          color: #efefef;
          display: flex;
          align-items: center;
          justify-content: space-between;
          span:first-child {
            width: 135px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        // 单项左边底部内容
        .dialogue-list__item__right__bottom {
          width: 180px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #cfcfcf;
        }
      }
      // 会话列表删除按钮
      .dialogue-list__item_delete {
        display: none;
        position: absolute;
        top: 0;
        right: 0;
        width: 50px;
        height: 50px;
        background-color: #6ac383;
        cursor: pointer;
      }
    }
    // 会话列表内容单项hover显示删除会话按钮
    .dialogue-list__item:hover .dialogue-list__item_delete {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    // 会话列表内容单项选中样式
    .dialogue-list__item--select {
      background-color: #6ac383;
    }
    // 会话列表内容单项hover效果
    .dialogue-list__item > span {
      position: absolute;
      background-color: #6ac383;
      transition: transform 0.5s ease;
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

    .dialogue-list__item:hover .bottom {
      transform-origin: bottom left;
      transform: scaleX(1);
    }

    .right {
      right: 0;
      transform-origin: top right;
    }

    .dialogue-list__item:hover .right {
      transform-origin: bottom right;
      transform: scaleY(1);
    }

    .top {
      top: 0;
      transform-origin: top left;
    }

    .dialogue-list__item:hover .top {
      transform-origin: top right;
      transform: scaleX(1);
    }

    .left {
      left: 0;
      transform-origin: bottom left;
    }

    .dialogue-list__item:hover .left {
      transform-origin: top left;
      transform: scaleY(1);
    }
  }
}
</style>

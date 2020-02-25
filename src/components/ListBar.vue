<template>
  <!-- 列表组件 -->
  <div class="list-bar">
    <!-- 列表组件顶部 -->
    <div class="list-bar__top">
      <!-- 列表顶部组件 -->
      <ListBarHead
        :headTitle="listBarTitle"
        :headNumber="listBarNumber"
      ></ListBarHead>
    </div>
    <!-- 列表组件中间 -->
    <div class="list-bar__center">
      <ListBarSearch></ListBarSearch>
    </div>
    <!-- 列表组件底部 -->
    <div class="list-bar__bottom">
      <el-scrollbar tag="ul">
        <!-- 列表没有数据时显示的提示 -->
        <li class="list-bar-hint" v-if="listIsEmpty">
          <p>{{ listBarHint }}</p>
        </li>
        <!-- 列表项 -->
        <li v-for="(item, index) in listBarData" :key="index">
          <div
            class="list-item"
            :class="{ 'list-item--select': item._id == selectId }"
            @click="selectItemHandle(item._id, index)"
          >
            <!-- 列表项左边 -->
            <div class="list-item__left">
              <UserAvatar
                :src="item.avatar"
                :name="item.name"
                :status="item.online_status"
                :type="item.type"
              ></UserAvatar>
            </div>
            <!-- 列表项右边 如果为好友列表 -->
            <div class="list-item__right" v-if="listBarType == 'friend'">
              <!-- 列表项右边顶部 -->
              <div class="list-item__right__top">
                <p>
                  <!-- 如果设置了备注就显示备注 -->
                  <span v-if="item.remarkName">{{ item.remarkName }}</span>
                  <!-- 有备注好友名加上括号反之没有 -->
                  <span>{{
                    item.remarkName ? "(" + item.name + ")" : item.name
                  }}</span>
                </p>
                <!-- 在线设备 -->
                <p>{{ item.facility }}</p>
              </div>
              <!-- 列表项右边底部 -->
              <div class="list-item__right__bottom">
                <p>{{ item.signature }}</p>
              </div>
            </div>
            <!-- 列表项右边 如果为群聊列表 -->
            <div class="list-item__right" v-if="listBarType == 'group'">
              <!-- 列表项右边顶部 -->
              <div class="list-item__right__top">
                <!-- 群名称 -->
                <p>{{ item.name }}</p>
                <!-- 人数 -->
                <p>{{ item.user_sum }}</p>
              </div>
              <!-- 列表项右边底部 -->
              <div class="list-item__right__bottom">
                <!-- 群公告 -->
                <p>{{ item.introduce ? item.introduce : "暂无群介绍" }}</p>
              </div>
            </div>
            <!-- 列表项右边 如果为会话列表 -->
            <div class="list-item__right" v-if="listBarType == 'dialogue'">
              <!-- 列表项右边顶部 -->
              <div class="list-item__right__top">
                <!-- 名称 -->
                <p>{{ item.name }}</p>
                <!-- 时间 -->
                <p>{{ item.time }}</p>
              </div>
              <!-- 列表项右边底部 -->
              <div class="list-item__right__bottom">
                <!-- 群公告 -->
                <p>{{ item.lastMessage }}</p>
              </div>
              <!-- 删除会话按钮 -->
              <div class="list-item__delete">
                <eva-icon
                  name="close"
                  fill="#efefef"
                  @click="deleteItemHandle(item._id)"
                ></eva-icon>
              </div>
            </div>
            <!-- hover显示动画元素 -->
            <span class="bottom"></span>
            <span class="right"></span>
            <span class="top"></span>
            <span class="left"></span>
          </div>
        </li>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ListBar",
  props: {
    listBarType: {
      type: String
    }
  },
  data() {
    return {
      selectId: -1
    };
  },
  computed: {
    ...mapGetters([
      "userInfo",
      "friendList",
      "groupList",
      "friendInfo",
      "groupInfo",
      "friendMessage"
    ]),
    // 列表是否为空
    listIsEmpty() {
      return Object.keys(this.listBarData).length == 0 || undefined || null;
    },
    // 列表标题
    listBarTitle() {
      let title;
      if (this.listBarType === "friend") {
        title = "好友列表";
      }
      if (this.listBarType === "group") {
        title = "群聊列表";
      }
      if (this.listBarType === "dialogue") {
        title = "会话列表";
      }
      return title;
    },
    // 列表为空时显示的内容
    listBarHint() {
      let hint;
      if (this.listBarType === "friend") {
        hint = "还没有好友,快去添加吧";
      }
      if (this.listBarType === "group") {
        hint = "还没有群聊,快去添加吧";
      }
      if (this.listBarType === "dialogue") {
        hint = "还没有会话,快去找人聊天吧";
      }
      return hint;
    },
    // 列表项数量
    listBarNumber() {
      let str;
      if (this.listBarType === "friend") {
        str = `共${this.listBarData.length}个好友`;
      }
      if (this.listBarType === "group") {
        str = `共${this.listBarData.length}个群聊`;
      }
      if (this.listBarType === "dialogue") {
        str = `共${this.listBarData.length}个会话`;
      }
      return str;
    },
    // 列表内容数据
    listBarData() {
      let data = [];
      if (this.listBarType === "friend") {
        data = this.friendList;
      }
      if (this.listBarType === "group") {
        data = this.groupList;
      }
      if (this.listBarType === "dialogue") {
        let allDialogue = [...this.friendList, ...this.groupList];
        data = allDialogue;
      }
      return data;
    }
  },
  methods: {
    // actions函数映射
    ...mapActions([
      "getFriendInfo",
      "getGroupInfo",
      "getDialogueRecord",
      "getFriendInfo"
    ]),
    // 点击处理
    selectItemHandle(id, index) {
      // 如果为好友列表
      if (this.listBarType === "friend" && this.selectId !== id) {
        this.selectId = this.friendList[index]._id;
        this.getFriendInfo({ friendId: id });
      }
      // 如果为群聊列表
      if (this.listBarType === "group" && this.selectId !== id) {
        this.selectId = this.groupList[index]._id;
        this.getGroupInfo({ groupId: id });
      }
      // 如果为会话列表
      if (this.listBarType === "dialogue" && this.selectId !== id) {
        this.selectId = this.listBarData[index]._id;
      }
    },
    // 删除处理
    deleteItemHandle(id) {
      console.log(id);
    }
  },
  watch: {
    $route: function(to) {
      if (to.name === "dialogue") {
        if (to.params.type === "friend") {
          for (const key in this.dialogueList) {
            if (this.dialogueList[key].friendId == to.params.id) {
              this.selectId = this.dialogueList[key]._id;
              break;
            }
          }
        }
        if (to.params.type === "group") {
          for (const key in this.dialogueList) {
            console.log(this.dialogueList[key].groupId);
            console.log(to.params.id);
            if (this.dialogueList[key].groupId == to.params.id) {
              this.selectId = this.dialogueList[key]._id;
              console.log(this.selectId);
              console.log(to.params.id);
              // break;
            }
          }
        }
      }
    }
  }
};
</script>

<style lang="scss">
// 列表栏组件样式
.list-bar {
  width: 250px;
  height: 100%;
  background: #6e6f8d;
  display: flex;
  flex-direction: column;
  // 列表栏组件顶部样式
  .list-bar__top {
    width: 250px;
    height: 50px;
  }
  // 列表栏组件中间样式
  .list-bar__center {
    width: 250px;
    height: 50px;
  }
  // 列表栏组件底部样式
  .list-bar__bottom {
    width: 250px;
    height: calc(100% - 100px);
    // 列表滚动栏样式
    .el-scrollbar {
      height: 100%;
      .el-scrollbar__wrap {
        overflow-x: hidden;
        user-select: none;
        cursor: default;
      }
    }
    // 无数据提示样式
    .list-bar-hint {
      width: 250px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: #efefef;
    }
    // 列表项样式
    .list-item {
      width: 250px;
      height: 50px;
      padding: 0 10px;
      line-height: 20px;
      display: flex;
      align-items: center;
      position: relative;
      // 列表项右边
      .list-item__right {
        width: calc(100% - 40px);
        height: 100%;
        padding-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        // 列表项右边顶部
        .list-item__right__top {
          width: 100%;
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
          p:last-child {
            padding-left: 5px;
            flex-shrink: 0;
          }
        }
        // 列表项右边底部
        .list-item__right__bottom {
          width: 180px;
          p {
            color: #cfcfcf;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        // 删除会话按钮
        .list-item__delete {
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
        }
      }
      // 列表项hover效果
      &:hover .list-item__delete {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      & > span {
        position: absolute;
        background-color: #6ac383;
        transition: transform 0.4s ease;
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
    // 列表项激活样式
    .list-item--select {
      background-color: #6ac383;
    }
  }
}
</style>

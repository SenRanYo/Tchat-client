<template>
  <div class="info-bar">
    <!-- title -->
    <div class="info-bar__head">
      <p class="info-bar__title">用户资料</p>
    </div>
    <!-- 主体内容 -->
    <div class="info-bar__main">
      <Avatar
        :src="userInfo.avatar"
        :content="userInfo.name"
        :status="userInfo.onlineStatus"
        :userType="userInfo.type"
        :size="100"
      ></Avatar>
      <p class="info-bar__user-name">
        {{ userInfo.name }}
      </p>
      <p class="info-bar__user-signature">
        {{ userInfo.signature }}
      </p>
      <div class="info-bar__title-wrap"><span>详细资料</span></div>
      <div class="info-bar__between">
        <span>性别</span><span>{{ userInfo.sex }}</span>
      </div>
      <div class="info-bar__between">
        <span>年龄</span><span>{{ userInfo.age }}</span>
      </div>
      <div class="info-bar__between">
        <span>QQ</span>
        <el-tooltip
          :content="userInfo.qq"
          placement="bottom"
          effect="light"
          :open-delay="500"
        >
          <span>{{ userInfo.qq }}</span>
        </el-tooltip>
      </div>
      <div class="info-bar__between">
        <span>微信</span>
        <el-tooltip
          :content="userInfo.weixin"
          placement="bottom"
          effect="light"
          :open-delay="500"
        >
          <span>{{ userInfo.weixin }}</span>
        </el-tooltip>
      </div>
      <div class="info-bar__between">
        <span>邮箱</span>

        <el-tooltip
          :content="userInfo.email"
          placement="bottom"
          effect="light"
          :open-delay="500"
        >
          <span>{{ userInfo.email }}</span>
        </el-tooltip>
      </div>
      <div class="info-bar__between">
        <span>Github</span>
        <el-tooltip
          :content="userInfo.github"
          placement="bottom"
          effect="light"
          :open-delay="500"
        >
          <span>{{ userInfo.github }}</span>
        </el-tooltip>
      </div>
      <div class="info-bar__title-wrap"><span>用户操作</span></div>
    </div>
    <div class="info-bar__footer"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ChatBarInfo",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["userInfo"])
  }
};
</script>

<style lang="scss">
// 信息栏
.info-bar2 {
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #eee;
  background-color: #f3f2f0;
  // 信息栏头部
  .info-bar__head {
    height: 50px;
    color: #efefef;
    background-color: #6ac383;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  // 信息栏主体内容
  .info-bar__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0px;
    cursor: default;
    .info-bar__user-name {
      color: black;
      font-weight: bold;
      line-height: 30px;
    }
    .info-bar__user-signature {
      color: #999;
      padding: 0 10px;
      line-height: 20px;
    }
    .info-bar__title-wrap {
      width: 100%;
      height: 30px;
      line-height: 30px;
      padding: 0 10px;
      margin-top: 20px;
      margin-bottom: 10px;
      border-left: 5px solid #6ac383;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      background-color: #e5e4e2;
    }
    .info-bar__between {
      width: 100%;
      height: 30px;
      padding: 0 10px;
      color: #999;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span:first-child {
        margin-right: 5px;
      }
      span:last-child {
        max-width: 170px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>

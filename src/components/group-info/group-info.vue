<!--
 * @Author: 群聊信息
 * @Date: 2020-02-26 22:31:56
 * @LastEditTime: 2020-02-29 19:12:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\components\group-info\group-info.vue
 -->
<template>
  <div class="friend-info" v-if="!objectIsEmpty(groupInfo)">
    <!-- 头部内容 -->
    <div class="friend-info__head">
      <!-- 群名称 -->
      <div class="left-container">
        <p class="name">{{ groupInfo.name }}</p>
      </div>
      <!-- 操作按钮 -->
      <div class="right-container">
        <eva-icon
          class="button"
          title="退出群聊"
          name="person-delete-outline"
          fill="#ADADAF"
          @click="quitGroupHandle"
        ></eva-icon>
        <eva-icon
          class="button"
          title="修改群昵称"
          name="edit-2-outline"
          fill="#ADADAF"
          @click="editNicknameHandle"
        ></eva-icon>
        <eva-icon
          class="button"
          title="分享此群聊"
          name="share"
          fill="#ADADAF"
          @click="shareGroupHandle"
        ></eva-icon>
      </div>
    </div>
    <!-- 主体内容 -->
    <div class="friend-info__main">
      <!-- 左边内容 -->
      <div class="left-container">
        <!-- 用户头像 -->
        <el-image
          :src="groupInfo.avatar"
          :preview-src-list="[groupInfo.avatar]"
          fit="cover"
        >
        </el-image>
      </div>
      <!-- 右边内容 -->
      <div class="right-container">
        <p class="name">{{ groupInfo.name }}</p>
        <p class="signature" :title="groupInfo.signature">
          {{ groupInfo.signature }}
        </p>
        <div class="detail-container">
          <p>
            备注：{{ groupInfo.remark_name ? groupInfo.remark_name : "未设置" }}
          </p>
          <p>性别：{{ groupInfo.sex }}</p>
          <p>年龄：{{ groupInfo.age }}</p>
          <p>QQ：{{ groupInfo.qq }}</p>
          <p>微信：{{ groupInfo.weixin }}</p>
          <p>邮箱：{{ groupInfo.email }}</p>
          <p>Github：{{ groupInfo.github }}</p>
        </div>
        <div class="button-container">
          <el-button
            type="primary"
            size="small"
            round
            @click="groupDialogueHandle"
            >发送消息</el-button
          >
        </div>
      </div>
    </div>
    <div class="friend-info__footer">
      <el-divider>功能待添加</el-divider>
    </div>
  </div>
</template>

<script>
import Mixin from "../../mixins/index";
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "GroupInfo",
  data() {
    return {};
  },
  mixins: [Mixin],
  computed: {
    // 映射Getters
    ...mapGetters(["groupInfo"])
  },
  methods: {
    // 映射Actions
    ...mapActions(["addGroupDialogue"]),
    // 映射Mutations
    ...mapMutations(["setDialogueInfo"]),
    // 提出群聊
    quitGroupHandle() {
      console.log("提出群聊");
    },
    // 修改群昵称
    editNicknameHandle() {
      console.log("修改群昵称");
    },
    // 分享群聊
    shareGroupHandle() {
      console.log("分享群聊");
    },
    // 群聊会话处理
    groupDialogueHandle() {
      this.addGroupDialogue(this.groupInfo._id);
    }
  }
};
</script>

<style lang="scss">
// 好友信息样式
.friend-info {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  cursor: default;
  // 头部样式
  .friend-info__head {
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
  // 主体样式
  .friend-info__main {
    padding: 20px;
    flex: 1;
    display: flex;
    // 主体样式左边
    .left-container {
      width: 260px;
      height: 100%;
      border-radius: 5px;
      transition: box-shadow 0.2s ease-in-out;
      // 修改img样式
      .el-image,
      .el-image__inner {
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
      &:hover {
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      }
    }
    .right-container {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 10px 30px;
      .name {
        font-size: 18px;
        line-height: 30px;
        font-weight: bold;
      }
      .signature {
        color: #adadad;
        line-height: 20px;
        max-height: 60px;
        margin-bottom: 10px;
        overflow: hidden;
      }
      .detail-container {
        line-height: 25px;
        color: #858585;
      }
      .button-container {
        flex: 1;
        display: flex;
        align-items: flex-end;
        justify-content: space-around;
      }
    }
    // 主体样式右边
  }
  // 底部
  .friend-info__footer {
    width: 100%;
    height: 350px;
    display: flex;
  }
}
</style>

<!--
 * @Author: 好友信息
 * @Date: 2020-02-25 21:48:40
 * @LastEditTime: 2020-03-02 11:25:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\components\friend-info\friend-info.vue
 -->
<template>
  <div class="friend-info" v-if="!objectIsEmpty(friendInfo)">
    <div class="friend-info__head">
      <div class="left-container">
        <p class="name">{{ friendInfo.name }}</p>
      </div>
      <div class="right-container">
        <eva-icon
          class="button"
          title="删除好友"
          name="person-delete-outline"
          fill="#ADADAF"
          @click="deleteFriendHandle"
        ></eva-icon>
        <eva-icon
          class="button"
          title="修改备注"
          name="edit-2-outline"
          fill="#ADADAF"
          @click="editRemarkNameHandle"
        ></eva-icon>
        <eva-icon
          class="button"
          title="分享此好友"
          name="share"
          fill="#ADADAF"
          @click="shareFriendHandle"
        ></eva-icon>
      </div>
    </div>
    <div class="friend-info__main">
      <div class="left-container">
        <!-- 用户头像 -->
        <el-image
          :src="friendInfo.avatar"
          :preview-src-list="[friendInfo.avatar]"
          fit="cover"
        >
        </el-image>
      </div>
      <div class="right-container">
        <p class="name">{{ friendInfo.name }}</p>
        <p class="signature" :title="friendInfo.signature">
          {{ friendInfo.signature }}
        </p>
        <div class="detail-container">
          <p>
            备注：{{
              friendInfo.remark_name ? friendInfo.remark_name : "未设置"
            }}
          </p>
          <p>性别：{{ friendInfo.sex }}</p>
          <p>年龄：{{ friendInfo.age }}</p>
          <p>QQ：{{ friendInfo.qq }}</p>
          <p>微信：{{ friendInfo.weixin }}</p>
          <p>邮箱：{{ friendInfo.email }}</p>
          <p>Github：{{ friendInfo.github }}</p>
        </div>
        <div class="button-container">
          <el-button
            type="primary"
            size="small"
            round
            @click="friendDialogueHandle"
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
  name: "FriendInfo",
  data() {
    return {};
  },
  mixins: [Mixin],
  computed: {
    // 映射Getters
    ...mapGetters(["friendInfo"])
  },
  methods: {
    // 映射Actions
    ...mapActions(["addFriendDialogue"]),
    // 映射Mutations
    ...mapMutations(["setDialogueInfo"]),
    // 删除好友
    deleteFriendHandle() {
      console.log("删除好友处理");
    },
    // 修改备注
    editRemarkNameHandle() {
      console.log("修改备注处理");
    },
    // 分享好友
    shareFriendHandle() {
      console.log("分享好友处理");
    },
    // 好友会话处理
    friendDialogueHandle() {
      this.addFriendDialogue(this.friendInfo._id);
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

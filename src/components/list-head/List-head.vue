<template>
  <div class="list-bar_head">
    <div class="list-bar_head__left">
      <p class="list-title">{{ headTitle }}</p>
      <p class="list-hint">{{ headNumber }}</p>
    </div>
    <div class="list-bar_head__right">
      <el-dropdown
        trigger="click"
        size="small"
        placement="bottom"
        @command="handleCommand"
      >
        <eva-icon name="plus" animation="zoom" fill="#cfcfcf"></eva-icon>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="addFriend">添加好友</el-dropdown-item>
          <el-dropdown-item command="addGroup">添加群聊</el-dropdown-item>
          <el-dropdown-item command="createGroup">创建群聊</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!-- 添加好友弹框 -->
    <el-dialog
      custom-class="dialog"
      title="添加好友"
      :close-on-click-modal="false"
      :before-close="addFriendDialogClose"
      :visible.sync="dialogAddFriendVisible"
    >
      <!-- 搜索框容器 -->
      <div class="search-wrap">
        <el-input
          size="small"
          placeholder="请输入用户名"
          v-model="searchUserName"
        >
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-button type="success" size="small" @click="searchUserHandle">
          搜索
        </el-button>
      </div>
      <!-- 搜索内容 -->
      <div class="content-wrap">
        <el-scrollbar tag="ul">
          <p v-if="searchUserList.length == 0" class="content-hint">暂无内容</p>
          <li
            class="list-item"
            v-for="(item, index) in searchUserList"
            :key="index"
          >
            <div class="list-item__top">
              <Avatar
                :src="item.avatar"
                :content="item.name"
                :userType="item.userType"
                :isStatus="false"
                :size="80"
              ></Avatar>
              <div class="list-item__top__content">
                <p class="name">
                  <span>
                    {{ item.name.slice(0, item.name.indexOf(userKeyWord)) }}
                  </span>
                  <span class="name-key-word--red">
                    {{
                      item.name.slice(
                        item.name.indexOf(userKeyWord),
                        item.name.indexOf(userKeyWord) + userKeyWord.length
                      )
                    }}
                  </span>
                  <span>
                    {{
                      item.name.substr(
                        item.name.indexOf(userKeyWord) + userKeyWord.length
                      )
                    }}
                  </span>
                </p>
                <p class="sex-age">
                  <span>性别：{{ item.sex }}</span
                  ><span>年龄：{{ item.age }}</span>
                </p>
                <p class="signature">{{ item.signature }}</p>
              </div>
            </div>
            <div class="list-item__bottom">
              <el-button
                type="success"
                size="mini"
                @click="addFriendHandle(item._id)"
              >
                加好友
              </el-button>
            </div>
          </li>
        </el-scrollbar>
      </div>
    </el-dialog>

    <!-- 添加群聊弹框 -->
    <el-dialog
      custom-class="dialog"
      title="添加群聊"
      :close-on-click-modal="false"
      :before-close="addGroupDialogClose"
      :visible.sync="dialogAddGroupVisible"
    >
      <!-- 搜索框容器 -->
      <div class="search-wrap">
        <el-input
          size="small"
          placeholder="请输入群聊名"
          v-model="searchGroupName"
        >
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-button type="success" size="small" @click="searchGroupHandle">
          搜索
        </el-button>
      </div>
      <!-- 搜索内容 -->
      <div class="content-wrap">
        <el-scrollbar tag="ul">
          <p v-if="userListData.length == 0" class="content-hint">暂无内容</p>
          <li
            class="list-item"
            v-for="(item, index) in groupListData"
            :key="index"
          >
            <div class="list-item__top">
              <Avatar
                :src="item.avatar"
                :content="item.name"
                :userType="item.userType"
                :isStatus="false"
                :size="80"
              ></Avatar>
              <div class="list-item__top__content">
                <!-- 群名 -->
                <p class="name">
                  <span>
                    {{ item.name.slice(0, item.name.indexOf(groupKeyWord)) }}
                  </span>
                  <span class="name-key-word--red">
                    {{
                      item.name.slice(
                        item.name.indexOf(groupKeyWord),
                        item.name.indexOf(groupKeyWord) + groupKeyWord.length
                      )
                    }}
                  </span>
                  <span>
                    {{
                      item.name.substr(
                        item.name.indexOf(groupKeyWord) + groupKeyWord.length
                      )
                    }}
                  </span>
                </p>
                <!-- 创建人-人数 -->
                <p>
                  <span>创建者：{{ item.creator_name }}</span
                  ><span>人数：{{ item.user_sum }}</span>
                </p>
                <!-- 群介绍 -->
                <p class="signature">{{ item.introduce }}</p>
              </div>
            </div>
            <div class="list-item__bottom">
              <el-button
                type="success"
                size="mini"
                @click="addGroupHandle(item._id)"
              >
                加入群聊
              </el-button>
              <el-button
                type="success"
                size="mini"
                @click="addGroupNotice(item._id)"
              >
                测试发布公告
              </el-button>
            </div>
          </li>
        </el-scrollbar>
      </div>
    </el-dialog>

    <!-- 创建群聊弹框 -->
    <el-dialog
      custom-class="dialog"
      title="创建群聊"
      :close-on-click-modal="false"
      :before-close="createGroupDialogClose"
      :visible.sync="dialogCreateGroupVisible"
    >
      <el-form ref="form" :model="groupForm" label-width="80px">
        <el-form-item label="群聊名称" size="small">
          <el-input v-model="groupForm.name"></el-input>
        </el-form-item>
        <el-form-item label="群聊公告" size="small">
          <el-input
            type="textarea"
            resize="none"
            :autosize="{ minRows: 3, maxRows: 6 }"
            v-model="groupForm.bulletin"
          ></el-input>
        </el-form-item>
        <el-form-item label="群聊介绍" size="small">
          <el-input
            type="textarea"
            resize="none"
            :autosize="{ minRows: 3, maxRows: 6 }"
            v-model="groupForm.introduce"
          ></el-input>
        </el-form-item>
        <el-form-item class="btn-wrap">
          <el-button type="warning" @click="closeCreateGroupDialog">
            取消
          </el-button>
          <el-button type="success" @click="createGroupHandle">
            创建
          </el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ListHead",
  props: {
    headTitle: {
      type: String
    },
    headNumber: {
      type: String
    }
  },
  data() {
    return {
      dialogAddFriendVisible: false,
      dialogAddGroupVisible: false,
      dialogCreateGroupVisible: false,
      searchUserName: "",
      userKeyWord: "",
      userListData: [],
      searchGroupName: "",
      groupKeyWord: "",
      groupListData: [],
      groupForm: {
        name: "",
        introduce: ""
      }
    };
  },
  computed: {
    ...mapGetters(["searchUserList"])
  },
  watch: {
    searchUserList: val => {
      console.log(val);
    }
  },
  methods: {
    // 映射Actions
    ...mapActions(["addFriend", "createGroup", "searchUser"]),
    // 下拉菜单点击处理
    handleCommand(command) {
      switch (command) {
        case "addFriend":
          this.dialogAddFriendVisible = true;
          break;
        case "addGroup":
          this.dialogAddGroupVisible = true;
          break;
        case "createGroup":
          this.dialogAddGroupVisible = true;
          break;
      }
    },
    // 搜索用户处理
    searchUserHandle() {
      this.userKeyWord = this.searchUserName;
      this.searchUser(this.searchUserName);
    },
    // 添加好友处理
    addFriendHandle(id) {
      this.addFriend(id);
    },
    // 添加好友弹窗关闭处理
    addFriendDialogClose(done) {
      this.searchUserName = "";
      this.userKeyWord = "";
      this.userListData = [];
      done();
    },
    // 搜索群聊处理
    searchGroupHandle() {
      this.groupKeyWord = this.searchGroupName;
      this.socket.emit(
        "searchGroup",
        { name: this.searchGroupName },
        response => {
          if (!response.result) {
            this.$alert(response.message, "提示");
          }
          this.groupListData = response.data;
          console.log(response);
        }
      );
    },
    // 添加群聊处理
    addGroupHandle(id) {
      this.socket.emit("addGroup", { groupId: id }, response => {
        // this.$alert(response.message, "提示");
        console.log(response);
      });
    },
    // 测试添加公告
    addGroupNotice(id) {
      this.socket.emit(
        "addGroupNotice",
        { groupId: id, notice: "测试数据" },
        response => {
          console.log(response);
        }
      );
    },
    // 添加群聊弹窗关闭处理
    addGroupDialogClose(done) {
      this.searchGroupName = "";
      this.groupKeyWord = "";
      this.groupListData = [];
      done();
    },
    // 创建群聊处理
    createGroupHandle() {
      this.createGroup(this.groupForm);
    },
    // 创建群聊弹窗关闭处理
    createGroupDialogClose(done) {
      this.groupForm.name = "";
      this.groupForm.introduce = "";
      done();
    },
    // 关闭创建群聊弹窗
    closeCreateGroupDialog() {
      this.groupForm.name = "";
      this.groupForm.introduce = "";
      this.dialogCreateGroupVisible = false;
    }
  }
};
</script>

<style lang="scss">
// 列表顶部样式
.list-bar_head {
  width: 250px;
  height: 50px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: default;
  // 标题
  .list-title {
    color: #efefef;
  }
  // 提示
  .list-hint {
    color: #cfcfcf;
  }
  .list-bar_head__right {
    cursor: pointer;
  }
}
// 修改下拉菜单样式
.el-dropdown-menu {
  background-color: #434157 !important;
  border: none !important;
  .el-dropdown-menu__item {
    color: #efefef !important;
  }
  .el-dropdown-menu__item:hover {
    background-color: #6ac383 !important;
    color: #efefef !important;
  }
  .popper__arrow {
    top: -6px;
    margin-right: 3px;
    border-top-width: 0;
    border-bottom-color: #434157 !important;
  }
  .popper__arrow::after {
    top: 1px;
    margin-left: -6px;
    border-top-width: 0;
    border-bottom-color: #434157 !important;
  }
}
// 添加好友弹框样式
.dialog {
  width: 600px !important;
  .el-dialog__header {
    padding: 10px;
    background-color: #6ac383;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .el-dialog__title {
      color: #fff;
      font-size: 14px;
    }
    .el-dialog__headerbtn {
      position: static;
      .el-dialog__close {
        color: #fff;
      }
    }
  }
  // 弹框内容
  .el-dialog__body {
    width: 100%;
    height: 500px;
    padding: 10px;
    .search-wrap {
      width: 300px;
      height: 40px;
      margin: auto;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      .el-input {
        margin-right: 10px;
      }
    }
    .content-wrap {
      width: 100%;
      height: calc(100% - 50px);
      .content-hint {
        width: 100%;
        font-size: 18px;
        text-align: center;
        margin-top: 20px;
        color: #cfcfcf;
      }
      .el-scrollbar {
        height: 100%;
        .el-scrollbar__wrap {
          overflow-x: hidden;
          .el-scrollbar__view {
            display: flex;
            flex-wrap: wrap;
          }
        }
      }
      .list-item {
        width: 270px;
        height: 150px;
        margin: 10px;
        padding: 10px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        .list-item__top {
          width: 100%;
          height: calc(100% - 23px);
          overflow: hidden;
          display: flex;
          .avatar {
            width: 80px;
            height: 80px;
          }
          .list-item__top__content {
            width: 100%;
            height: 100%;
            display: flex;
            padding-left: 10px;
            flex-direction: column;
            p {
              line-height: 20px;
            }
            .name {
              color: black;
              display: flex;
              align-items: center;
              .name-key-word--red {
                color: red;
              }
            }
            .sex-age {
              color: #999;
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
            .signature {
              overflow: hidden;
            }
          }
        }
        .list-item__bottom {
          width: 100%;
          height: 28px;
          margin-top: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
  // 创建群聊按钮容器样式
  .btn-wrap {
    .el-form-item__content {
      margin-left: 0 !important;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>

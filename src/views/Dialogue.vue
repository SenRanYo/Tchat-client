<template>
  <div class="dialogue">
    <div class="dialogue-list">
      <div class="dialogue-list__head">
        <p class="list-title">会话列表</p>
        <p class="list-tips">共10个会话</p>
      </div>
      <SearchLinkman></SearchLinkman>
      <div class="dialogue-list__content">
        <ChatList :itemData="friendListData"></ChatList>
      </div>
    </div>
    <ChatBar></ChatBar>
    <InfoBar></InfoBar>
  </div>
</template>
<script>
export default {
  name: "dialogue",
  data() {
    return {
      friendListData: [
        {
          remarkName: "测试备注",
          name: "飞翔的企鹅",
          avatar:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          signature: "测试个性签名",
          onlineStatus: true,
          userType: 0,
          facility: "Chorme",
          type: "friend"
        },
        {
          remarkName: "测试备注",
          name: "飞翔的企鹅",
          avatar:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          signature: "测试个性签名",
          onlineStatus: true,
          userType: 1,
          facility: "Edge",
          type: "friend"
        }
      ],
      groupListData: [
        {
          name: "Tchat群聊",
          avatar:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          bulletin: "测试群公告",
          type: "group"
        }
      ],
      dialogueListData: [
        {
          remarkName: "",
          name: "飞翔的企鹅",
          avatar:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          signature: "测试个性签名",
          userType: 1,
          onlineStatus: true,
          time: "20:00",
          lastMessage: "测试会话列表好友消息",
          type: "friendDialogue"
        },
        {
          remarkName: "",
          name: "飞翔的企鹅",
          avatar:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          signature: "测试个性签名",
          onlineStatus: true,
          time: "20:00",
          lastMessage: "测试会话列表好友消息",
          type: "friendDialogue"
        },
        {
          name: "Tchat群聊",
          avatar:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          bulletin: "测试群公告",
          time: "20:00",
          lastMessage: "测试会话列表群聊消息",
          type: "groupDialogue"
        },
        {
          remarkName: "测试备注",
          name: "飞翔的企鹅",
          avatar:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          signature: "测试个性签名",
          onlineStatus: true,
          time: "20:00",
          lastMessage: "测试会话列表好友消息",
          type: "groupDialogue"
        },
        {
          remarkName: "测试备注",
          name: "飞翔的企鹅",
          avatar:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          signature: "测试个性签名",
          onlineStatus: true,
          time: "20:00",
          lastMessage: "测试会话列表好友消息",
          type: "friendDialogue"
        },
        {
          remarkName: "",
          name: "飞翔的企鹅",
          avatar:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          signature: "测试个性签名",
          onlineStatus: true,
          time: "20:00",
          lastMessage: "测试会话列表好友消息",
          type: "friendDialogue"
        },
        {
          name: "Tchat群聊",
          avatar:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          bulletin: "测试群公告",
          time: "20:00",
          lastMessage: "测试会话列表群聊消息",
          type: "groupDialogue"
        },
        {
          remarkName: "测试备注",
          name: "飞翔的企鹅",
          avatar:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          signature: "测试个性签名",
          onlineStatus: true,
          time: "20:00",
          lastMessage: "测试会话列表好友消息",
          type: "groupDialogue"
        },
        {
          remarkName: "测试备注",
          name: "飞翔的企鹅",
          avatar:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          signature: "测试个性签名",
          onlineStatus: true,
          time: "20:00",
          lastMessage: "测试会话列表好友消息",
          type: "friendDialogue"
        },
        {
          remarkName: "",
          name: "飞翔的企鹅",
          avatar:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          signature: "测试个性签名",
          onlineStatus: true,
          time: "20:00",
          lastMessage: "测试会话列表好友消息",
          type: "friendDialogue"
        },
        {
          name: "Tchat群聊",
          avatar:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          bulletin: "测试群公告",
          time: "20:00",
          lastMessage: "测试会话列表群聊消息",
          type: "groupDialogue"
        },
        {
          remarkName: "测试备注",
          name: "飞翔的企鹅",
          avatar:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          signature: "测试个性签名",
          onlineStatus: true,
          time: "20:00",
          lastMessage: "测试会话列表好友消息",
          type: "groupDialogue"
        },
        {
          remarkName: "测试备注",
          name: "飞翔的企鹅",
          avatar:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          signature: "测试个性签名",
          onlineStatus: true,
          time: "20:00",
          lastMessage: "测试会话列表好友消息",
          type: "friendDialogue"
        },
        {
          remarkName: "",
          name: "飞翔的企鹅",
          avatar:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          signature: "测试个性签名",
          onlineStatus: true,
          time: "20:00",
          lastMessage: "测试会话列表好友消息",
          type: "friendDialogue"
        },
        {
          name: "Tchat群聊",
          avatar:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          bulletin: "测试群公告",
          time: "20:00",
          lastMessage: "测试会话列表群聊消息",
          type: "groupDialogue"
        },
        {
          remarkName: "测试备注",
          name: "飞翔的企鹅",
          avatar:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          signature: "测试个性签名",
          onlineStatus: true,
          time: "20:00",
          lastMessage: "测试会话列表好友消息",
          type: "groupDialogue"
        },
        {
          remarkName: "测试备注",
          name: "飞翔的企鹅",
          avatar:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          signature: "测试个性签名",
          onlineStatus: true,
          time: "20:00",
          lastMessage: "测试会话列表好友消息",
          type: "friendDialogue"
        },
        {
          remarkName: "",
          name: "飞翔的企鹅",
          avatar:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          signature: "测试个性签名",
          onlineStatus: true,
          time: "20:00",
          lastMessage: "测试会话列表好友消息",
          type: "friendDialogue"
        },
        {
          name: "Tchat群聊",
          avatar:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          bulletin: "测试群公告",
          time: "20:00",
          lastMessage: "测试会话列表群聊消息",
          type: "groupDialogue"
        },
        {
          remarkName: "测试备注",
          name: "飞翔的企鹅",
          avatar:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          signature: "测试个性签名",
          onlineStatus: true,
          time: "20:00",
          lastMessage: "测试会话列表好友消息",
          type: "groupDialogue"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
// 会话页样式
.dialogue {
  width: 100%;
  height: 100%;
  display: flex;
  // 会话列表
  .dialogue-list {
    width: 250px;
    height: 100%;
    background-color: #6e6f8d;
    display: flex;
    flex-direction: column;
    // 列表头部
    .dialogue-list__head {
      height: 50px;
      padding: 0 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      // 标题
      .list-title {
        color: #efefef;
      }
      // 提示
      .list-tips {
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
    }
  }
}
</style>

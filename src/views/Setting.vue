<!--
 * @Author: your name
 * @Date: 2020-02-11 14:00:05
 * @LastEditTime: 2020-02-20 20:39:38
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\views\Setting.vue
 -->
<template>
  <div class="setting">
    <el-button type="primary" @click="clientDisconnect">
      从服务端断开连接
    </el-button>
    <el-button type="primary" @click="Disconnect">
      从客户端断开连接
    </el-button>
    <el-button type="primary" @click="testClick">
      测试数据
    </el-button>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "setting",
  computed: {
    ...mapGetters(["socket"])
  },
  methods: {
    // 测试服务端断开连接
    clientDisconnect() {
      this.socket.emit("clientDisconnect", res => {
        console.log(res);
      });
    },
    // 测试服务端断开连接
    Disconnect() {
      this.socket.disconnect();
    },
    testClick() {
      this.socket.emit("findDialogueList", res => {
        console.log(res);
      });
    }
  }
};
</script>
<style lang="scss"></style>

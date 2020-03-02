<!--
 * @Author: your name
 * @Date: 2020-02-11 14:00:05
 * @LastEditTime: 2020-03-02 01:36:04
 * @LastEditors: Please set LastEditors
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
      测试获取token数据
    </el-button>
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "setting",
  data() {
    return {
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["socket"])
  },
  methods: {
    ...mapActions(["getQiniuToken"]),
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
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
      this.getQiniuToken();
    }
  }
};
</script>
<style lang="scss">
.setting {
  width: 100%;
  height: 100%;
  background: #fff;
}
</style>

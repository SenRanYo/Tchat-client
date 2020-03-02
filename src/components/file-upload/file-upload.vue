<!--
 * @Author: 文件上传
 * @Date: 2020-03-02 10:07:51
 * @LastEditTime: 2020-03-02 17:13:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\components\file-upload\file-upload.vue
 -->
<template>
  <div class="file-upload" @click="onPickFile">
    <slot></slot>
    <input
      class="file-upload__input"
      type="file"
      ref="fileInput"
      accept="image/*"
      @change="upload"
      style="display: none"
    />
  </div>
</template>

<script>
import * as qiniu from "qiniu-js";
import Mixin from "../../mixins/upload";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "FileUpload",
  mixins: [Mixin],
  props: {
    uploadType: {
      type: String
    }
  },
  computed: { ...mapGetters(["userInfo"]) },
  methods: {
    ...mapActions(["getQiniuToken"]),
    onPickFile() {
      this.$refs.fileInput.click();
    },
    upload(event) {
      const file = event.target.files[0];
      const _this = this;
      if (this.isGtTwoMb(file.size)) {
        // 提示错误
        this.$message({
          showClose: true,
          message: "文件大小不能超过2MB",
          type: "error",
          duration: 2000
        });
        // 重置路径
        this.$refs.fileInput.value = "";
        return;
      }
      if (!this.isImage(file.name)) {
        // 提示错误
        this.$message({
          showClose: true,
          message: "请选择图片类型文件!",
          type: "error",
          duration: 2000
        });
        // 重置路径
        this.$refs.fileInput.value = "";
        return;
      }
      const fileReader = new FileReader();
      fileReader.onloadend = async e => {
        if (e.target.readyState === FileReader.DONE) {
          const token = await this.getQiniuToken();
          const observer = {
            next(res) {
              console.log("上传进度", res.total.percent);
            },
            error(err) {
              // 重置路径
              console.log("上传失败", err);
              _this.$refs.fileInput.value = "";
              return err;
            },
            complete(res) {
              // 重置路径
              console.log("http://q6iqdbhfk.bkt.clouddn.com/" + res.key);
            }
          };
          const config = { useCdnDomain: true };
          const putExtra = {
            params: { "x:type": "测试", "x:id": "23213123123" }
          };
          const key = `${this.userInfo._id}_${new Date().getTime()}_${
            file.name
          }`;
          const observable = qiniu.upload(file, key, token, putExtra, config);
          observable.subscribe(observer);
        }
      };
      fileReader.readAsArrayBuffer(file);
    }
  }
};
</script>

<style lang="scss">
.file-upload {
  display: flex;
  min-width: 30px;
  min-width: 30px;
}
</style>

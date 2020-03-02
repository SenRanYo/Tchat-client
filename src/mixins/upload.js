/*
 * @Author: your name
 * @Date: 2020-03-02 11:09:39
 * @LastEditTime: 2020-03-02 12:31:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\mixins\upload.js
 */
const uploadMixin = {
  methods: {
    // 文件是否大于2MB
    isGtTwoMb(fileSize) {
      let size = 1000 * 1024 * 2; // 2 MB
      return fileSize > size ? true : false
    },
    // 是否为图片
    isImage(str) {
      let index = str.lastIndexOf(".");
      let ext = str.substr(index + 1);
      let enumArr = ["png", "jpg", "jpeg", "bmp", "gif", "webp", "psd", "svg", "tiff"];
      return enumArr.indexOf(ext) > -1 ? true : false;
    }
  }
};
export default uploadMixin;

/*
 * @Author: 混入
 * @Date: 2020-02-27 11:48:56
 * @LastEditTime: 2020-02-27 11:51:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\mixins\index.js
 */
const ownMixin = {
  computed: {
    // 判断对象是否为空 空返回true 否者返回false
    objectIsEmpty() {
      return function(object) {
        return Object.keys(object).length == 0 ? true : false;
      };
    }
  }
};
export default ownMixin;

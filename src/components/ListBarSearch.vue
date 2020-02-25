<template>
  <!-- 列表栏搜索组件 -->
  <div class="list-bar-search">
    <el-input
      size="small"
      placeholder="搜索内容"
      prefix-icon="el-icon-search"
      clearable
      v-model="search"
    >
    </el-input>
  </div>
</template>

<script>
export default {
  name: "ListBarSearch",
  data() {
    return {
      search: ""
    };
  }
};
</script>

<style lang="scss">
// 列表栏搜索组件样式
.list-bar-search {
  width: 250px;
  height: 50px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  // 输入框样式
  .el-input__inner {
    border: 1px solid #535774;
    background: #535774;
    color: #efefef;
  }
}
</style>

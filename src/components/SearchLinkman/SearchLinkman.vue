<template>
  <div class="search-linkman">
    <el-input
      size="small"
      placeholder="请输入内容"
      prefix-icon="el-icon-search"
      v-model="input"
    >
    </el-input>
  </div>
</template>
<script>
export default {
  name: "SearchLinkman",
  data() {
    return {
      input: ""
    };
  }
};
</script>
<style lang="scss">
.search-linkman {
  height: 50px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  .search-linkman__input {
    width: 100%;
    height: 35px;
    padding: 0 15px;
    color: #cfcfcf;
    background-color: #565a77;
    border: 1px solid #999;
    border-radius: 4px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    &::placeholder {
      color: #cfcfcf;
    }
  }
  .search-linkman__input:hover {
    border-color: #6ac383;
  }
  .search-linkman__input:focus {
    outline: none;
    border-color: #6ac383;
  }
}
</style>

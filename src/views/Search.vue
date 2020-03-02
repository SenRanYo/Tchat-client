<!--
 * @Author: your name
 * @Date: 2020-03-01 21:37:44
 * @LastEditTime: 2020-03-01 21:48:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\views\Search.vue
 -->
<template>
  <div class="search-page">
    <div class="search-page__head">
      <p>搜索</p>
    </div>
    <div class="search-page__main"></div>
  </div>
</template>

<script>
export default {
  name: "Search"
};
</script>

<style lang="scss">
.search-page {
  width: 100%;
  min-width: 600px;
  height: 100%;
  display: flex;
  .search-page__head {
    width: 100%;
    height: 50px;
    line-height: 50px;
  }
}
</style>

<!--
 * @Author: your name
 * @Date: 2020-02-11 11:52:17
 * @LastEditTime: 2020-02-25 20:03:09
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\views\Home.vue
 -->
<template>
  <div class="home">
    <HomeNavigation></HomeNavigation>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Home",
  data() {
    return {};
  },
  created() {
    this.initApp();
  },
  methods: {
    ...mapActions(["initApp"])
  }
};
</script>
<style lang="scss">
.home {
  width: 90%;
  max-width: 1200px;
  height: 80%;
  overflow: hidden;
  display: flex;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>

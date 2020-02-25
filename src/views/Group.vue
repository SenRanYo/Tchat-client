<template>
  <!-- 群聊页 -->
  <div class="group">
    <div class="group__left">
      <!-- 列表组件 -->
      <ListBar listBarType="group"></ListBar>
    </div>
    <div class="group__right">
      <InfoBar infoBarType="group"></InfoBar>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Group",
  data() {
    return {
      infoBarData: {}
    };
  },
  computed: {
    ...mapGetters(["groupList"])
  },
  created() {
    // console.log(this.groupList);
  },
  methods: {
    // 获取群聊信息
    getGroupInfo(data) {
      this.infoBarData = data;
      console.log(data);
    }
  }
};
</script>
<style lang="scss">
// 群聊页样式
.group {
  width: 100%;
  height: 100%;
  display: flex;
  // 群聊页左边
  .group__left {
    width: 250px;
    height: 100%;
  }
  // 群聊页右边
  .group__right {
    width: calc(100% - 250px);
    height: 100%;
    background-color: #fff;
    background-image: url("../assets/img/ikon.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 680px 400px;
  }
}
</style>

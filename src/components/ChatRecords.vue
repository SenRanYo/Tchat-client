<template>
  <div class="chat-records">
    <el-scrollbar tag="ul">
      <li v-for="(item, index) in listData" :key="index">
        <!-- 属于自己的消息 -->
        <div class="list__item--own"></div>
        <!-- 属于其他人的消息 -->
        <div class="list__item--other"></div>
      </li>
    </el-scrollbar>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "ChatRecords",
  props: {
    listData: {
      type: Array
    }
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["userInfo"])
  }
};
</script>
<style lang="scss">
.chat-records-list {
  width: calc(100 - 250px);
  background-color: #fff;
  .el-scrollbar {
    height: 100%;
    .el-scrollbar__wrap {
      overflow-x: hidden;
    }
  }
}
</style>

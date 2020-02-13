<template>
  <el-popover
    class="emoji-popover"
    placement="top-start"
    trigger="hover"
    offset="10"
  >
    <div class="emoji-list">
      <el-scrollbar
        class="scrollbar-container"
        wrapClass="scrollbar-wrap-container"
        viewClass="scrollbar-view-container"
      >
        <i
          class="emoji-item"
          v-for="(item, index) in emojis"
          :key="index"
          @click="selectEmojiHandle(item)"
        >
          {{ item }}</i
        >
      </el-scrollbar>
    </div>
    <!--  -->
    <i class="emoji-activate-btn iconfont iconemoji" slot="reference"></i>
  </el-popover>
</template>

<script>
import { data } from "./emojis";
export default {
  name: "Emoji",
  data() {
    return {};
  },
  computed: {
    emojis() {
      return data;
    }
  },
  methods: {
    selectEmojiHandle(emoji) {
      this.$emit("selectEmoji", emoji);
    }
  }
};
</script>

<style lang="scss">
.emoji-popover {
  .emoji-activate-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #84869d;
    font-weight: bold;
    font-size: 20px;
    width: 30px;
    height: 30px;
  }
}
.emoji-list {
  width: 340px;
  height: 300px;
  .scrollbar-container {
    height: 100%;
    .scrollbar-wrap-container {
      height: 100%;
      overflow-x: hidden;
      .scrollbar-view-container {
        overflow-x: hidden;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        padding-left: 10px;
        padding-bottom: 10px;
      }
    }
    .emoji-item {
      width: 40px;
      height: 40px;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: default;
      &:hover {
        background-color: #ccc;
      }
    }
  }
}
</style>

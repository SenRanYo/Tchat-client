<template>
  <div class="home">
    <HomeNav></HomeNav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import HomeNav from "./components/HomeNav";
export default {
  name: "home",
  components: { HomeNav },
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
  width: 65%;
  max-width: 1200px;
  height: 80%;
  overflow: hidden;
  display: flex;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>

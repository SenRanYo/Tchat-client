<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #81799e, #b9b0d5);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

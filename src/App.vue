<template>
  <div id="app">
    <!-- 头部导航区域 -->
    <div class="header-navigator">
      <navigator></navigator>
    </div>
    <!-- 页面模块 -->
    <div class="pages-module">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
    
  </div>
</template>

<script>
import navigator from './navigator'
export default {
  name: 'App',
  components: {
    navigator
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
.header-navigator {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}
</style>

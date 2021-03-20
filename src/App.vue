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
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>

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
    <!-- 底部区域 -->
    
  </div>
</template>

<script>
import navigator from '../components/navigator'
export default {
  name: 'App',
  components: {
    navigator
  }
}
</script>

<style>

</style>

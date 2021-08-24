<template>
  <div>
    <!-- 头部导航区域 -->
    <div class="header-navigator">
      <navigator></navigator>
    </div>
    <!-- 页面模块 -->
    <div class="pages-module">
      <router-view/>
    </div>
    <!-- 底部区域 -->
    <div>
      <!-- h5有footer标签, 需要重新命名, 否则会报错 -->
      <!-- <nav-footer></nav-footer> -->
      <div class="empty"></div>
    </div>
  </div>
</template>

<script>
/*eslint-disable */
import navigator from '../components/navigator'
import navFooter from '../components/footer'
export default {
  name: 'App',
  components: {
    navigator,
    navFooter
  }
}
</script>

<style lang="less" scoped>
  .empty {
    height: 200px;
  }
</style>

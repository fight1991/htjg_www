<template>
<!--  :style="'height:' + boxHeight + 'px;'" -->
<div class="fullpage-container">
  <div class="fullpage-wp" v-fullpage="opts">
    <div class="page-1 page">
      <p class="part-1" v-animate="{value: 'bounceInLeft'}">vue-fullpage</p>
    </div>
    <div class="page-2 page">
      <p class="part-2" v-animate="{value: 'bounceInRight'}">vue-fullpage</p>
    </div>
    <div class="page-3 page">
      <p class="part-3" v-animate="{value: 'bounceInLeft', delay: 0}">vue-fullpage</p>
      <p class="part-3" v-animate="{value: 'bounceInRight', delay: 600}">vue-fullpage</p>
      <p class="part-3" v-animate="{value: 'zoomInDown', delay: 1200}">vue-fullpage</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      homeImg: {
        one: require('../assets/home-page1.jpg')
      },
       opts: {
        start: 0,
        dir: 'v',
        duration: 500
      }
    }
  },
  methods: {
    afterLoad () {}
  }
}
</script>

<style scoped lang="less">
  .fullpage-container {
    height: 100vh;
  }
  .part-1 {
    background-color: #f5f5f5;
  }
</style>

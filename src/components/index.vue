<template>
<!--  :style="'height:' + boxHeight + 'px;'" -->
<div class="fullpage-container">
  <full-page :options="options" ref="fullpage">
      <div class="section">
        <h3>vue-fullpage.js</h3>
      </div>
      <div class="section">
        
      </div>
      <div class="section">
        <h3>Section 3</h3>
      </div>
    </full-page>
  </div>
</template>

<script>
export default {
  data () {
    return {
      homeImg: {
        one: require('../assets/home-page1.jpg')
      },
       options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        //是否显示导航，默认为false
        navigation: true,
        //为每个section设置背景色
        sectionsColor: [
          "#41b883",
          "#ff5f45",
          "#0798ec",
          "#fec401",
          "#1bcee6",
          "#ee1a59",
          "#2c3e4f",
          "#ba5be9",
          "#b4b8ab"
        ],
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

</style>

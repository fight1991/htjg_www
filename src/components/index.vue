<template>
<!--  :style="'height:' + boxHeight + 'px;'" -->
  <div class="fullpage-container">
    <div class="box">
      <div class="section">1</div>
      <div class="section">2</div>
      <div class="section">3</div>
      <div class="section">4</div>
      <div class="section">4</div>
      <div class="section">4</div>

    </div>
  </div>
</template>

<script>
import $ from 'jquery'
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
  mounted () {
    this.initFullpage()
  },
  methods: {
    afterLoad () {},
    initFullpage () {
      $('.box').fullpage({
        // 配置每屏的颜色
        sectionsColor: ['#004CA0', '#103674', '#004CA0', '#0F3574', '#004EA0', '#0F3574'],
        navigationTooltips: ['智慧交通新生态的引领者', '关于我们', '智慧交通生态布局', '城市级智慧停车解决方案', '人车生活服务平台解决方案', '新闻资讯'],
        // 配置内容不垂直居中
        verticalCentered: false,
        // 导航
        navigation: true,
        navigationColor: 'red',
        // 左右滑块的箭头的背景颜色
        // controlArrowColor: 'rgba(255,255,255,.6)',
        // afterLoad: 在完全进入某一屏幕时触发, index标记第几屏, 从1开始

        // afterLoad 动态维护一个 now 类, 进入对应屏幕时, 会加上now类
        afterLoad: function() {
          // 在进入对应屏幕时, 给对应屏幕加上 now 类, 移除其他屏幕的 now 类
          // 注意: index拿到的1开始的, eq里面设置的是索引,0开始的
          // $('.section').eq(index-1).addClass("now").siblings().removeClass("now");
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
  .fullpage-container {
    height: calc(100vh - 70px);
  }
  
</style>

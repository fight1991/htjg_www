<template>
<!--  :style="'height:' + boxHeight + 'px;'" -->
  <div class="full-page-box">
    <full-page class="full-page" :options="options">
      <div class="section page1">
        <div class="title f20 animated bounceInDown">智慧交通新生代的领导者</div>
        <div class="img-box">
          <img v-lazy="homeImg.one" alt="">
          <!-- <img src="../assets/home-page1.jpg" alt=""> -->
        </div>
      </div>
      <div class="section page2">
        <!-- <div class="slide"> Slide 1 </div>
        <div class="slide"> Slide 2 </div>
        <div class="slide"> Slide 3 </div>
        <div class="slide"> Slide 4 </div> -->
      </div>
      <div class="section page3">
        <div class="box3">
          section3
        </div>
      </div>
      <div class="section page4">
        <div class="box4">
          section4
        </div>
      </div>
      <div class="section page5">
        <div class="box5">
          section5
        </div>
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
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        controlArrows: true, // 用来控制slide幻灯片的箭头
        // continuousVertical: true, // 是否循环滚动，不会出现跳动，效果很平滑
        afterLoad: this.afterLoad,
        // scrollOverflow: true,
        menu: "#menu",
        navigation: true, // 是否显示导航，设为true会显示小圆点作为导航
        navigationPosition: 'right', // 导航小圆点的位置，可以设置为left或者right
        navigationTooltips: ["第一页","第二页","第三页"],
        // anchors: ['page1', 'page2', 'page3'], // 定义锚链接，用户可以快速打开定位到某一页面
        // verticalCentered: false, // 每一页幻灯片的内容是否垂直居中
        // scrollingSpeed: 700, // 页面滚动速度
        // sectionSelector: ".section", // section选择器
        // slideSelector: ".slide", // slide选择器
        slidesNavigation: true, // 是否显示横向幻灯片的导航
        slidesNavPosition: 'bottomCenter', // 横向幻灯片导航的位置，可以为top或者bottom
        // lockAnchors: true,  // 是否锁定锚链接
        // easing: '', // 定义section页面的滚动方式，需要引入jquery.easings插件
        // css3: false, // 是否使用css3 transform来实现滚动效果
        // loopTop: true, // 滚动到最顶部后是否连续滚动到底部
        // loopBottom: true, // 滚动到最底部后是否连续滚动到顶部
        // loopHorizontal: true, // 横向slide幻灯片是否循环滚动
        autoScrolling: true, // 是否使用插件滚动方式，设为false后，会出现浏览器自带的滚动条，将不会按页滚动
        scrollBar: false, // 是否包含滚动条，设为true，则浏览器自带的滚动条会出现，页面还是按页滚动，但是浏览器滚动条默认行为也有效
        // paddingTop: "70px", // 设置每个section顶部的padding，当我们要设置一个固定在顶部的菜单、导航、元素等时使用
        // paddingBottom: "100px", // 设置每个section底部的padding，当我们要设置一个固定在底部的菜单、导航、元素等时使用
        // fixedElements: ".nav", // 固定的元素，为jquery选择器；可用于顶部导航等
        sectionsColor: [
          "#004CA0",
          "#103674",
          "#004CA0",
          "#103674",
          "#004CA0",
          "#ee1a59",
          "#2c3e4f",
          "#ba5be9",
          "#b4b8ab"
        ]
      }
    }
  },
  methods: {
    afterLoad () {}
  }
}
</script>

<style scoped lang="less">
  .full-page-box {
    // height: ;
  }
  .full-page {
    margin-top: 70px;
  }
  .img-box {
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .page1 .title {
    position: absolute;
    top: 100px;
    left: 50%;
    z-index: 2;
    color: #fff;
    transform: translateX(-50%);
  }
</style>

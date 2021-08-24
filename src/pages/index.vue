<template>
<!--  :style="'height:' + boxHeight + 'px;'" -->
  <div class="outer" id="index-outer">
    <!-- 头部导航区域 -->
    <div class="header-navigator">
      <navigator></navigator>
    </div>
    <div class="fullpage-container">
      <div class="box">
        <div class="section one">
          <div class="title f30"></div>
          <div class="bg"></div>
        </div>
        <div class="section two">
          <div class="title"><img src="../assets/images/second_sreen/title.png" alt=""></div>
          <div class="content banxin">
            <div class="left-text">
              <div class="main-title">
                <div class="main-title-1">航天科技集团军民融合战略</div>
                <div class="main-title-2">在智慧交通领域的示范性落地与标杆性探索</div>
              </div>
              <div class="sub-title f12 text-justify">航天吉光科技有限公司隶属于中国航天科技集团, 由深圳航天科技创新研究院控股成立, 是践行国家央地合作、军民融合战略的典范企业。航天吉光科技聚焦智慧交通领域, 充分发挥集团优势、资本优势、创新优势、数据优势, 依靠自身大数据、人工智能、云边融合等硬实力, 为客户提供"科技+产业+生态"的全方位智慧交通服务。航天吉光致力于成为智慧交通新生态的引领者,打造具备"亿车互联"数据集成、分析与应用能力的独角兽平台, 开拓出行新未来。</div>
            <div class="know-box">
              <!-- 了解更多 -->
               <div class="know-more-btn">
                <a href="./aboutUs.html#top">了解更多</a>
              </div>
            </div>
            </div>
            <div class="gap"></div>
            <div class="map-img">
              <img src="../assets/images/second_sreen/map.png" alt="">
            </div>
          </div>
        </div>
        <div class="section three">
          <div class="top-img banxin">
            <img src="../assets/images/third_screen/homepage-earth.png" alt="">
            <div class="title f30"><img src="../assets/images/third_screen/title.png" alt=""></div>
          </div>
          <div class="foot banxin">
            <div class="item" v-for="(item, index) in threeScreenData" :key="index">
              <div class="icon"><img :src="item.icon" alt=""></div>
              <span class="item-text fw">
                {{item.title}}
              </span>
              <span class="know-more-btn">
                <a class="a-label" :href="item.href">了解更多</a>
              </span>
            </div>
          </div>
        </div>
        <div class="section four four-five jc-center">
          <div class="title f30"><img src="../assets/images/four_sreen/title.png" alt=""></div>
          <div class="content banxin flex-row jc-between align-center">
            <div class="content-text">
              <div class="content-text-title">城市级智慧交通管理平台</div>
              <div class="content-text-top text-justify">
                航天吉光基于机动车电子标识技术打造星地一体的城市级智慧交通管理平台。以电动自行车智能监管及机动车智慧管理两大业务为抓手, 搭建"非机动车联网联控 + 汽车智能网联 + 交通运行管理平台 + 交通信息服务系统"的智慧交通信息化基础设施体系, 让智慧交通大脑高速运转, 实现对电动自行车管理、治安涉车管理、交通运输管理、城市交通管理、环保检测管理、市政停车管理等主要场景的应用, 有效降低交通事故发生率、违法率、提高道路及车辆利用率, 助理政府交通管理升级。
              </div>
              <div class="content-text-img">
                <img src="../assets/images/four_sreen/homepage-caricon.png" alt="">
              </div>
            </div>
            <div class="gap"></div>
            <div class="content-img">
              <img src="../assets/images/four_sreen/homepage-car.png" alt="">
            </div>
          </div>
          <div class="bottom">
            <div class="know-more-btn">
              <a href="./business.html#ways_stop">了解更多</a>
            </div>
          </div>
        </div>
        <div class="section five four-five jc-center">
          <div class="title f30"><img src="../assets/images/four_sreen/title.png" alt=""></div>
          <div class="content banxin flex-row jc-between align-center">
            <div class="content-text">
              <div class="content-text-title">城市级智慧交通管理平台</div>
              <div class="content-text-top text-justify">
                通过安装机动车电子标识，车主可以通过合作伙伴的移动端享受到高品质的人车生活服务, 例如: 时刻掌握停车场车位信息，加油站/洗车店等商家营业信息，舒适出行，惠享车生活；车主无需下车，即可完成无感加油、无感出入、无感洗车，刷车支付成为新的支付手段；通过手机App、交通诱导屏、电子站牌等方式，获取丰富的交通出行信息……在航天吉光构建的智慧型人 · 车 · 生活生态圈里，车与车、车与商户、车与人之间的关系变得更加紧密。
              </div>
              <div class="content-text-img">
                <img src="../assets/images/five_screen/homepage-caricon2.png" alt="">
              </div>
            </div>
            <div class="gap"></div>
            <div class="content-img">
              <img src="../assets/images/five_screen/homepage-car2.png" alt="">
            </div>
          </div>
          <div class="bottom">
            <div class="know-more-btn">
              <a href="./business.html#ways_stop">了解更多</a>
            </div>
          </div>
        </div>
        <div class="section six flex-column align-center jc-center">
          <div class="title f30"><img src="../assets/images/six_screen/title.png" alt=""></div>
          <div class="news-banner banxin">
            <!-- <div class="slide">
              <div class="slide-detail"></div>
            </div>
            <div class="slide">第三屏的第二屏</div>
            <div class="slide">第三屏的第三屏</div>
            <div class="slide">第三屏的第四屏</div> -->
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div v-for="item in swiperList" :key="item.id" class="swiper-slide">
                  <a :href="item.href">
                    <div class="swiper-slide-item">
                      <div class="swiper-slide-item-img">
                        <img :src="item.img" alt="">
                      </div>
                      <div class="swiper-slide-item-content-title text-cut">{{item.title}}</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <!-- 箭头。如果放置在swiper-container外面，需要自定义样式。 -->
            <div class="swiper-button-prev" @click="preNew">
              <i class="iconfont arrow-icon icon-arrow-left"></i>
            </div>
            <div class="swiper-button-next" @click="nextNew">
              <i class="iconfont arrow-icon icon-arrow-right"></i>
            </div>
          </div>
          <div class="know-more-btn swiper-box-btn">
            <a href="./news.html">了解更多</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*eslint-disable */
import $ from 'jquery'
import navigator from '../components/navigator'

export default {
  components: { navigator },
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
      },
      swiperList: [
        {
          id: 'news01',
          title: '《道路交通安全法（修订建议稿）》公开征求意见，机动车需按规定安装电子标识',
          href: './news.html#news01',
          img: require('@/assets/images/news/news01.png')
        }, {
          id: 'news02',
          title: '航天吉光“智慧堰桥”停车一体化项目正式启动',
          href: './news.html#news02',
          img: require('@/assets/images/news/news02.png')
        }, {
          id: 'news03',
          title: '三个首创！航天吉光非机动车管控试点在江阴落地，赋能城市交通治理',
          href: './news.html#news03',
          img: require('@/assets/images/news/news03.png')
        }, {
          id: 'news04',
          title: '步步为营！智慧交通赛道上最新政策与行业动态（2月份）',
          href: './news.html#news04',
          img: require('@/assets/images/news/news04.png')
        }, {
          id: 'news05',
          title: '“十四五”开局之年，航天吉光乘风而生，破浪前行',
          href: './news.html#news05',
          img: require('@/assets/images/news/news05.png')
        }
      ],
      threeScreenData: [
        {
          title: '一体:智慧交通新生态',
          icon: require('../assets/images/third_screen/homepage-earthicon1.png'),
          href: ''
        }, {
          title: '两翼:城市级交通管理平台',
          icon: require('../assets/images/third_screen/homepage-earthicon2.png'),
          href: './layout.html#manage'
        }, {
          title: '两翼:人车生活开放服务平台',
          icon: require('../assets/images/third_screen/homepage-earthicon3.png'),
          href: './layout.html#server'
        }
      ]
    }
  },
  mounted () {
    this.initFullpage()
  },
  beforeDestroy () {
    window.onresize = null
  },
  methods: {
    afterLoad () {},
    preNew () {
      // let tempArr = JSON.parse(JSON.stringify(this.swiperList))
      let firstData = this.swiperList[0]
      this.swiperList.shift()
      this.swiperList.push(firstData)
    },
    nextNew () {
      let lastData = this.swiperList[this.swiperList.length - 1]
      this.swiperList.pop()
      this.swiperList.unshift(lastData)
    },
    initFullpage () {
      $('.box').fullpage({
        // 配置每屏的颜色
        sectionsColor: ['#004CA0', '#103674', '#004CA0', '#0F3574', '#004EA0', '#0F3574'],
        navigationTooltips: ['智慧交通新生态的引领者', '关于我们', '智慧交通战略布局', '城市级智慧停车解决方案', '人车生活服务平台解决方案', '新闻资讯'],
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
  @import './styles/index.less';
  .swiper-wrapper {
    display: flex;
    overflow: hidden;
    justify-content: space-between;
  }
  .swiper-slide {
    width: 24%;
    float: left;
    &:last-child {
      display: none;
    }
  }
  .arrow-icon {
    font-size: 36px;
  }
  p {
    padding: 5px 0;
  }
</style>

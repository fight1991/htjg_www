<template>
  <div class="outer">
    <!-- 城市级智慧停车解决方案 -->
    <div class="grid-area" id="ways_stop">
      <div class="title aniview" data-av-animation="flipInX">
        <img src="../assets/images/business/title1.png" alt="">
      </div>
      <div class="grid-content banxin">
        <div class="grid-content-dot">
          <div class="text1">全市/区</div>
          <div class="text1">一张网</div>
        </div>
        <div v-for="item in iconList" :key="item.id" class="grid-content-item flex-column align-center jc-center">
          <div class="grid-icon">
            <img :src="item.icon" alt="">
          </div>
          <div class="grid-text">
            <img :src="item.textIcon" alt="">
          </div>
          <div class="grid-content-item-bg" :style="{'backgroundImage': 'url(' + item.bg + ')'}">
          </div>
        </div>
      </div>
    </div>
    <!-- 智慧交通管理平台 -->
    <div class="traf-area" id="ways_plant">
      <div class="title aniview" data-av-animation="flipInX">
        <img src="../assets/images/business/title2.png" alt="">
      </div>
      <div class="plant-box banxin text-img-box flex-row">
        <div class="plant-content pos-text">
          <div class="pos-text-main f24">城市智慧停车</div>
          <div class="pos-text-sub">
            依托无线通信网络、物联网、云计算等现代信息技术，将综合诱导服务系统、停车收费管理系统、数据分析决策系统及服务结合在一起，建立统一管理平台。 纳管城市辖区内的各个停车管理应用平台，实现城市级停车资源全面实时管控，形成数据化、智慧化、统一化的城市停车数字生态。
          </div>
        </div>
        <div class="plant-img pos-img">
          <img src="../assets/images/business/big.png" alt="">
        </div>
      </div>
    </div>
    <!-- 智慧停车场解决方案 -->
    <div class="car-area" id="ways_stop">
      <div class="title aniview" data-av-animation="flipInX">
        <img src="../assets/images/business/title3.png" alt="">
      </div>
      <div class="plant-box banxin text-img-box flex-row">
        <div class="plant-img pos-img">
          <img src="../assets/images/business/way1.png" alt="">
        </div>
        <div class="plant-content pos-text flex-column align-center jc-around">
          <div class="pos-text-sub">
            采用车牌自动识别、线上支付、无感支付、电子发票、远程托管等无人值守模式。集智能硬件技术、视频分析技术、移动互联网技术等多种技术融合，实现岗亭收费、中央收费、二维码支付、无感支付、自助服务等停车支付业务，满足停车收费、车辆特征分析处理、当班管理、业务托管、信息上报等现场业务处理。
          </div>
          <div class="pos-text-img">
            <img src="../assets/images/business/iconList1.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <!-- 路侧停车解决方案 -->
    <div class="roadAside-area">
      <div class="title aniview" data-av-animation="flipInX">
        <img src="../assets/images/business/title4.png" alt="">
      </div>
      <div class="plant-box banxin text-img-box flex-row">
        <div class="plant-content pos-text flex-column jc-around">
          <div class="pos-text-sub">
            基于不同城市的不同需求，提供一体化路侧停车解决方案，包括NB地磁、LoRa地磁、双频地磁、LoRa地感、NB地感、视频桩、中位视频、高位视频、POS终端、巡逻车、违停球等多种硬件方案，支持纯人工收费、半人工收费、自助缴费及无感支付等多种收费模式。
          </div>
          <div>
            <div class="pos-text-main f24">多种硬件方案组合</div>
            <div class="pos-text-sub">
              <div class="pos-text-sub-item">视频桩+自助收费+在线自助缴费+智能催缴</div>
              <div class="pos-text-sub-item">地感+PDA+人工收费+自助收费</div>
              <div class="pos-text-sub-item">高位视频+视频桩+在线自助缴费+智能催缴</div>
              <div class="pos-text-sub-item">高位视频+中位视频+视频桩+PDA+人工收费+自助收费</div>
              <div class="pos-text-sub-item">LoRa地磁\NB地磁\双频地磁+PDA+人工收费+自助收费</div>
            </div>
          </div>
          <div class="pos-text-img">
            <img src="../assets/images/business/iconList2.png" alt="">
          </div>
        </div>
        <div class="plant-img pos-img">
          <img src="../assets/images/business/way2.png" alt="">
        </div>
      </div>
    </div>
    <!-- 产品展示 -->
    <div class="display-area">
      <div class="title aniview" data-av-animation="flipInX">
        <img src="../assets/images/business/title5.png" alt="">
      </div>
      <div class="display-box banxin">
        <div class="display-box-row flex-row jc-between">
          <div class="display-box-row-item">
            <div class="display-box-row-top flex-column jc-center align-center">
              <div class="display-box-row-item-img">
                <img src="../assets/images/business/product1.png" alt="">
              </div>
            </div>
            <div class="display-box-row-bottom">后台管理大屏</div>
          </div>
          <div class="display-box-row-item">
            <div class="display-box-row-top flex-column jc-center align-center">
              <div class="display-box-row-item-img">
                <img src="../assets/images/business/product2.png" alt="">
              </div>
            </div>
            <div class="display-box-row-bottom">智慧停车小程序</div>
          </div>
          <div class="display-box-row-item">
            <div class="display-box-row-top flex-column jc-center align-center">
              <div class="display-box-row-item-img">
                <img src="../assets/images/business/product3.png" alt="">
              </div>
            </div>
            <div class="display-box-row-bottom">手持PDA</div>
          </div>
          <div class="display-box-row-item">
            <div class="display-box-row-top flex-column jc-center align-center">
              <div class="display-box-row-item-img">
                <img src="../assets/images/business/product4.png" alt="">
              </div>
            </div>
            <div class="display-box-row-bottom">停车机器人</div>
          </div>
          <div class="display-box-row-item">
            <div class="display-box-row-top flex-column jc-center align-center">
              <div class="display-box-row-item-img">
                <img src="../assets/images/business/product5.png" alt="">
              </div>
            </div>
            <div class="display-box-row-bottom">地锁</div>
          </div>
          <div class="display-box-row-item">
            <div class="display-box-row-top flex-column jc-center align-center">
              <div class="display-box-row-item-img">
                <img src="../assets/images/business/product6.png" alt="">
              </div>
            </div>
            <div class="display-box-row-bottom">电子车牌</div>
          </div>
          <div class="display-box-row-item">
            <div class="display-box-row-top flex-column jc-center align-center">
              <div class="display-box-row-item-img">
                <img src="../assets/images/business/product7.png" alt="">
              </div>
            </div>
            <div class="display-box-row-bottom">地磁</div>
          </div>
          <div class="display-box-row-item">
            <div class="display-box-row-top flex-column jc-center align-center">
              <div class="display-box-row-item-img">
                <img src="../assets/images/business/product8.png" alt="">
              </div>
            </div>
            <div class="display-box-row-bottom">高位视频</div>
          </div>
          <div class="display-box-row-item">
            <div class="display-box-row-top flex-column jc-center align-center">
              <div class="display-box-row-item-img">
                <img src="../assets/images/business/product9.png" alt="">
              </div>
            </div>
            <div class="display-box-row-bottom">立体车库</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      iconList: [
        {
          id: 'icon1',
          icon: require('@/assets/images/business/grid-icon1.png'),
          textIcon: require('@/assets/images/business/grid-text1.png'),
          bg: require('../assets/images/business/solution1.png')
        }, {
          id: 'icon2',
          icon: require('@/assets/images/business/grid-icon2.png'),
          textIcon: require('@/assets/images/business/grid-text2.png'),
          bg: require('@/assets/images/business/solution2.png')
        }, {
          id: 'icon3',
          icon: require('@/assets/images/business/grid-icon3.png'),
          textIcon: require('@/assets/images/business/grid-text3.png'),
          bg: require('@/assets/images/business/solution3.png')
        }, {
          id: 'icon4',
          icon: require('@/assets/images/business/grid-icon4.png'),
          textIcon: require('@/assets/images/business/grid-text4.png'),
          bg: require('@/assets/images/business/solution4.png')
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import './styles/business.less';
  .grid-content-dot {
    font-size: 16px;
  }
</style>

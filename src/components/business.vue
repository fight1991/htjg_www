<template>
  <div class="outer">
    <!-- banner区域 -->
    <div class="banner" id="top">
      <div class="banner-box banxin">
        <div class="banner-title">
          <img src="../assets/images/business/jdc-title.png" alt="">
        </div>
        <div class="empty"></div>
        <div class="banner-img-box">
          <img src="../assets/images/business/vehiclemanagement-banner.png" alt="">
        </div>
      </div>
    </div>
    <div class="grid-area banxin">
      <div class="img-box">
        <img src="../assets/images/business/vehiclemanagement-1.png" alt="">
      </div>
      <div class="content-box">
        <div class="item-line">
          <div class="title">治安涉车管理</div>
          <div class="item">假套牌车辆稽查</div>
          <div class="item">车辆轨迹跟踪</div>
          <div class="item">治安卡口监控</div>
          <div class="item">区域动态管制</div>
          <div class="item">数学化路查路检</div>
        </div>
      </div>
      <div class="img-box">
        <img src="../assets/images/business/vehiclemanagement-2.png" alt="">
      </div>
      <div class="content-box">
        <div class="item-line">
          <div class="title">交通运输管理</div>
          <div class="item">营运资质电子化</div>
          <div class="item">动态路检检查</div>
          <div class="item">限行区域管理</div>
          <div class="item">闯限行告警</div>
          <div class="item">特种车辆监管</div>
        </div>
      </div>
      <div class="content-box">
        <div class="item-line">
          <div class="title">城市交通管理</div>
          <div class="item">精细车流数据采集</div>
          <div class="item">交通大数据分析</div>
          <div class="item">交通诱导调控</div>
          <div class="item">拥堵预判告警</div>
          <div class="item">支撑交通规划</div>
        </div>
      </div>
      <div class="img-box">
        <img src="../assets/images/business/vehiclemanagement-3.png" alt="">
      </div>
      <div class="content-box">
        <div class="item-line">
          <div class="title">环保监测管理</div>
          <div class="item">车辆环保黄绿标信息电子化管理</div>
          <div class="item">尾气排放超标车辆区域限行监管</div>
          <div class="item">低碳去分时段限行</div>
        </div>
      </div>
      <div class="img-box">
        <img src="../assets/images/business/vehiclemanagement-4.png" alt="">
      </div>
      <div class="img-box double">
        <img src="../assets/images/business/vehiclemanagement-5.png" alt="">
      </div>
      <div class="content-box">
        <div class="item-line">
          <div class="title">市政停车管理</div>
          <div class="item">城市路侧停车收费管理</div>
          <div class="item">占道违章停车管理</div>
          <div class="item">道路停车一张网</div>
        </div>
      </div>
    
    </div>
    <!-- 典型应用 -->
    <div class="application">
      <div class="title">
        <img src="../assets/images/business/jdc-app.png" alt="">
      </div>
      <div class="flow-content banxin">
        <div class="flow-line">
          <div class="left">
            <div class="line-title">四证合一</div>
            <div class="line-content text-justify">
              航天吉光联合公安部交通管理科学研究所，致力于将江阴建设成为全国首个应用“四证合一”（驾驶证、行驶证、交强险标志、年检标志）的应用示范城市，将江阴建设成为全国基于机动车电子标识的智慧交通标杆城市。
            </div>
          </div>
          <div class="right">
            <img src="../assets/images/business/application1.png" alt="">
          </div>
        </div>
        <div class="flow-line">
          <div class="left">
            <div class="line-title">停车一张网</div>
            <div class="line-content text-justify">
              依托无线通信网络、物联网、云计算等现代信息技术，将综合诱导服务系统、停车收费管理系统、数据分析决策系统等服务结合在一起，建立统一管理平台，纳管城市辖区内的各个停车管理应用平台，实现城市级停车资源全面实时管控，打造数据化、智慧化的城市停车一张网。
            </div>
          </div>
          <div class="right">
            <img src="../assets/images/business/application2.png" alt="">
          </div>
        </div>
        <div class="flow-line no-bottom">
          <div class="left">
            <div class="line-title">交通流量信息采集</div>
            <div class="line-content text-justify">
              通过对车辆安装机动车电子标识射频卡，并在路口安装识读设备，基于深度学习与反馈的迭代更新，对交通网络进行实时智能化运算与模拟，识别常发拥堵路口、路段和干线，并基于历史交通规律，结合天气情况、假日情况等对未来交通态势进行精确预判，支撑出行信息诱导发布。
            </div>
          </div>
          <div class="right">
            <img class="width-per" src="../assets/images/business/application3.png" alt="">
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

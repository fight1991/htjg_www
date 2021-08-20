<template>
  <div class="footer flex-column jc-center">
    <div class="content banxin flex-row jc-between align-center">
      <div class="left flex-column jc-between">
        <div class="top flex-row jc-around">
          <ul>
            <li class="title">战略布局</li>
            <li><a href="./layout#manage">城市级交通管理平台</a></li>
            <li><a href="./layout#server">人车生活开放服务平台</a></li>
          </ul>
          <ul>
            <li class="title">业务方案</li>
            <li><a href="./business">城市级智慧停车解决方案</a></li>
            <li><a href="./bus_vehicel">城市级电动自行车管理解决方案</a></li>
            <li><a href="./bus_live">人车生活服务平台解决方案</a></li>
          </ul>
          <ul>
            <li class="title">关于我们</li>
            <li><a href="./aboutUs#introduce">企业简介</a></li>
            <li><a href="./aboutUs#goodness">企业优势</a></li>
            <li><a href="./aboutUs#culture">企业文化</a></li>
            <li><a href="./aboutUs#model">企业模式</a></li>
            <li><a href="./aboutUs#cooper">合作伙伴</a></li>
          </ul>
        </div>
        <!-- <div class="bottom">是非成败转头空, 青山依旧在, 惯看秋月春风。一壶浊酒喜相逢, 古今多少事, 滚滚长江东逝水, 浪花淘尽英雄</div> -->
      </div>
      <div class="right">
        <div class="logo">
          <img src="../assets/images/logo.png" alt="">
        </div>
        <div class="qrcode">
          <img src="../assets/images/erweima.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.footer {
  color: #fff;
  height: 6rem;
  margin-top: 2rem;
  background: url('../assets/images/footer_bg.jpg') center no-repeat;
  background-size: cover;
}

.footer ul {
  margin-right: 1.5rem;
}
.footer .qrcode,.footer .logo {
  width: 1.5rem;
}
.footer .logo {
  margin-bottom: .4rem;
}
.footer .title {
  font-weight: bold;
  font-size: .2rem;
  color: #fff;
  margin-bottom: .1rem;
}

.footer li {
  color: #999;
  font-size: .14rem;
  padding: .1rem 0;
}
.footer li:hover a {
  color: #00FFFF;
}
.footer .bottom {
  padding-top: .2rem;
}
</style>

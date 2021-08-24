<template>
  <div class="footer">
    <div class="content banxin">
      <div class="top-box">
        <div class="left">
          <ul v-for="(item, index) in routerList" :key="'index' + index">
            <li class="title">{{item.title}}</li>
            <li v-for="(child, index2) in item.link" :key="'child' + index2">
              <a :href="child.href">{{child.title}}</a>
            </li>
          </ul>
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
    <div class="bottom-box">
        <div class="copy-right">
          <span style="padding-right:20px">Copyright@航天吉光科技有限公司</span>
          <img class="gover" src="../assets/images/government.png"/>
          <span>苏公网安备 32021102001191号</span>
          <a class="target" target="_blank" href="https://beian.miit.gov.cn/#/Integrated/index">
            <span>苏ICP备2021006770号</span>
          </a>
        </div>
    </div>
  </div>
</template>

<script>
/*eslint-disable */
export default {
  data () {
    return {
      routerList: [
        {
          title: '战略布局',
          link: [{
            title: '一体',
            href: './layout#one'
          }, {
            title: '两翼',
            href: './layout#wings'
          }]
        }, {
          title: '业务方案',
          link: [{
            title: '机动车电子标识',
            href: './elec'
          }, {
            title: '城市级机动车管理解决方案',
            href: './business'
          }, {
            title: '城市级电动自行车管理解决方案',
            href: './bus_vehicel'
          }, {
            title: '人车生活开放服务平台',
            href: './bus_live'
          }]
        }, {
          title: '产品中心',
          link: [{
            title: '硬件设备',
            href: './product#hardware'
          }, {
            title: '软件平台',
            href: './product#soft'
          }]
        }, {
          title: '新闻资讯',
          link: []
        }, {
          title: '关于我们',
          link: [{
            title: '企业优势',
            href: './aboutUs#goodness'
          }, {
            title: '企业文化',
            href: './aboutUs#culture'
          }, {
            title: '合作伙伴',
            href: './aboutUs#cooper'
          }]
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.footer {
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.top-box {
  display: flex;
  flex: 1;
  .right {
    // width: 100px;
  }
  .left {
    flex: 1;
    display: grid;
    grid-template-columns: 33% 33% 33%;
    row-gap: .3rem;
  }
}
.bottom-box {
  padding: 40px 0 20px;
  border-top: 1px solid #fff;
}

.content {
  flex: 1;
  display: flex;
  align-items: center;
}
.copy-right {
  color: #fff;
  display: flex;
  font-size: .12rem;
  justify-content: center;
  align-items: center;
  .target {
    display: block;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
  }
  .gover {
    width: .2rem;
  }
  span {
    padding: 0 5px;
  }
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

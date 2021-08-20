<template>
  <div class="header-box">
    <div class="left f30">
      <img src="../assets/images/logo.png" alt="">
    </div>
    <div class="center">
      <div class="route-list f24">
        <ul>
          <!-- 一级菜单 -->
          <li
            v-for="item in routeList"
            :class="{'link': true, 'active': currentRoute == item.path, 'select-items': item.children}"
            :key="item.path">
            <a :href="item.path">
              <span>{{item.label}}</span>
            </a>
            <!-- 下拉菜单 -->
            <div class="select-down" v-if="item.children">
              <ul>
                <li
                  v-for="child in item.children"
                  :class="{'active': currentRoute == child.path}"
                  :key="child.path">
                  <a :href="child.path">{{child.label}}</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: 'navigator',
  data () {
    return {
      activeIndex: 0,
      routeList: [
        {
          label: '首页',
          path: '/index'
        }, {
          label: '战略布局',
          path: '/layout'
        }, {
          label: '业务方案',
          path: '/business',
          children: [
            {
              label: '机动车电子标识',
              path: '/elec'
            }, {
              label: '城市级机动车管理解决方案',
              path: '/business'
            }, {
              label: '城市级电动自行车管理解决方案',
              path: '/bus_vehicel'
            }, {
              label: '人车生活服务平台解决方案',
              path: '/bus_live'
            }
          ]
        }, {
          label: '新闻中心',
          path: '/news'
        }, {
          label: '关于我们',
          path: '/aboutUs'
        }
      ]
    }
  },
  computed: {
    currentRoute () {
      return this.$route.path
    }
  },
  methods: {
    setCurrentIndex (index) {
      this.activeIndex = index
    }
  },
  created () {
    console.log(this.$route.path)
  }
}
</script>

<style scoped lang="less">
.fix-header-box .header-box{
  box-sizing: border-box;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: transparent;
}
.header-box {
  position: relative;
  box-sizing: border-box;
  color: #fff;
  background-color: #004CA0;
  display: flex;
  align-items: center;
  z-index: 12;
  padding: 0 .6rem;
}
.header-box .select-down {
  position: absolute;
  left: 0;
  top: 1.4rem;
  width: 100%;
  z-index: 11;
  height: 0;
  color: #ccc;
  overflow: hidden;
}
.header-box .select-items:hover .select-down{
  height: 1rem;
  transition: all .5s;
}
.header-box .select-down ul {
  display: flex;
  justify-content: center;
  font-size: .16rem;
  height: 1rem;
  background-color: #103674;
}
.header-box .select-down ul li {
  padding: 0 .2rem;
}
.header-box .select-down ul li a {
  color: #666;
}
.header-box .select-down ul li.active a {
  color: #00FFFF;
}
.header-box .select-down ul li:hover a {
  color: #00FFFF;
}
.header-box .link:hover span {
  border-bottom: 1px solid #00FFFF;
}
.header-box .left {
  width: 1.73rem;
}
.header-box .left img {
  width: 100%;
}
.header-box .center {
  flex: 1;
}
.header-box .route-list {
  width: 12rem;
  margin: 0 auto;
  letter-spacing: 3px;
}
.header-box .route-list ul {
  width: 100%;
  display: flex;
  align-items: center;
}
.header-box .link a span {
  padding: .11rem 0;
  border-bottom: 1px solid transparent;
  transition: all .5s;
  text-align: center;
}
.header-box .link a {
  color: #fff;
  width: 100%;
  text-align: center;
}
.header-box .link {
  width: 20%;
  height: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration:none;
}
.header-box .active a span{
  border-bottom: 1px solid #00FFFF;
}

</style>

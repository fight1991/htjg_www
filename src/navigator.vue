<template>
  <div class="header-box">
    <div class="left f20">航天吉光</div>
    <div class="center">
      <div class="route-list">
        <template v-for="(item, index) in routeList">
        <router-link
          :key="item.path"
          :class="{'link': true, active: activeIndex==index}"
          @click.native="setCurrentIndex(index)"
          :to="item.path">
          <span>{{item.label}}</span>
        </router-link>
      </template>
      </div>
    </div>
    <div class="right">暂无</div>
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
          label: '生态布局',
          path: '/layout'
        }, {
          label: '业务方案',
          path: '/business'
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
  methods: {
    setCurrentIndex (index) {
      console.log(index)
      this.activeIndex = index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .header-box {
    box-sizing: border-box;
    height: 70px;
    color: #fff;
    background-color: #004CA0;
    display: flex;
    align-items: center;
    .center {
      flex: 1;
    }
    .route-list {
      width: 60%;
      margin: 0 auto;
      display: flex;
      align-items: center;
    }
    span {
      padding: 8px 5px;
      border-bottom: 2px solid transparent;
      transition: all .5s;
    }
    .active {
      span {
        border-bottom: 2px solid #00FFFF;
      }
    }
    .link {
      width: 20%;
      display: block;
      text-align: center;
      text-decoration:none;
      color: #fff;
      // &:hover {
      //   span {
      //     border-bottom: 2px solid red;
      //   }
      // }
    }
    padding:  20px 40px;
  }
</style>

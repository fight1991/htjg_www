import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)

const router =  new vueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    }, { // 首页
      path: '/index',
      name: 'index',
      component: () => import( /* webpackChunkName: "index" */ '../components/index')
    }, { // 生态布局
      path: '/layout',
      name: 'layout',
      component: () => import( /* webpackChunkName: "layout" */ '../components/layout')
    }, { // 业务方案 城市级智慧停车解决方案
      path: '/business',
      name: 'business',
      component: () => import( /* webpackChunkName: "business" */ '../components/business')
    }, { // 新闻中心
      path: '/news',
      name: 'news',
      component: () => import( /* webpackChunkName: "news" */ '../components/news')
    }, { // 关于我们
      path: '/aboutUs',
      name: 'aboutUs',
      component: () => import( /* webpackChunkName: "aboutUs" */ '../components/aboutUs')
    }, { // 人车生活服务平台解决方案
      path: '/bus_live',
      name: 'bus_live',
      component: () => import( /* webpackChunkName: "bus_live" */ '../components/bus_live')
    }, { // 城市级电动自行车管理解决方案
      path: '/bus_vehicel',
      name: 'bus_vehicel',
      component: () => import( /* webpackChunkName: "bus_vehicel" */ '../components/bus_vehicel')
    }
  ]
})

export default router
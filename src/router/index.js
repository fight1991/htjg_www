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
    }, { // 业务方案
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
    }
  ]
})

export default router
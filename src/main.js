import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 初始化样式文件
import './style/base.less'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

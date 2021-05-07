import Vue from 'vue'
import App from './App.vue'
import router from './router'

// fullpage插件
// import 'vue-fullpage/vue-fullpage.css'
// import VueFullpage from 'vue-fullpage'

import 'fullpage.js/vendors/scrolloverflow';
import VueFullpage from 'vue-fullpage.js'
Vue.use(VueFullpage)

// animate动画样式
import 'animate.css'

// 图片懒加载插件
import VueLazyload from 'vue-lazyload'

// 初始化样式文件
import './style/base.less'
import './style/main.less'

Vue.use(VueFullpage)
Vue.use(VueLazyload)  

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

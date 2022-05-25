import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick'

//引入全局css文件，清除默认样式
import './assets/styles/reset.css'
//移动端1像素边框问题:2k分辨率以上，1像素边框会显示成多像素
import './assets/styles/border.css'
//移动端某些机型某些浏览器中使用click点击事件会延迟300ms才执行的问题,使用第三方插件fastClick解决
fastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App'
import router from './router'
import "babel-polyfill"
// import FastClick from 'fastclick'
import 'assets/js/rem.js'
import 'assets/scss/reset.scss'
import 'assets/iconfont/iconfont.css'
import  'swiper'
import 'swiper/css/swiper.css'

Vue.config.productionTip = false
// FastClick.attach(document.body); 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

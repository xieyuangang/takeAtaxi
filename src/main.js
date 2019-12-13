// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'jquery'
import axios from './api/request'
import qs from 'qs'
import * as types from './assets/js/type' //公共参数
import common from './assets/js/common' //公共方法

import './assets/css/public.css'
import './assets/css/weui.css'
import 'swiper/css/swiper.css'

import './assets/js/weui.min.js'

if (sessionStorage.getItem('dbg') === '1') {
  let vConsole = new VConsole()
}


import VueAMap from 'vue-amap'
// 初始化vue-amap
VueAMap.initAMapApiLoader({
  key: '2074f357e1d89d9ea8c6b52ff7dc174f',
  plugin: [
    'AMap.Autocomplete', // 输入提示插件
    'AMap.PlaceSearch', // POI搜索插件
    'AMap.Scale', // 右下角缩略图插件 比例尺
    'AMap.OverView', // 地图鹰眼插件
    'AMap.ToolBar', // 地图工具条
    'AMap.MapType', // 类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
    'AMap.PolyEditor', // 编辑 折线多，边形
    'AMap.CircleEditor', // 圆形编辑器插件
    'AMap.Geolocation', // 定位控件，用来获取和展示用户主机所在的经纬度位置
    'AMap.TruckDriving' // 路径规划
  ],
  v: '1.4.13'
})
Vue.use(VueAMap)


import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

import VCharts from 'v-charts/lib/pie'
Vue.use(VCharts)

import VueVideoPlayer from 'vue-video-player'
Vue.use(VueVideoPlayer)

Vue.prototype.$axios = axios
Vue.prototype.$types = types
Vue.prototype.common = common
Vue.prototype.$qs = qs
Vue.config.productionTip = false

axios.defaults.withCredentials = true


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// axios
//   .get('sharing/share/getAuth2AccessToken', {
//     firstName: 'admin',
//     lastName: '123456'
//   })
//   .then(res => {
//     if (res.data.code == 0) {
//       sessionStorage.setItem('token', res.data.data.access_token)
//       axios.defaults.headers.common['Authorization'] = 'bearer ' + res.data.data.access_token
//       //实例化Vue
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
//   }
// })

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to) {
    document.title = to.name
  }
  next()
})

import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import '../static/iconfont/iconfont.css'
// import './mock/mockServe' //加载mockServe即可
import store from './store'
import api from './utils/api' // 引用接口处理文件，此处为api.js


Vue.prototype.$store=store
Vue.prototype.$api = api
Vue.use(Vuex) //安装vuex
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()//挂载整个应用始其生效

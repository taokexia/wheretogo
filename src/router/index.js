import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // 异步加载组件
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})

import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import Home from './components/home'
import My1 from './components/my1'
import My2 from './components/my2'
import My3 from './components/my3'

Vue.use(Router)
// 全局注册组件

Vue.config.productionTip = false

const routes = [
  {

    path: '/',
    component: Home
  },
  {
    path: '/my1',
    component: My1
  },
  {
    path: '/my2',
    component: My2
  },
  {
    path: '/my3',
    component: My3
  }
]

const router = new Router({
  mode: 'hash',
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

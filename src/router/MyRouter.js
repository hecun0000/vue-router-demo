import History from './History'

export default class Router {
  constructor (options) {
    // hash模式或history模式
    this.mode = options.mode || 'hash'
    // 接收路由表
    this.routes = options.routes || []
    // 将路由表转化为map
    this.routesMap = this.createMap(this.routes)
    // 保存当前路由
    this.history = new History()
    this.init()
  }
  // 将路由表转化为map
  createMap (routes) {
    return routes.reduce((memo, current) => {
      memo[current.path] = current.component
      return memo
    }, {})
  }
  // 判断是不是hash路由
  isHashMode () {
    return this.mode === 'hash'
  }
  // 初始化方法，绑定监听事件
  init () {
    if (this.isHashMode()) {
      // hash模式
      this.initHash()
    } else {
      // history模式
      this.initHistory()
    }
  }
  // hash模式绑定监听事件
  initHash () {
    !location.hash && (location.hash = '/')
    window.addEventListener('load', () => {
      this.history.current = location.hash.slice(1)
    })
    window.addEventListener('hashchange', () => {
      this.history.current = location.hash.slice(1)
    })
  }
  // history模式绑定监听事件
  initHistory () {
    !location.pathname && (location.pathname = '/')
    window.addEventListener('load', () => {
      this.history.current = location.pathname
    })
    window.addEventListener('popstate', () => {
      this.history.current = location.pathname
    })
  }
  // 前进后退方法
  go (n) {
    window.history.go(n)
  }
  // 路由跳转
  push (path) {
    if (!this.isHashMode()) {
      // history模式
      history.pushState({ }, '', path)
      this.history.current = path
    } else {
      // hash模式
      window.location.hash = path
    }
  }
}

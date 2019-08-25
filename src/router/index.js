import RouterView from './components/RouterView'
import RouterLink from './components/RouterLink'
import Router from './MyRouter'
Router.install = function (Vue) {
  Vue.mixin({
    beforeCreate () {
      if (this.$options && this.$options.router) { // 根实例
        this._root = this
        this._router = this.$options.router
        Vue.util.defineReactive(this, '$history', this._router.history)
      } else {
        // 拿取父组件的_root
        this._root = this.$parent._root
      }

      Object.defineProperty(this, '$router', { // router 的实例
        get () {
          return this._root._router
        }
      })

      Object.defineProperty(this, '$route', {
        get () {
          return {
            current: this._root.$history.current
          }
        }
      })
    }
  })
  // 全局注册组件
  Vue.component('RouterView', RouterView)
  Vue.component('RouterLink', RouterLink)
}

export default Router

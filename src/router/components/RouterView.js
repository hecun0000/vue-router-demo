export default {
  name: 'RouterView',
  render (h) {
    // 当前路由
    let current = this._root._router.history.current
    // 路由map对象
    let routesMap = this._root._router.routesMap
    return (
      h(routesMap[current])
    )
  }
}

<template>
  <div id="app">
    <div>使用router-link：</div>
    <p>
      <router-link to='/my1'> 灶门祢豆子1</router-link>
      <router-link to='/my2'> 灶门祢豆子2</router-link>
      <router-link to='/my3'> 灶门祢豆子3</router-link>
      <router-link to='/'>首页</router-link>
    </p>

    <div>使用$route.push：</div>
    <p>
      <button @click="handleClick('/')">跳转首页</button>
      <button @click="handleClick('/my1')">跳转灶门祢豆子1</button>
      <button @click="handleClick('/my2')">跳转灶门祢豆子2</button>
      <button @click="handleClick('/my3')">跳转灶门祢豆子3</button>
    </p>

    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    handleClick (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  height: 60vh;
}
a, button{
  margin-right: 8px
}
</style>

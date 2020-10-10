<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    beforeRouteEnter(to, from, next) {
      console.log('组件内的守卫', '无法访问到this')
      next(vm => {
        console.log(vm)
      }) 
    },
    beforeRouteUpdate(to, from, next) {
      console.log('路由更新后')
    }
  }
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

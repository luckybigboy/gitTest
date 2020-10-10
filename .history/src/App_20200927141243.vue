<template>
  <div id="app">
    <div class="loading">加载中...</div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
  import router from './router'
  import { mapState } from 'vuex'
  export default {
    data() {
      return {

      }
    },
    computed: {
      ...mapState(['user'])
    },
    created() {
      console.log(this.user)
      this.onLogin()
    },
    methods: {
      onLogin() {
        router.beforeEach((to, from, next) => {
          if(to.path === '/about' && this.user.isLogin) {
            console.log('还未登录')
            next({
              path:'/login',
              replace: true
            })
          } else {
            next()
          }
        })
      }
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

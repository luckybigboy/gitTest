<template>
  <div id="app">
    <div class="loading" v-if="user.isLoading">加载中...</div>
    <template v-else>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <transition name="fade">
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </template>
  </div>
</template>
<script>
import router from "./router";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["user"])
  },
  created() {
    console.log(this.user);
    // this.onLogin();
  },
  methods: {
    onLogin() {
      router.beforeEach((to, from, next) => {
        console.log("to", to);
        if (to.path === "/about" && this.user.isLogin) {
          console.log("还未登录");
          next({
            path: "/login",
            replace: true
          });
        } else {
          next();
        }
      });
    }
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
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

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>HelloWorld页面</div>
    <router-link :to="{path: `/helloworld/${$route.params.type}/superPush`}">superPush</router-link>
    <router-link :to="{path: `/helloworld/${$route.params.type}/memberShip`}">memberShip</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
  },
  created() {
    console.log(this.$route)
    console.log('页面创建')
  },
  beforeRouteEnter(to, from, next) {
    console.log('to', to)
    next(vm => {
      console.log(vm.setData())
    })
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to)
    console.log(from)
    console.log(next)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

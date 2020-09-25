<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>HelloWorld页面</div>

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    toPage() {
      // this.$router.push({path: `/helloworld/${this.$route.params.type}/memberShip`})
    }
  },
  created() {
    console.log(this.$route)
    console.log('页面创建')
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

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    111111111
    <button @click="toPage">跳转</button> 
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
      this.$router.push({path: '/helloworld/sendMessage'})
    }
  },
  created() {
    console.log(this.$route)
    console.log('页面创建')
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

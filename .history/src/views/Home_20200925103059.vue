<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="toPage">跳转</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  methods: {
    toPage() {
      this.$router.push({path:"/helloworld",query:{key: []}})
    }
  }
};
</script>

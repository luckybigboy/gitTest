<template>
  <div class="home">
    <button @click="toPage">跳转</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    toPage() {
      this.$router.push({path:"/helloworld:",query:{key: [123, 2323]}})
    }
  }
};
</script>

<template>
  <div class="home">
    <button @click="toPage('member')">member</button>
    <button @click="toPage('member')">sendMessage</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    toPage() {
      this.$router.push({path:"/helloworld/member",query:{key: [123, 2323]}})
    }
  }
};
</script>

<template>
  <div class="home">
    <button @click="toPage('member')">member</button>
    <button @click="toPage('sendMessage')">sendMessage</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    toPage(type) {
      let url
      switch(type) {
        case 'member': url = {path:"/helloworld/member",query:{key: [123, 2323]}}; break;
        case 'sendMessage': url = {path: '/helloworld/sendMessage', query: {listArr: [111, 222, 333]}}; break;
      }
      this.$router.push(url)
    }
  }
};
</script>

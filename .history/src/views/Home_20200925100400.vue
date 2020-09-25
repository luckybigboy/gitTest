<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="toPage">跳转</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>

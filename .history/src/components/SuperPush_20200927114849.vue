<template>
    <div class="super-push">
           SuperPush这个添加的文字， 物以类聚，人以群分
    </div>  
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: "SuperPush",
  data() {
    return {

    };
  },
  computed: {
    ...mapState(['user'])
  }
};
</script>
<style lang="scss" scoped>
</style>
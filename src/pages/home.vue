<template>
  <div class="home">
    <h1>PJ34 管理画面</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
  data() {
    return {
      slide: 0,
      sliding: false,
    }
  },
})
</script>

<style scoped>
.carousel {
  width: 1080px;
  margin: 20px auto;
  text-align: center;
}
</style>

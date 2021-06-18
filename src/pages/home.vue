<template>
  <div class="home">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
  data() {
    return {
      title: 'PJ34 管理画面'
    }
  },
  async created() {
    await this.$emit('catchTitle', this.title)
  }
})
</script>

<style lang="scss" scoped>
</style>

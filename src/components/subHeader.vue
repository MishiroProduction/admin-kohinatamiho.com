<template>
  <div class="subHeader">
    <header>
      <h5>{{ subTitle }}</h5>
    </header>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SubHeader',
  props: {
    subTitle: {
      type: String,
      default: '',
    },
  }
})
</script>

<style lang="scss" scoped>
  .subHeader{
    text-align: left;
    padding: 5px;
  }
</style>
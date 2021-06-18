<template>
  <div class="header">
    <header>
      <h3>{{ title }}</h3>
    </header>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Header',
  props: {
    title: {
      type: String,
      default: '',
    },
  }
})
</script>

<style lang="scss" scoped>
  header{
    text-align: left;
    color: #fff;
    padding: 5px;
    background-color: #527b8e;
  }
</style>
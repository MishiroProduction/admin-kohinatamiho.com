<template>
  <div id="app">
    <base-view />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import BaseView from './layouts/base-view.vue'

export default Vue.component('App', {
  components: {
    BaseView,
  },
})
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  @media ( min-width : 200px ) {
    #app {
      display: -webkit-flex;
      display: flex;
      align-items: baseline;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .content-wrap {
      margin: 0 10px 0 0;
    }
  }
}
</style>
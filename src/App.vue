<template>
  <div id="app" v-if="!loading">
    <base-view />
    <router-view />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import BaseView from './layouts/base-view.vue'

export default Vue.component('App', {
  data() {
    return {
      loading: false,
    }
  },
  components: {
    BaseView,
  },
})
</script>

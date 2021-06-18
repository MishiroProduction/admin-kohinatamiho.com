<template>
  <div class="table-wrapper">
    <table class="table">
      <tr v-for="(val, key) in content" :key="key">
        <td>{{ val.head }}</td>
        <td>{{ val.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NoBorderTable',
  props: {
    content: {
      type: Array,
      default: [],
    },
  },
})
</script>

<style lang="scss" scoped>
.table-wrapper {
  table {
    width: 50%;
    margin: auto;
    td {
      padding: 5px 0;
      border: none;
    }
  }
}
</style>
<template>
  <div class="table-wrap">
    <table class="table">
      <thead>
        <tr>
          <th v-if="checkBoxFlag">☑</th>
          <th v-for="(val, key) in head" :key="key">{{ val.name }}</th>
        </tr>
      </thead>
      <tr v-for="(val, key) in tableContent" :key="key">
        <td v-if="checkBoxFlag"><input type="checkbox" /></td>
        <td v-for="(items, key) in val" :key="key">
          <router-link v-if="items.key === 'id' && !items.link" class="id" :to="$route.path + '/show/' + items.value">
            {{ items.value }}
          </router-link>
          <router-link v-else-if="items.key === 'id' && items.link" class="id" :to="items.meta.path">
            {{ items.value }}
          </router-link>
          <router-link v-else-if="items.link" :to="items.meta.path">
            {{ items.value }}
          </router-link>
          <a href="#" v-else-if="items.pullDown" @click="pullDown(items.data)">{{ items.value }}</a>
          <span v-else>
            {{ items.value }}
         </span>
        </td>
      </tr>
    </table>
    <div v-if="pullDownActive">
      <table>
        <thead>
        <tr>
          <th v-for="(item, key) in pullDownData" :key="key">{{ item.head }}</th>
        </tr>
        </thead>
        <tr>
          <td v-for="(item, key) in pullDownData" :key="key">{{item.val}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Table',
  props: {
    head: {
      type: Array,
      default: [],
    },
    tableContent: {
      type: Array,
      default: [],
    },
    checkBoxFlag: {
      type: Boolean,
    },
  },
  data() {
    return {
      pullDownActive: false,
      pullDownData: [] as object[],
    }
  },
  methods: {
    pullDown(data: object[]) {
      if (!this.pullDownActive) {
        this.pullDownActive = true
        this.pullDownData = data
      } else {
        this.pullDownActive = false
        this.pullDownData = []
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.table-wrap {
  padding: 0 10px;
  .table {
    margin: auto;
    position: sticky;
    border-collapse: collapse;
    th {
      border:1px solid #000066;
    }
    td {
      a {
        text-decoration: none;
      }
      border:1px solid #000066;
    }
  }
}
</style>
<template>
  <div class="search-form-frame">
    <div class="search-form-wrapper">
      <div class="search-form" @reset="handleReset">
        <b-form>
          <b-form-group v-for="(val, key) in form" :key="key" :label="val.label" :label-for="val.id" content-cols-lg="7">
            <b-form-input v-if="val.type === 'input'" :id="val.id" v-model="val.value"/>
            <b-form-datepicker v-if="val.type === 'datepicker'" :id="val.id" v-model="val.value" />
            <b-form-timepicker v-if="val.type === 'timepicker'" :id="val.id" v-model="val.value" show-seconds />
            <b-form-select v-if="val.type === 'select'" :id="val.id" v-model="val.value">
              <b-form-select-option v-for="(optionValue, k) in val.options" :key="k" :value="optionValue">{{ optionValue }}</b-form-select-option>
            </b-form-select>
          </b-form-group>
          <div class="btn-wrapper">
            <b-button class="btn submit-btn">検索</b-button>
            <b-button class="btn reset-btn" type="reset">クリア</b-button>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SearchForm',
  props: {
    form: {
      type: Array,
      default: [],
    },
  },
  methods: {
    handleReset(event: { preventDefault: () => void}) {
      event.preventDefault()
      interface formValueType {
        id: string
        label: string
        type: string
        value: string | null
        options: string[]
      }

      this.$props.form.forEach((val: formValueType) => {
        val.value = null
      })
    }
  },
})
</script>

<style lang="scss" scoped>
.search-form-frame {
  .search-form-wrapper {
    text-align: left;
    margin: 10px;
    width: 120%;
    .search-form {
      padding: 20px;
    }
    .btn-wrapper{
      text-align: center;
      margin: 20px;
    }
  }
}
</style>
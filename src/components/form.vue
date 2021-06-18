<template>
  <div class="form-wrapper">
    <div class="annotation">
      ※印の項目は、必須入力項目です。
    </div>
    <b-form>
      <b-form-group v-for="(val, key) in form" :key="key" :label="val.label" :label-for="val.id" content-cols-lg="7">
        <b-form-input v-if="val.type === 'input' && val.meta.disabled" :id="val.id" v-model="val.value" disabled/>
        <b-form-input v-else-if="val.type === 'input' && val.meta.required" :id="val.id" v-model="val.value" required/>
        <b-form-input v-else-if="val.type === 'input'" :id="val.id" v-model="val.value"/>
        <b-form-datepicker v-if="val.type === 'datepicker'" :id="val.id" v-model="val.value" />
        <b-form-datepicker v-else-if="val.type === 'datepicker' && val.meta.disabled" :id="val.id" v-model="val.value" disabled />
        <b-form-datepicker v-else-if="val.type === 'datepicker' && val.meta.required" :id="val.id" v-model="val.value" required/>
        <b-form-timepicker v-if="val.type === 'timepicker'" :id="val.id" v-model="val.value" show-seconds />
        <b-form-timepicker v-else-if="val.type === 'timepicker' && val.meta.disabled" :id="val.id" v-model="val.value" show-seconds disabled />
        <b-form-timepicker v-else-if="val.type === 'timepicker' && val.meta.required" :id="val.id" v-model="val.value" show-seconds required/>
        <b-form-select v-if="val.type === 'select'" :id="val.id" v-model="val.value">
          <b-form-select-option v-for="(optionValue, k) in val.options" :key="k" :value="optionValue">{{ optionValue }}</b-form-select-option>
        </b-form-select>
        <b-form-select v-else-if="val.type === 'select' && val.meta.disabled" :id="val.id" v-model="val.value" disabled >
          <b-form-select-option v-for="(optionValue, k) in val.options" :key="k" :value="optionValue">{{ optionValue }}</b-form-select-option>
        </b-form-select>
        <b-form-select v-else-if="val.type === 'select' && val.meta.required" :id="val.id" v-model="val.value" required>
          <b-form-select-option v-for="(optionValue, k) in val.options" :key="k" :value="optionValue">{{ optionValue }}</b-form-select-option>
        </b-form-select>
        <b-form-textarea v-if="val.type === 'textarea'" :id="val.id" v-model="val.value" />
        <b-form-textarea v-else-if="val.type === 'textarea' && val.meta.disabled" :id="val.id" v-model="val.value" disabled />
        <b-form-textarea v-else-if="val.type === 'textarea' && val.meta.required" :id="val.id" v-model="val.value" required/>
        <b-form-file v-if="val.type === 'file'" :id="val.id" v-model="val.value"/>
        <b-form-file v-else-if="val.type === 'file' && val.meta.disabled" :id="val.id" v-model="val.value"/>
        <b-form-file v-else-if="val.type === 'file' && val.meta.required" :id="val.id" v-model="val.value"/>
      </b-form-group>
      <div class="btn-wrapper">
        <b-button v-if="formType === 'create'" class="btn submit-btn" @click="handleSubmit">登録</b-button>
        <b-button v-else-if="formType === 'edit'" class="btn submit-btn" @click="handleSubmit">更新</b-button>
        <b-button class="btn reset-btn" @click="handleGoBack">キャンセル</b-button>
      </div>
    </b-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Form',
  props: {
    form: {
      type: Array,
      default: [],
    },
    backUrl: {
      type: String,
      default: '',
    },
    formType: {
      type: String,
      default: '',
    },
    redirectTo: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleGoBack() {
      this.$router.push(this.$props.backUrl)
    },
    handleSubmit() {
      this.$router.push(this.$props.redirectTo)
    }
  },
})
</script>

<style lang="scss" scoped>
.form-wrapper {
  text-align: left;
  width: 60%;
  margin: auto;
  .annotation{
    margin: 0 0 30px 0;
    text-align: left;
    color: red;
  }
  .btn-wrapper{
    padding: 20px;
    text-align: center;
  }
}
</style>
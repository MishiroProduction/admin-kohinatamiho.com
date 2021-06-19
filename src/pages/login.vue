<template>
  <div class="login">
    <b-container>
      <b-card class="mb-2" style="width: 500px; margin: 70px auto auto;">
        <h4 class="text-center">
          Please Login
        </h4>
        <b-form @submit.prevent="handleLogin">
          <b-input-group class="mb-2" size="sm">
            <b-input-group-prepend is-text>
              <b-icon icon="person-fill" />
            </b-input-group-prepend>
            <b-input type="text" placeholder="Mail Address" v-model="mailAddress" :disabled="submitting" />
          </b-input-group>
          <b-input-group class="mb-2" size="sm">
            <b-input-group-prepend is-text>
              <b-icon icon="shield-lock-fill" />
            </b-input-group-prepend>
            <b-input type="password" placeholder="Password" v-model="password" :disabled="submitting" />
          </b-input-group>
          <div class="text-center">
            <b-button type="submit" variant="primary">LOGIN</b-button>
          </div>
        </b-form>
      </b-card>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UserVuexModule from '../store/UserModule'

export default Vue.extend({
  name: 'Login',
  data() {
    return {
      mailAddress: '',
      password: '',
      submitting: false,
    }
  },
  methods: {
    async handleLogin() {
      this.submitting = true
      await UserVuexModule(this.$store).loginAction({
        mail_address: this.mailAddress,
        password: this.password,
      })
      this.submitting = false
      await this.$router.push('/')
    },
  },
})
</script>

<style scoped></style>

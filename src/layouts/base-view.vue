<template>
  <div>
    <guest-nav v-if="!isLogin" />
    <auth-nav v-if="isLogin" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import GuestNav from './partials/navbar/guest-nav.vue'
import AuthNav from './partials/navbar/auth-nav.vue'
import UserVuexModule from '../store/UserModule'

export default Vue.extend({
  name: 'BaseView',
  data() {
    return {
      isLogin: false,
    }
  },
  components: {
    GuestNav,
    AuthNav,
  },
  async created() {
    await this.loading = true
    try {
      await UserVuexModule(this.$store).isLoginCheckAction()
    } catch {
      await this.loading = false
    }
    await this.loading = false
  },
})
</script>

<style scoped>

</style>

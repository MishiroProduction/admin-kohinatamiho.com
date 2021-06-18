<template>
  <div v-if="isLogin && isLayout">
    <Header :title="title"/>
    <SubHeader :sub-title="subTitle"/>
    <div class="content-wrapper">
      <router-view @catchTitle="renderTitle" class="content"/>
    </div>
    <Footer />
  </div>
  <div v-else>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '../components/header.vue'
import SubHeader from '../components/subHeader.vue'
import Footer from '../components/footer.vue'
import UserVuexModule from '../store/UserModule'

export default Vue.extend({
  name: 'BaseView',
  data() {
    return {
      title: '',
      subTitle: '',
      isLogin: false,
      isLayout: false,
    }
  },
  components: {
    Header,
    SubHeader,
    Footer,
  },
  async created() {
    if (!UserVuexModule(this.$store).isLogin) {
      await this.$router.push('/login')
      this.isLogin = false
    } else {
      this.isLogin = true
    }
  },
  methods: {
    renderTitle(title: string, subTitle = '') {
      this.title = title
      this.subTitle = subTitle
    }
  },
})
</script>

<style scoped>

</style>

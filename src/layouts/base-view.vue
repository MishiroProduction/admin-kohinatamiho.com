<template>
  <div v-if="isLogin && isLayout">
    <Sidebar />
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
import Sidebar from './partials/sidebar/sidebar.vue'
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
    Sidebar,
  },
  async created() {
    await UserVuexModule(this.$store).isLoginCheckAction();
    this.isLogin = UserVuexModule(this.$store).isLogin;
  },
  async updated() {
    await UserVuexModule(this.$store).isLoginCheckAction();
    this.isLayout = this.$route.meta.layout
    this.isLogin = UserVuexModule(this.$store).isLogin
  },
  methods: {
    renderTitle(title: string, subTitle = '') {
      this.title = title
      this.subTitle = subTitle
    }
  },
})
</script>

<style lang="scss" scoped>
.content-wrapper {
  .content{
    margin: auto 100px;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>

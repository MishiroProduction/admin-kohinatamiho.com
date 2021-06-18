import Vue from 'vue'
import Router from 'vue-router'
import createStore from '../store/store'
import UserVuexModule from '../store/UserModule'

Vue.use(Router)

export function createRouter(): Router {
  const store = createStore()
  const router = new Router({
    routes: [
      {
        path: '/',
        name: 'home',
        component: async () => await import('../pages/home.vue'),
        meta: {
          auth: true,
          layout: true,
        },
      },
      {
        path: '/login',
        name: 'login',
        component: async () => await import('../pages/login.vue'),
        meta: {
          auth: false,
          layout: false,
        },
      },
    ],
    mode: 'history',
  })
  router.beforeEach((to, from, next) => {
    if (to.meta.auth) {
      UserVuexModule(store)
        .isLoginCheckAction()
        .then(() => {
          if (!UserVuexModule(store).isLogin) {
            next({ path: '/login' })
          }
          next()
        })
        .catch(() => {
          next({ path: '/login' })
        })
    } else {
      next()
    }
  })
  return router
}

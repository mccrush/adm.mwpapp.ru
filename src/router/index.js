import { createRouter, createWebHistory } from 'vue-router'
import { dataPages as routes } from './../data/dataPages'
import store from './../store'

const router = createRouter({
  history: createWebHistory(),
  routes,
})





router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters.isLoggedIn
  //console.log('isLoggedIn =', isLoggedIn);

  if (isLoggedIn) {
    if (to.name !== 'login') {
      store.commit('setViewPage', to.path)
    }
    next()
  } else {
    if (to.name === 'login') {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
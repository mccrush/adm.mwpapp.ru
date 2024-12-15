import './scss/styles.scss'
import { Dropdown } from 'bootstrap'
//import { dataModels } from './data/dataModels'

import { supabase } from './supabase/adminAuthClient'

import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'

let app

if (!app) {
  app = createApp(App).use(store).use(router).mount('#app')
}

console.log('main.js: App is run')

const { data } = supabase.auth.onAuthStateChange((event, session) => {
  console.log(event)
  if (event === 'SIGNED_IN') {
    store.commit('setAuthData', { type: 'userId', data: session.user.id })
    store.dispatch('getItems', { type: 'users' })
    router.push(store.getters.viewPage)
  } else if (event === 'SIGNED_OUT') {
    store.commit('setAuthData', { type: 'userId', data: null })
    router.push('login')
  } else if (event === 'TOKEN_REFRESHED') {
    //store.commit('setViewPage', store.getters.viewPage)
  }
})
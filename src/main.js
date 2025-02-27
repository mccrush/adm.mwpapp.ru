import './scss/styles.scss'
import { Dropdown } from 'bootstrap'
//import { dataModels } from './data/dataModels'

import { supabase } from './supabase/adminAuthClient'

import { createApp } from 'vue'
import store from './store'
import App from './App.vue'

let app

if (!app) {
  app = createApp(App).use(store).mount('#app')
}

console.log('main.js: App is run')

const { data } = supabase.auth.onAuthStateChange((event, session) => {
  console.log(event)
  if (event === 'SIGNED_IN') {
    if (!store.getters.userId) store.commit('setAuthData', { type: 'userId', data: session.user.id })
    if (!store.getters.users.length) store.dispatch('getItems', { type: 'users' })
  } else if (event === 'SIGNED_OUT') {
    store.commit('setAuthData', { type: 'userId', data: null })
  } else if (event === 'TOKEN_REFRESHED') {
    //store.commit('setViewPage', store.getters.viewPage)
  }
})
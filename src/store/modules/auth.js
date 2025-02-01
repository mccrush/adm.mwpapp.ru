import { supabase } from './../../supabase/adminAuthClient'

export default {
  state: {
    userId: null
  },

  mutations: {
    setAuthData(state, { type, data }) {
      state[type] = data
    }
  },

  actions: {
    // Авторизация
    async logIn({ commit }, { email, password }) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        if (error) throw error
        return true
      } catch (error) {
        console.error('auth.js logIn()', error)
      }

    },

    async logOut() {
      try {
        const { error } = await supabase.auth.signOut()
        if (error) throw error
      } catch (error) {
        console.error(error)
      }
    },
  },

  getters: {
    isLoggedIn: (state) => state.userId !== null
  }
}
import { supabase } from './../../supabase/adminAuthClient'

export default {
  state: {
    loadingData: false,
    users: []
  },

  mutations: {
    setItems(state, { type, items }) {
      state[type] = items
      //console.log('getItems() state[type] =', state[type]);
    },
    setLoadingData(state, value) {
      state.loadingData = value
    },
  },

  actions: {
    async deleteItem({ commit }, { item }) {
      try {
        commit('setLoadingData', true)
        if (error) throw error
      } catch (error) {
        console.error('database.js deleteItem()', error)
      } finally {
        commit('setLoadingData', false)
      }
    },

    async updateItem({ commit }, { userId, metadata }) {
      try {
        commit('setLoadingData', true)
        const { data: user, error } = await supabase.auth.admin.updateUserById(
          userId,
          { user_metadata: metadata }
        )

        if (error) throw error
      } catch (error) {
        console.error('database.js updateItem()', error)
      } finally {
        commit('setLoadingData', false)
      }
    },

    async addItem({ commit }, { item }) {
      try {
        commit('setLoadingData', true)
        if (error) throw error
      } catch (error) {
        console.error('database.js addItem()', error)
      } finally {
        commit('setLoadingData', false)
      }
    },

    async getItems({ commit }, { type }) {
      try {
        commit('setLoadingData', true)
        const { data: { users }, error } = await supabase.auth.admin.listUsers()

        if (error) throw error
        //console.log('getItems() users =', users);
        if (users) {
          commit('setItems', { type, items: users })
        }
      } catch (error) {
        console.error('database.js getItems()', error)
      } finally {
        commit('setLoadingData', false)
      }
    }
  },

  getters: {
    loadingData: state => state.loadingData,
    users: state => state.users
  }
}
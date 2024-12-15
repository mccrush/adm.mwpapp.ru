import { supabase } from './../../supabase/adminAuthClient'

export default {
  state: {
    loading: false,
    users: []
  },

  mutations: {
    setItems(state, { type, items }) {
      state[type] = items
      //console.log('getItems() state[type] =', state[type]);
    }
  },

  actions: {
    async deleteItem({ commit }, { item }) {
      try {

        if (error) throw error
      } catch (error) {
        console.error('database.js deleteItem()', error)
      }
    },

    async updateItem({ commit }, { itemId, metadata }) {
      try {
        const { data: user, error } = await supabase.auth.admin.updateUserById(
          itemId,
          { user_metadata: { metadata } }
        )

        if (error) throw error
      } catch (error) {
        console.error('database.js updateItem()', error)
      }
    },

    async addItem({ commit }, { item }) {
      try {

        if (error) throw error
      } catch (error) {
        console.error('database.js addItem()', error)
      }
    },

    async getItems({ commit }, { type }) {
      try {
        const { data: { users }, error } = await supabase.auth.admin.listUsers()

        if (error) throw error
        //console.log('getItems() users =', users);
        if (users) {
          commit('setItems', { type, items: users })
        }
      } catch (error) {
        console.error('database.js getItems()', error)
      }
    }
  },

  getters: {
    loading: state => state.loading,
    users: state => state.users
  }
}
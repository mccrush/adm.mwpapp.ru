import { createStore } from 'vuex'
import auth from './modules/auth'
import super_admin from './modules/super_admin'
import routing from './modules/routing'

export default createStore({
  modules: {
    auth,
    super_admin,
    routing
  }
})
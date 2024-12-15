export default {
  state: {
    viewPage: localStorage.getItem('mw-viewPage') || '/',
  },
  mutations: {
    setViewPage(state, viewPage) {
      state.viewPage = viewPage
      localStorage.setItem('mw-viewPage', viewPage)
    },
  },

  getters: {
    viewPage: state => state.viewPage
  }
}
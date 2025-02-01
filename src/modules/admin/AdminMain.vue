<template>
  <div>
    <TheNavbar>
      <FormSearch v-model:searchText="searchText" />
    </TheNavbar>
    <div class="container">
      <div class="row text-center">
        <div class="col-6">Всего: {{ lengthUsers }}</div>
        <div class="col-6">Pro: {{ lengthProUsers }}</div>
      </div>

      <ListMain :items="searchUsers" />
    </div>
  </div>
</template>

<script>
import TheNavbar from './../../components/interface/TheNavbar.vue'
import FormSearch from './components/forms/FormSearch.vue'
//import TableMain from './components/table/TableMain.vue'
import ListMain from './components/list/ListMain.vue'

export default {
  name: 'AdminMain',
  components: { TheNavbar, FormSearch, ListMain },
  data() {
    return {
      searchText: ''
    }
  },
  computed: {
    users() {
      return this.$store.getters.users
    },
    searchUsers() {
      if (this.searchText) {
        return this.users.filter(item =>
          item.email.toUpperCase().includes(this.searchText.toUpperCase())
        )
      }
      return this.users
    },
    lengthUsers() {
      return this.users.length
    },
    lengthProUsers() {
      return this.users.filter(item => item.user_metadata.proStatus).length
    }
  }
}
</script>
<template>
  <div>
    <TheNavbar>
      <FormSearch v-model:searchText="searchText" />
    </TheNavbar>

    <div class="container">
      <div class="row text-center mt-2">
        <div class="col-6">
          <select class="form-select form-select-sm" v-model="sort">
            <option value="null" selected>Сортировка</option>
            <option
              v-for="sort in dataSortTypes"
              :key="sort.sortBy"
              :value="sort"
            >
              {{ sort.title + ' ' + sort.icon }}
            </option>
          </select>
        </div>
        <div class="col-6">Filter</div>
      </div>
      <!-- <div>
        <pre>{{ sort }}</pre>
      </div> -->
      <div class="row text-center p-2">
        <div class="col-6">Всего: {{ lengthUsers }}</div>
        <div class="col-6">Pro: {{ lengthProUsers }}</div>
      </div>

      <ListMain :items="sortUsers" />
    </div>
  </div>
</template>

<script>
import { sortMethod3 } from './helpers/sortMethod3'
import { dataSortTypes } from './helpers/dataSortTypes'
import { dataFilterTypes } from './helpers/dataFilterTypes'

import TheNavbar from './../../components/interface/TheNavbar.vue'
import FormSearch from './components/forms/FormSearch.vue'
//import TableMain from './components/table/TableMain.vue'
import ListMain from './components/list/ListMain.vue'

export default {
  name: 'AdminMain',
  components: { TheNavbar, FormSearch, ListMain },
  data() {
    return {
      dataSortTypes,
      dataFilterTypes,
      searchText: '',
      sort: {
        title: 'Email',
        sortBy: 'email',
        sortUp: 'asc',
        icon: '🔼'
      }
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
    sortUsers() {
      if (this.sort) {
        return sortMethod3(this.searchUsers, this.sort.sortUp, this.sort.sortBy)
      }
      return this.searchUsers
    },
    lengthUsers() {
      return this.users.length
    },
    lengthProUsers() {
      return this.users.filter(item => item.user_metadata.dateEndPro).length
    }
  }
}
</script>
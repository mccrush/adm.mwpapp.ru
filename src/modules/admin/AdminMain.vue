<template>
  <div>
    <TheNavbar>
      <FormSearch v-model:searchText="searchText" />
    </TheNavbar>

    <div class="container">
      <FormFilter
        v-model:filterType="filterType"
        :lengthUsers="lengthUsers"
        :lengthNAUsers="lengthNAUsers"
        :lengthAUsers="lengthAUsers"
        :lengthProUsers="lengthProUsers"
      />

      <FormSort v-model:sortBy="sortBy" v-model:sortUp="sortUp" />

      <ListMain :items="sortUsers" />

      <!-- <small>
        <pre>{{ sortUsers }}</pre>
      </small> -->
    </div>
  </div>
</template>

<script>
import { sortMethod3 } from './helpers/sortMethod3'
import { dataSortTypes } from './helpers/dataSortTypes'
import { dataFilterTypes } from './helpers/dataFilterTypes'

import TheNavbar from './../../components/interface/TheNavbar.vue'
import FormSearch from './components/forms/FormSearch.vue'
import FormFilter from './components/forms/FormFilter.vue'
import FormSort from './components/forms/FormSort.vue'

import ListMain from './components/list/ListMain.vue'
import BtnAllText from './../../components/buttons/BtnAllText.vue'

export default {
  name: 'AdminMain',
  components: {
    TheNavbar,
    FormSearch,
    FormFilter,
    FormSort,
    ListMain,
    BtnAllText
  },
  data() {
    return {
      dataSortTypes,
      dataFilterTypes,
      searchText: '',
      filterType: 'active',
      sortBy: 'email',
      sortUp: 'asc'
    }
  },
  computed: {
    users() {
      return this.$store.getters.users
    },

    filterUsers() {
      if (this.filterType === 'active') {
        return this.users.filter(item => item.last_sign_in_at)
      } else if (this.filterType === 'noactive') {
        return this.users.filter(item => !item.last_sign_in_at)
      } else if (this.filterType === 'pro') {
        return this.users.filter(item => item.user_metadata.dateEndPro)
      }
      return this.users
    },

    searchUsers() {
      if (this.searchText) {
        return this.filterUsers.filter(item =>
          item.email.toUpperCase().includes(this.searchText.toUpperCase())
        )
      }
      return this.filterUsers
    },

    sortUsers() {
      return sortMethod3(this.searchUsers, this.sortUp, this.sortBy)
    },

    lengthUsers() {
      return this.users.length
    },
    lengthNAUsers() {
      return this.users.filter(item => !item.last_sign_in_at).length
    },
    lengthAUsers() {
      return this.users.filter(item => item.last_sign_in_at).length
    },
    lengthProUsers() {
      return this.users.filter(item => item.user_metadata.dateEndPro).length
    }
  }
}
</script>
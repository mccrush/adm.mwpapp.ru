<template>
  <div>
    <TheNavbar>
      <FormSearch v-model:searchText="searchText" />
    </TheNavbar>

    <div class="container">
      <div class="row text-center mt-2">
        <!-- <div class="col-5 ps-2">
          <select class="form-select form-select-sm" v-model="sort">
            <option
              v-for="sort in dataSortTypes"
              :key="sort.sortBy"
              :value="sort"
            >
              {{ sort.title + ' ' + sort.icon }}
            </option>
          </select>
        </div> -->
        <div class="col-5 ps-1 pe-1">
          <select class="form-select form-select-sm" v-model="sortBy">
            <option value="email">email</option>
            <option value="last_sign_in_at">last_sign_in_at</option>
          </select>
        </div>
        <div class="col-2 ps-1">
          <select class="form-select form-select-sm" v-model="sortUp">
            <option value="asc">asc</option>
            <option value="desc">desc</option>
          </select>
        </div>
      </div>
      <!-- <div>
        <pre>{{ sort }}</pre>
      </div> -->

      <!-- <div class="row text-center small p-2">
        <div class="col-3">All: {{ lengthUsers }}</div>
        <div class="col-3">NA: {{ lengthNAUsers }}</div>
        <div class="col-3">A: {{ lengthAUsers }}</div>
        <div class="col-3">Pro: {{ lengthProUsers }}</div>
      </div> -->

      <div class="btn-group btn-group-sm w-100 mt-2 mb-2">
        <BtnAllText
          class="w-25"
          :class="{ active: filterType === 'all' }"
          @click="filterType = 'all'"
          >All: {{ lengthUsers }}</BtnAllText
        >
        <BtnAllText
          class="w-25"
          :class="{ active: filterType === 'noactive' }"
          @click="filterType = 'noactive'"
          >NA: {{ lengthNAUsers }}</BtnAllText
        >
        <BtnAllText
          class="w-25"
          :class="{ active: filterType === 'active' }"
          @click="filterType = 'active'"
          >A: {{ lengthAUsers }}</BtnAllText
        >
        <BtnAllText
          class="w-25"
          :class="{ active: filterType === 'pro' }"
          @click="filterType = 'pro'"
          >Pro: {{ lengthProUsers }}</BtnAllText
        >
      </div>

      <ListMain v-model:items="sortUsers" />

      <small>
        <pre>{{ sortUsers }}</pre>
      </small>
    </div>
  </div>
</template>

<script>
import { sortMethod3 } from './helpers/sortMethod3'
import { dataSortTypes } from './helpers/dataSortTypes'
import { dataFilterTypes } from './helpers/dataFilterTypes'

import TheNavbar from './../../components/interface/TheNavbar.vue'
import FormSearch from './components/forms/FormSearch.vue'
import ListMain from './components/list/ListMain.vue'
import BtnAllText from './../../components/buttons/BtnAllText.vue'

export default {
  name: 'AdminMain',
  components: { TheNavbar, FormSearch, ListMain, BtnAllText },
  data() {
    return {
      dataSortTypes,
      dataFilterTypes,
      searchText: '',
      filter: { title: 'Активные', type: 'last_sign_in_at' },
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
      console.log('sortUsers() this.sortBy =', this.sortBy)
      console.log('sortUsers() this.sortUp =', this.sortUp)
      const newarray = sortMethod3(this.searchUsers, this.sortUp, this.sortBy)
      return newarray
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
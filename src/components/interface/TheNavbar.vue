<template>
  <nav class="navbar navbar-expand-md bg-body-tertiary">
    <div class="container-fluid">
      <!-- <a class="navbar-brand" href="#">Navbar</a> -->

      <BtnNavbarCollapse />
      <div
        class="collapse navbar-collapse d-block justify-content-between"
        id="navbarSupportedContent"
      >
        <!-- <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li v-for="page in dataPages" :key="page.id" class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              :to="page.path"
              >{{ page.title }}</router-link
            >
          </li>
        </ul> -->

        <!-- <div>&nbsp;</div> -->
        <FormSearch />

        <BtnAllText v-if="isLoggedIn" @click="logOut">Выйти</BtnAllText>
      </div>
    </div>
  </nav>
</template>

<script>
import { dataPages } from './../../data/dataPages'

import FormSearch from './../forms/FormSearch.vue'
import BtnNavbarCollapse from './../buttons/BtnNavbarCollapse.vue'
import BtnAllText from './../buttons/BtnAllText.vue'

export default {
  components: { FormSearch, BtnNavbarCollapse, BtnAllText },
  data() {
    return {
      dataPages
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('logOut')
    }
  }
}
</script>
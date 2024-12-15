<template>
  <nav class="navbar navbar-expand-md bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li v-for="page in dataPages" :key="page.id" class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              :to="page.path"
              >{{ page.title }}</router-link
            >
          </li>
        </ul>

        <button class="btn btn-light" @click="logOut">Выйти</button>
      </div>
    </div>
  </nav>
</template>

<script>
import { dataPages } from './../../data/dataPages'

export default {
  data() {
    return {
      dataPages
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('logOut')
    }
  }
}
</script>
<template>
  <div class="max-width-720 m-auto shadow-sm rounded vh-100 pb-3">
    <component :is="Component" />
  </div>
</template>

<script>
import PageLogin from './pages/PageLogin.vue'
import PageAdmin from './pages/PageAdmin.vue'

export default {
  components: {
    PageLogin,
    PageAdmin
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
    Component() {
      if (this.isLoggedIn) {
        return 'PageAdmin'
      }
      return 'PageLogin'
    }
  }
}
</script>

<style lang="scss">
@use './scss/common';
</style>
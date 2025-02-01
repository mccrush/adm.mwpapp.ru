<template>
  <nav class="navbar navbar-expand-md bg-body-tertiary">
    <div class="container-fluid d-flex justify-content-between">
      <slot>
        <div>Форма поиска</div>
      </slot>

      <BtnAllText v-if="isLoggedIn" @click="logOut">Выйти</BtnAllText>
    </div>
  </nav>
</template>

<script>
import BtnAllText from './../buttons/BtnAllText.vue'

export default {
  components: { BtnAllText },
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
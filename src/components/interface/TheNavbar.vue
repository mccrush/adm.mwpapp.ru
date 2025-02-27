<template>
  <nav class="bg-body-tertiary border-bottom border-light-subtle p-2 pt-3 pb-3">
    <div class="d-flex justify-content-between">
      <div>
        <slot>
          <div>Форма поиска</div>
        </slot>
      </div>

      <BtnAllText v-if="isLoggedIn" class="text-body-secondary" @click="logOut"
        >LO</BtnAllText
      >
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
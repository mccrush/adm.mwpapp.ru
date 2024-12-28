<template>
  <div>
    <TheNavbar />
    <TemplateTable :items="searchUsers" />
  </div>
</template>

<script>
import TheNavbar from './../../components/interface/TheNavbar.vue'
import TemplateTable from './../../components/templates/TemplateTable.vue'

export default {
  components: {
    TheNavbar,
    TemplateTable
  },
  data() {
    return {
      search: ''
    }
  },
  computed: {
    users() {
      return this.$store.getters.users
    },
    searchUsers() {
      if (this.search) {
        return this.users.filter(item =>
          item.email.toUpperCase().includes(this.search.toUpperCase())
        )
      }
      return this.users
    }
  },
  methods: {}
}
</script>
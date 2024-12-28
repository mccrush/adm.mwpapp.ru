<template>
  <div>
    <TheNavbar>
      <FormSearch v-model:searchText="searchText" />
    </TheNavbar>
    <TemplateTable :items="searchUsers" :lengthProUsers="lengthProUsers" />
  </div>
</template>

<script>
import TheNavbar from './../../components/interface/TheNavbar.vue'
import FormSearch from './../../components/forms/FormSearch.vue'
import TemplateTable from './../../components/templates/TemplateTable.vue'

export default {
  components: {
    TheNavbar,
    FormSearch,
    TemplateTable
  },
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
    lengthProUsers() {
      return this.users.filter(item => item.user_metadata.premium).length
    }
  },
  methods: {}
}
</script>
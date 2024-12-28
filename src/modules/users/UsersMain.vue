<template>
  <div class="container-lg p-3">
    <div class="rounded shadow-sm p-3">
      <TheNavbar>
        <FormSearch v-model:searchText="searchText" />
      </TheNavbar>
      <TemplateTable
        :items="searchUsers"
        :lengthProUsers="lengthProUsers"
        @subscribe-off="subscribeOff"
        @subscribe-on="subscribeOn"
        @premium-off="premiumOff"
      />
    </div>
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
  methods: {
    subscribeOff({ userId }) {
      if (confirm('Точно отключить?')) {
        console.log('S is Off for =', userId)
      }
    },
    subscribeOn({ userId, date }) {
      console.log('S is On for =', userId)
      console.log('To =', date)
    },
    premiumOff({ userId }) {
      if (confirm('Точно отключить?')) {
        console.log('P is Off for =', userId)
      }
    }
  }
}
</script>
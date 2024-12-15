<template>
  <div>
    <TemplateTable :items="users" />
  </div>
</template>

<script>
import TemplateTable from './../../components/templates/TemplateTable.vue'

export default {
  components: {
    TemplateTable
  },
  computed: {
    users() {
      return this.$store.getters.users
    }
  },
  methods: {}
}
</script>
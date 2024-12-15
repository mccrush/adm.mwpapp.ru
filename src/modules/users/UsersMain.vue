<template>
  <div>
    <div>UsersMain</div>
    <div>
      <TemplateTable :items="users" />
    </div>
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
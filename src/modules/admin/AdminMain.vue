<template>
  <div class="border border-2 border-warning p-3">
    <TheNavbar>
      <FormSearch />
    </TheNavbar>
    <h4>AdminMain</h4>
    <TableMain />
  </div>
</template>

<script>
import TheNavbar from './../../components/interface/TheNavbar.vue'
import FormSearch from './components/forms/FormSearch.vue'
import TableMain from './components/table/TableMain.vue'

export default {
  name: 'AdminMain',
  components: { TheNavbar, FormSearch, TableMain }
}
</script>
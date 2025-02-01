<template>
  <div class="border border-2 border-success p-3">
    <h4>ListMain</h4>
    <ListItem v-for="item in items" :item="item" :key="item.id" />
  </div>
</template>

<script>
import ListItem from './ListItem.vue'
export default {
  name: 'ListMain',
  components: {
    ListItem
  },
  props: {
    items: Array
  }
}
</script>
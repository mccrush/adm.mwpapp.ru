<template>
  <div class="input-group me-2">
    <input
      class="form-control"
      placeholder="Search email"
      :value="searchText"
      @input="$emit('update:searchText', $event.target.value)"
    />
    <BtnTrash @click="$emit('update:searchText', '')" />
  </div>
</template>

<script>
import BtnTrash from './../buttons/BtnTrash.vue'
export default {
  name: 'FormSearch',
  components: { BtnTrash },
  props: ['searchText'],
  emits: ['update:searchText']
}
</script>
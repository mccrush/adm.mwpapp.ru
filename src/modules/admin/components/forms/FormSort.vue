<template>
  <div>
    <input
      class="form-control"
      placeholder="Search email"
      :value="searchText"
      @input="$emit('update:searchText', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'FormSort',
  props: ['searchText'],
  emits: ['update:searchText']
}
</script>
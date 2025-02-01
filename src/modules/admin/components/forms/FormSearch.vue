<template>
  <div>
    <input
      class="form-control"
      placeholder="Search"
      :value="searchText"
      @input="$emit('update:searchText', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: ['searchText'],
  emits: ['update:searchText']
}
</script>
<template>
  <div>
    <FormUser :item="user" />
    <ul class="list-group">
      <ListItem
        v-for="item in items"
        :item="item"
        :key="item.id"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasUserForm"
        aria-controls="offcanvasUserForm"
        @click="user = item"
      />
    </ul>
  </div>
</template>

<script>
import FormUser from './../forms/FormUser.vue'
import ListItem from './ListItem.vue'
export default {
  name: 'ListMain',
  components: {
    FormUser,
    ListItem
  },
  props: {
    items: Array
  },
  data() {
    return {
      user: null
    }
  }
  // watch: {
  //   items(n, o) {
  //     console.log('o = ', o)
  //     console.log('n = ', n)
  //   }
  // }
}
</script>
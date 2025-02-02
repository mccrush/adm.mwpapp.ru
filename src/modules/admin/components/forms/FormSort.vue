<template>
  <div class="row text-center small p-2 pt-1">
    <div class="col-7 ps-1 pe-2">
      <div class="btn-group btn-group-sm w-100">
        <BtnAllText
          :class="{ active: sortBy === 'email' }"
          @click="$emit('update:sortBy', 'email')"
          >EM</BtnAllText
        >
        <BtnAllText
          :class="{ active: sortBy === 'created_at' }"
          @click="$emit('update:sortBy', 'created_at')"
          >CA</BtnAllText
        >
        <BtnAllText
          :class="{ active: sortBy === 'last_sign_in_at' }"
          @click="$emit('update:sortBy', 'last_sign_in_at')"
          >LS</BtnAllText
        >
      </div>
    </div>
    <div class="col-5 ps-2 pe-1">
      <div class="btn-group btn-group-sm w-100">
        <BtnAllText
          :class="{ active: sortUp === 'asc' }"
          @click="$emit('update:sortUp', 'asc')"
          >AS</BtnAllText
        >
        <BtnAllText
          :class="{ active: sortUp === 'desc' }"
          @click="$emit('update:sortUp', 'desc')"
          >DS</BtnAllText
        >
      </div>
    </div>
  </div>
</template>

<script>
import BtnAllText from './../../../../components/buttons/BtnAllText.vue'

export default {
  name: 'FormSort',
  components: { BtnAllText },
  props: ['sortBy', 'sortUp'],
  emits: ['update:sortBy', 'update:sortUp']
}
</script>
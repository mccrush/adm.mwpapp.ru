<template>
  <div class="btn-group btn-group-sm w-100 mt-2 mb-2">
    <BtnAllText
      class="w-25"
      :class="{ active: filterType === 'all' }"
      @click="$emit('update:filterType', 'all')"
      >All: {{ lengthUsers }}</BtnAllText
    >
    <BtnAllText
      class="w-25"
      :class="{ active: filterType === 'noactive' }"
      @click="$emit('update:filterType', 'noactive')"
      >NA: {{ lengthNAUsers }}</BtnAllText
    >
    <BtnAllText
      class="w-25"
      :class="{ active: filterType === 'active' }"
      @click="$emit('update:filterType', 'active')"
      >A: {{ lengthAUsers }}</BtnAllText
    >
    <BtnAllText
      class="w-25"
      :class="{ active: filterType === 'pro' }"
      @click="$emit('update:filterType', 'pro')"
      >Pro: {{ lengthProUsers }}</BtnAllText
    >
  </div>
</template>

<script>
import BtnAllText from '../../../../components/buttons/BtnAllText.vue'

export default {
  name: 'FormFilter',
  components: { BtnAllText },
  props: [
    'filterType',
    'lengthUsers',
    'lengthNAUsers',
    'lengthAUsers',
    'lengthProUsers'
  ],
  emits: ['update:filterType']
}
</script>
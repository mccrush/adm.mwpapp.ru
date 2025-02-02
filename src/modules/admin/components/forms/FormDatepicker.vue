<template>
  <div class="input-group">
    <input
      class="form-control border-0 bg-light"
      type="datetime-local"
      id="dateEndPro"
      :value="dateEndPro"
      @change="$emit('update:dateEndPro', $event.target.value)"
    />
    <BtnTrash class="" @click="this.$emit('update:dateEndPro', '')" />
  </div>
</template>

<script>
import BtnTrash from '../buttons/BtnTrash.vue'

export default {
  name: 'FormDatepicker',
  components: { BtnTrash },
  props: ['dateEndPro'],
  emits: ['update:dateEndPro']
}
</script>
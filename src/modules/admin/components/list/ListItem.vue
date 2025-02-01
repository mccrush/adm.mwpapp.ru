<template>
  <div class="border border-2 border-success p-3">
    <div>{{ item.email }}</div>
    <div class="d-flex justify-content-between border">
      <div>CA {{ getLocaleDateFromDateDigit(item.created_at) }}</div>
      <div>LS {{ getLocaleDateFromDateDigit(item.last_sign_in_at) }}</div>
    </div>
    <div v-if="item.user_metadata.dateEndPro">
      {{ getLocaleDateFromDateDigit(item.user_metadata.dateEndPro) }}
    </div>
    <div class="border border-warning bg-warning rounded small badge">
      {{ getLocaleDateFromDateDigit(item.created_at) }}
    </div>
  </div>
</template>

<script>
import { getLocaleDateFromDateDigit } from './../../helpers/getLocaleDateFromDateDigit'

export default {
  name: 'ListItem',
  props: {
    item: Object
  },
  methods: {
    getLocaleDateFromDateDigit
  }
}
</script>
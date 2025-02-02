<template>
  <li class="list-group-item">
    <div class="d-flex justify-content-between">
      <div class="small">{{ item.email }}</div>
      <div v-if="item.user_metadata.dateEndPro">
        <span class="bg-warning rounded-1 small ms-2 ps-1 pe-1"> pro </span>
      </div>
    </div>

    <div>
      <span class="text-bg-secondary rounded-1 small ps-1 pe-1">
        {{ getLocaleDateTimeFromDate(item.created_at) }}
      </span>
      <span
        v-if="item.last_sign_in_at"
        class="text-bg-secondary rounded-1 small ms-2 ps-1 pe-1"
      >
        {{ getLocaleDateTimeFromDate(item.last_sign_in_at) }}
      </span>
    </div>
  </li>
</template>

<script>
import { getLocaleDateTimeFromDate } from './../../helpers/getLocaleDateTimeFromDate'

export default {
  name: 'ListItem',
  props: {
    item: Object
  },
  methods: {
    getLocaleDateTimeFromDate
  }
}
</script>
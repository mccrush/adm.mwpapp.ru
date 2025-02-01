<template>
  <li class="list-group-item">
    <div>{{ item.email }}</div>
    <div>
      <span class="text-bg-secondary rounded-1 small ps-1 pe-1">
        {{ getLocaleDateFromDateDigit(item.created_at) }}
      </span>
      <span
        v-if="item.last_sign_in_at"
        class="text-bg-secondary rounded-1 small ms-2 ps-1 pe-1"
      >
        {{ getLocaleDateFromDateDigit(item.last_sign_in_at) }}
      </span>
      <span
        v-if="item.user_metadata.dateEndPro"
        class="bg-warning rounded-1 small ms-2 ps-1 pe-1"
      >
        {{ getLocaleDateFromDateDigit(item.user_metadata.dateEndPro) }}
      </span>
    </div>
  </li>
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
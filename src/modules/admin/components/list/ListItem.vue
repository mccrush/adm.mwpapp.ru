<template>
  <li class="list-group-item mt-2">
    <div>{{ item.email }}</div>
    <div>
      <span class="text-bg-secondary rounded small ps-1 pe-1">
        {{ getLocaleDateFromDateDigit(item.created_at) }}
      </span>
      <span
        v-if="item.last_sign_in_at"
        class="text-bg-secondary rounded small ms-2 ps-1 pe-1"
      >
        {{ getLocaleDateFromDateDigit(item.last_sign_in_at) }}
      </span>
      <span
        v-if="item.dateEndPro"
        class="bg-warning rounded small ms-2 ps-1 pe-1"
      >
        {{ getLocaleDateFromDateDigit(item.dateEndPro) }}
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
<template>
  <div>
    <div v-if="!items.length">
      <h6>Список элементов пуст</h6>
    </div>

    <table v-else class="table table-striped align-middle mb-0">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Users - {{ items.length }}</th>
          <th scope="col" class="text-center">Subscribe</th>
          <th scope="col" class="text-center">Pro - {{ lengthProUsers }}</th>
          <th scope="col" class="text-center">Start Pro</th>
          <th scope="col" class="text-center">End Pro</th>
          <th scope="col" class="text-center">Last Sig</th>
          <th scope="col" class="text-center">Бан</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="item.id">
          <th scope="row">{{ index + 1 }}</th>
          <td class="small">{{ item.email }}</td>
          <td
            class="text-center small"
            :class="{ 'bg-success-subtle': item.user_metadata.subscription }"
          >
            <div>
              {{ item.user_metadata.subscription }}
            </div>
            <div>
              <BtnAllTextSm v-if="item.user_metadata.subscription">
                Отключить
              </BtnAllTextSm>
              <BtnAllTextSm v-else> Включить </BtnAllTextSm>
            </div>
          </td>
          <td
            class="text-center small"
            :class="{ 'bg-success-subtle': item.user_metadata.premium }"
          >
            <div>{{ item.user_metadata.premium }}</div>
            <div>
              <BtnAllTextSm v-if="item.user_metadata.premium"
                >Отключить</BtnAllTextSm
              >
              <BtnAllTextSm v-else>Включить</BtnAllTextSm>
            </div>
          </td>
          <td class="text-center small">
            {{
              getLocaleDateFromDateDigit(item.user_metadata.dateStartPremium)
            }}
          </td>
          <td class="text-center small">
            <div>
              {{
                getLocaleDateFromDateDigit(item.user_metadata.dateEndPremium)
              }}
            </div>
            <div><BtnAllTextSm>Продлить</BtnAllTextSm></div>
          </td>
          <td class="text-center small">
            {{ getLocaleDateFromDateDigit(item.last_sign_in_at) }}
          </td>
          <td class="text-center small">
            {{ getLocaleDateFromDateDigit(item.banned_until) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import getLocaleDateFromDateDigit from './../../helpers/getLocaleDateFromDateDigit'

import BtnAllTextSm from './../buttons/BtnAllTextSm.vue'

export default {
  components: { BtnAllTextSm },
  props: { items: Array, lengthProUsers: Number },
  emits: ['edit-item', 'delete-item', 'create-item'],
  methods: {
    getLocaleDateFromDateDigit
  }
}
</script>
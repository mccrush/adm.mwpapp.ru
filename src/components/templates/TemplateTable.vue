<template>
  <div>
    <div v-if="!items.length">
      <h6>Список элементов пуст</h6>
    </div>

    <table v-else class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Subscribe</th>
          <th scope="col">Premium</th>
          <th scope="col">Date Start Pro</th>
          <th scope="col">Date End Pro</th>
          <th scope="col">Проектов</th>
          <th scope="col">Бан</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="item.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item.email }}</td>
          <td
            class="text-center"
            :class="{ 'bg-success-subtle': item.user_metadata.subscription }"
          >
            <div>
              {{ item.user_metadata.subscription }}
            </div>
            <div>
              <BtnOffText v-if="item.user_metadata.subscription" /><BtnOnText
                v-else
              />
            </div>
          </td>
          <td
            class="text-center"
            :class="{ 'bg-success-subtle': item.user_metadata.premium }"
          >
            <div>{{ item.user_metadata.premium }}</div>
            <div>
              <BtnOffText v-if="item.user_metadata.premium" /><BtnOnText
                v-else
              />
            </div>
          </td>
          <td>
            {{
              getLocaleDateFromDateDigit(item.user_metadata.dateStartPremium)
            }}
          </td>
          <td>
            {{ getLocaleDateFromDateDigit(item.user_metadata.dateEndPremium) }}
          </td>
          <td>{{ item.user_metadata.projects?.length }}</td>
          <td>до {{ getLocaleDateFromDateDigit(item.banned_until) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import getLocaleDateFromDateDigit from './../../helpers/getLocaleDateFromDateDigit'

import BtnOnText from './../buttons/BtnOnText.vue'
import BtnOffText from './../buttons/BtnOffText.vue'

export default {
  components: { BtnOnText, BtnOffText },
  props: { items: Array },
  emits: ['edit-item', 'delete-item', 'create-item'],
  methods: {
    getLocaleDateFromDateDigit
  }
}
</script>
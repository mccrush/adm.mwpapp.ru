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
          <th scope="col" class="text-center">proFree</th>
          <th scope="col" class="text-center">
            proStatus - {{ lengthProUsers }}
          </th>
          <th scope="col" class="text-center">dateStartPro</th>
          <th scope="col" class="text-center">dateEndPro</th>
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
            :class="{ 'bg-success': item.user_metadata.proFree }"
          >
            <div>
              {{ item.user_metadata.proFree }}
            </div>
            <!-- <div>
              <BtnAllTextSm
                v-if="item.user_metadata.proFree"
                @click="$emit('subscribe-off', { userId: item.id })"
              >
                Отключить
              </BtnAllTextSm>
              <div v-else class="dropdown">
                <BtnAllTextSm data-bs-toggle="dropdown">
                  Включить
                </BtnAllTextSm>
                <div class="dropdown-menu border-0 p-2">
                  <input
                    class="form-control form-control-sm"
                    type="datetime-local"
                  />
                  <BtnAllTextSm
                    class="mt-2"
                    @click="
                      $emit('subscribe-on', {
                        userId: item.id,
                        date: item.user_metadata.dateEndPremium
                      })
                    "
                  >
                    Включить подписку
                  </BtnAllTextSm>
                </div>
              </div>
            </div> -->
          </td>
          <td
            class="text-center small"
            :class="{ 'bg-success': item.user_metadata.proStatus }"
          >
            <div>
              <BtnAllTextSm
                v-if="item.user_metadata.proStatus"
                @click="$emit('premium-off', { userId: item.id })"
                >Отключить</BtnAllTextSm
              >
              <BtnAllTextSm v-else>Включить</BtnAllTextSm>
            </div>
          </td>
          <td class="text-center small">
            {{ getLocaleDateFromDateDigit(item.user_metadata.dateStartPro) }}
          </td>
          <td class="text-center small">
            <div>
              {{ getLocaleDateFromDateDigit(item.user_metadata.dateEndPro) }}
            </div>
            <div><BtnAllTextSm>Продлить</BtnAllTextSm></div>
          </td>
          <td class="text-center small">
            {{ getLocaleDateFromDateDigit(item.last_sign_in_at) }}
            {{ getLocaleTimeFromDate(item.last_sign_in_at) }}
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
import getLocaleTimeFromDate from './../../helpers/getLocaleTimeFromDate'

import BtnAllTextSm from './../buttons/BtnAllTextSm.vue'

export default {
  components: { BtnAllTextSm },
  props: { items: Array, lengthProUsers: Number },
  emits: [
    'edit-item',
    'delete-item',
    'create-item',
    'subscribe-off',
    'subscribe-on',
    'premium-off'
  ],
  methods: {
    getLocaleDateFromDateDigit,
    getLocaleTimeFromDate
  }
}
</script>
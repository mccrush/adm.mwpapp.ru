<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasUserForm"
    aria-labelledby="offcanvasUserFormLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasUserFormLabel">Пользователь</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>

    <div v-if="item" class="offcanvas-body">
      <div>{{ item.email }}</div>

      <div v-if="item.user_metadata.dateEndPro">
        <div class="mt-3">
          <span class="bg-success text-white rounded-1 small ps-1 pe-1">
            {{ getLocaleDateTimeFromDate(item.user_metadata.dateStartPro) }}
          </span>
          <span class="bg-warning text-white rounded-1 small ms-2 ps-1 pe-1">
            {{ getLocaleDateTimeFromDate(item.user_metadata.dateEndPro) }}
          </span>
        </div>
        <div class="mt-3">
          <BtnAllText class="w-100" @click="offDateEndPro"
            >Отключить Pro</BtnAllText
          >
        </div>
      </div>

      <div class="mt-3">
        <FormDatepicker v-model:dateEndPro="dateEndPro" />
      </div>
      <div class="text-center mt-3">
        dateEndPro = {{ getLocaleDateTimeFromDate(dateEndPro) }}
      </div>
      <div class="mt-3">
        <BtnAllText class="w-100" :disabled="!dateEndPro" @click="setDateEndPro"
          >{{
            item.user_metadata.dateEndPro ? 'Продлить' : 'Назначить'
          }}
          Pro</BtnAllText
        >
      </div>
    </div>
  </div>
</template>

<script>
import { getDateNow2 } from './../../helpers/getDateNow2'
import { getLocaleDateTimeFromDate } from './../../helpers/getLocaleDateTimeFromDate'

import FormDatepicker from './FormDatepicker.vue'
import BtnAllText from './../../../../components/buttons/BtnAllText.vue'

export default {
  name: 'FormUser',
  components: {
    FormDatepicker,
    BtnAllText
  },
  props: {
    item: Object
  },
  data() {
    return {
      dateEndPro: ''
    }
  },
  methods: {
    getLocaleDateTimeFromDate,
    setDateEndPro() {
      if (confirm('Назначить Pro?')) {
        const new_user_metadata = this.item.user_metadata
        new_user_metadata.dateStartPro = getDateNow2()
        new_user_metadata.dateEndPro = this.dateEndPro
        this.$store.dispatch('updateItem', {
          userId: this.item.id,
          metadata: new_user_metadata
        })
      }
    },
    offDateEndPro() {
      if (confirm('Точно отключить Pro?')) {
        const new_user_metadata = this.item.user_metadata
        new_user_metadata.dateStartPro = ''
        new_user_metadata.dateEndPro = ''
        this.$store.dispatch('updateItem', {
          userId: this.item.id,
          metadata: new_user_metadata
        })
      }
    }
  },
  watch: {
    item() {
      this.dateEndPro = ''
    }
  }
}
</script>
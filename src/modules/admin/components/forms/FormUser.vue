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

      <div v-if="item.dateEndPro">
        <div>
          <span class="bg-warning rounded-1 small ms-2 ps-1 pe-1">
            {{ getLocaleDateFromDateDigit(item.dateEndPro) }}
          </span>
        </div>
      </div>
      <div v-else>
        <div class="mt-3">
          <FormDatepicker v-model:dateEndPro="dateEndPro" />
        </div>
        <div class="text-center mt-3">dateEndPro = {{ dateEndPro }}</div>
        <div class="mt-3">
          <BtnAllText class="w-100">Назначить Pro</BtnAllText>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  watch: {
    item() {
      this.dateEndPro = ''
    }
  }
}
</script>
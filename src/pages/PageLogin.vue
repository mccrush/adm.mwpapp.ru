<template>
  <div class="container-lg bg-dark vh-100">
    <div class="row justify-content-center">
      <div class="my-vh100 col-12 pt-4">
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from './../modules/login/LoginForm.vue'

export default {
  components: {
    LoginForm
  }
}
</script>
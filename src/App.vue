<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <!-- <PageIndex /> -->
  </div>
</template>

<script>
//import PageIndex from './pages/PageIndex.vue'

export default {}
</script>

<style lang="scss">
@use './scss/common';
</style>
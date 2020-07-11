<template>
  <div id="app">
    <MainNavigation></MainNavigation>

    <router-view/>
  </div>
</template>

<script lang="ts">
import MainNavigation from '@/components/MainNavigation.vue'

export default {
  components: {MainNavigation},
}
</script>

<style lang="scss">

</style>

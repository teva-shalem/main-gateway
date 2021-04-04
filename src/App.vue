<template>
  <div id="app" class="app-container">
    <MainNavigation></MainNavigation>

    <router-view/>

    <footer>האתר נובע מחוג העיון ע"י אור לנדאו ודוד ישראל כהן</footer>
  </div>
</template>

<script lang="ts">
import MainNavigation from '@/components/MainNavigation.vue'

export default {
  components: {MainNavigation},
}
</script>

<style lang="scss">
.app-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

footer {
  display: flex;
  border-top: 1px black solid;
  padding: 0.5rem 0;
  text-align: center;
  justify-content: center;
  font-size: 0.8em;
  background-color: white;
  margin-top: auto;
}
</style>

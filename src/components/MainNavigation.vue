<template><b-navbar sticky toggleable="sm" type="light">
  <b-navbar-brand to="/"><b-img src="@/assets/logo.png" class="navbar-brand-logo" />טבע שלם</b-navbar-brand>

  <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

  <b-collapse id="nav-collapse" is-nav>
    <b-navbar-nav class="ml-auto">
      <b-nav-item href="https://books.teva-shalem.com/">ספרים</b-nav-item>
      <b-nav-item to="/art">אומנות</b-nav-item>
      <b-nav-item to="/school">בי״ס פעימה</b-nav-item>
    </b-navbar-nav>
  </b-collapse>


</b-navbar></template>

<script lang="ts">

export default {
  name: 'MainNavigation',

}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: lightblue;
}

.navbar-brand-logo {
  height: 30px;
}
</style>

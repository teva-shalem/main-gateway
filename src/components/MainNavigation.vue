<template><b-navbar sticky toggleable="sm" type="light">
  <b-navbar-brand to="/"><b-img src="@/assets/logo.png" class="navbar-brand-logo" />טבע שלם</b-navbar-brand>

  <b-navbar-toggle target="nav-collapse" @click="$root.$emit('bv::hide::popover')"></b-navbar-toggle>

  <b-collapse id="nav-collapse" is-nav>
    <b-navbar-nav class="ml-auto">
      <b-nav-item href="https://books.teva-shalem.com/">ספרים</b-nav-item>
      <b-nav-item to="/art">אמנות</b-nav-item>
      <b-nav-item to="/school">בית ספר פעימה</b-nav-item>
      <b-nav-item to="/home">הבית</b-nav-item>
      <b-nav-item to="/healing-space">מרחב הבראה</b-nav-item>
      <b-nav-item to="/contact">יצירת קשר</b-nav-item>
    </b-navbar-nav>
  </b-collapse>
</b-navbar></template>

<script lang="ts">

export default {
  name: 'MainNavigation',
}
</script>

<style lang="scss" scoped>
@import './src/styles/variables';

.navbar {
  background-color: $primary;
}

.nav-link {
  text-decoration: none;
  
    &:hover {
      text-decoration: underline;
    }
}

.navbar-brand {
  display: flex;
}
.navbar-brand-logo {
  height: 30px;
}
.navbar-light .navbar-toggler:active {
  color: $info;
}
.navbar-light .navbar-nav .nav-link.router-link-active {
  color: black;
}
</style>

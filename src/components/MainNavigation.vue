<template>
<b-navbar sticky toggleable="md" type="light">
  <b-navbar-brand to="/"><b-img src="@/assets/logo.png" class="navbar-brand-logo" />טבע שלם</b-navbar-brand>

  <b-navbar-toggle target="nav-collapse" @click="onMenuOpen()">
      <template>
        תפריט
      </template>
  </b-navbar-toggle>

  <b-collapse id="nav-collapse" is-nav>
    <b-navbar-nav class="ml-auto align-items-center">
      <b-nav-item href="https://books.teva-shalem.com/">ספרים</b-nav-item>
      <b-nav-item to="/art">אמנות</b-nav-item>
      <b-nav-item to="/school">בי״ס פעימה</b-nav-item>
      <b-nav-item to="/luz">לו״ז</b-nav-item>
      <b-nav-item to="/home">הבית</b-nav-item>
      <b-nav-item to="/healing-space">מרחב הבראה</b-nav-item>
      <b-nav-item to="/maala">מעל״ה</b-nav-item>
      <b-nav-item to="/forum">הפורום</b-nav-item>
      <b-nav-item to="/contact">יצירת קשר</b-nav-item>
    </b-navbar-nav>
    
    <b-navbar-nav class="align-items-center">
      <b-nav-item class="patreon-link" target="_blank" href="https://www.patreon.com/bePatron?u=52315285">לקהילת ״פרי החיים״</b-nav-item>
    </b-navbar-nav>
  </b-collapse>
</b-navbar>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MainNavigation',
  methods: {
    onMenuOpen(): void {
      debugger
      document.documentElement.scrollTo({top:0})
      this.$root.$emit('bv::hide::popover')
    }
  }
})
</script>

<style lang="scss" scoped>
@import './src/styles/variables';

.navbar {
  background-color: $primary;
}

.nav-item {
  text-align: center;
}

.nav-link {
  text-decoration: none;
  
    &:hover {
      text-decoration: underline;
    }
}

.navbar-brand {
  display: flex;
  text-decoration-thickness: 1px;
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

.patreon-link {
  text-shadow: 0px 0px 5px greenyellow;
}
</style>

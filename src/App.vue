<template>
  <div id="app">
    <h1>טבע שלם</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/art">Art</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<template>
  <b-card :header="title" :tag="link || externalLink ? 'b-link' : 'div'" :href="externalLink || false" :to="link || false">
    <b-card-text>{{text}}</b-card-text>
  </b-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name : 'Card',
  props: {
    title: String,
    text : String,
    link: {
      type: String,
      required: false,
    },
    externalLink: {
      type: String,
      required: false,
    }
  },
})
</script>

<style scoped lang="scss">

</style>

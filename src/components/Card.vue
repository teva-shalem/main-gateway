<template>
  <b-card :header="title" :tag="link || externalLink ? 'b-link' : 'div'" :href="externalLink || false" :to="link || false">
    <b-card-text><slot></slot></b-card-text>
  </b-card>
</template>

<script lang="ts">
export default {
  name : 'Card',
  props: {
    title: String,
    link: {
      type: String,
      required: false,
    },
    externalLink: {
      type: String,
      required: false,
    }
  },
}
</script>

<style scoped lang="scss">

</style>

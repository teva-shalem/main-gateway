<template>
  <div>
    <b-card-group columns>
      <b-card v-for="(src, index) in images" :key="index"
              @click="() => showImg(index)">
        <b-img fluid :src="src"/>
      </b-card>
    </b-card-group>

    <vue-easy-lightbox
        :visible="visible"
        :imgs="images"
        :index="index"
        @hide="handleHide"
    ></vue-easy-lightbox>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name    : 'ImageGallery',
  props: {
    images: {
      type: Array,
    }
  },
  data() {
    return {
      visible: false,
      index  : 0,
    }
  },
  methods : {
    showImg(index: number) {
      this.index = index
      this.visible = true
    },
    handleHide() {
      this.visible = false
    },
  },
})
</script>

<style scoped lang="scss">
.card {
  cursor: pointer
}
</style>

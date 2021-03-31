<template>
  <Tooltip :position="position" :show="showInitially" ref="tooltip" :id="term">
    <slot></slot>
    <template #content>
      <div v-if="imageValue" class="popover-image" :style="{
        'background-image': `url(./img/${imageValue[0]})`,
        'width': `${imageValue[1]}px`,
        'height': `${imageValue[2]}px`,
        }"></div>
      <div v-if="textValue">{{textValue}}</div>
    </template>
  </Tooltip>
</template>

<script lang="ts">
import Vue from 'vue'
import Tooltip from '@/components/Tooltip.vue'
import {drash} from '@/data/jsons'
import {isTermDrashText, isTermDrashImage} from '@/data/pardes/drash'

export default Vue.extend({
  name      : 'DrashTooltip',
  props     : {
    term : {
      type    : String,
      required: true,
    },
    position: {
      type   : String,
      required: false,
    },
    showInitially: {
      type   : Boolean,
      required: false,
    },
    shouldTrack: {
      type   : Boolean,
      required: false,
    },
  },
  computed  : {
    imageValue() {
      return isTermDrashImage(this.term) ? drash.data[this.term] : null
    },
    textValue() {
      return isTermDrashText(this.term) ? drash.data[this.term] : null
    },
  },
  mounted() {
    if (this.shouldTrack) {
      const {$gtag, term, $refs: {tooltip}} = this

      this.$root.$on('bv::popover::show', (e: any) => {
        try {
          // @ts-ignore
          const isSameTooltip = e.target.id === tooltip.$children[0].$el.id
          if (isSameTooltip) $gtag.event('exposed-drash', {term})
        } catch (e) {
          console.error(e)
        }
      })
    }
  },
  components: {
    Tooltip,
  },
})
</script>

<style scoped lang="scss">
.popover-image {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>

<template>
  <Tooltip :position="position" :show="showInitially" ref="tooltip" :id="term">
    <slot></slot>
    <template #content>
      <div v-if="image" :class="image" class="popover-image"></div>
      <div v-if="definition">{{definition}}</div>
    </template>
  </Tooltip>
</template>

<script lang="ts">
import Vue from 'vue'
import Tooltip from '@/components/Tooltip.vue'
import drash from '@/content/drash.json'

const d = drash as { [term: string]: string | undefined }

export default Vue.extend({
  name      : 'DrashTooltip',
  props     : {
    term : {
      type    : String,
      required: false,
    },
    image: {
      type    : String,
      required: false,
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
    definition: function() {
      if (this.term && !d[this.term])
        throw Error('DrashTooltip failed with unknown term :' + this.term)

      return this.term ? d[this.term] : ''
    },
  },
  mounted() {
    if (this.shouldTrack) {
      const {$gtag, term, $refs: {tooltip}} = this

      this.$root.$on('bv::popover::show', (e) => {
        try {
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

  &.innermost-point {
    background-image: url("../assets/innermost-point.jpg");
    width: 100px;
    height: 100px;
  }

  &.king-tree-system {
    background-image: url("../assets/king-tree-system.jpg");
    width: 160px;
    height: 200px;
  }
}
</style>

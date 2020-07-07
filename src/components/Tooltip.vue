<template>
  <span class="tooltip-container">
    <a class="tooltip-trigger" href="#"
       v-b-popover="{html: true, placement: position || 'top', content, trigger: 'hover focus'}"><slot></slot></a>
  </span>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name : 'Tooltip',
  props: {
    content : String,
    position: String,
  },
})
</script>

<style scoped lang="scss">
.tooltip-trigger {
  border-bottom: 3px solid #67C8EA;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  white-space: nowrap;

  &:focus {
    outline: 0;
    background: #A4E1F6;
  }
}
</style>

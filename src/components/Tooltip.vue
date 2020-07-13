<template><span class="tooltip-container">
  <b-link :id="identifier" class="tooltip-trigger"><slot></slot></b-link>

  <b-popover :target="identifier" :placement="position || 'top'" triggers="hover focus" :show="show">
    <template #default><slot name="content"></slot></template>
  </b-popover>
</span></template>

<script lang="ts">
export default {
  name    : 'Tooltip',
  props   : {
    position: {
      type   : String,
      default: 'top',
    },
    show: {
      type   : Boolean,
      default: false,
    },
  },
  computed: {
    identifier: function() {
      return Math.random().toString()
    },
  },
}
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

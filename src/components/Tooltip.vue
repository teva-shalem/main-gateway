<template>
<span class="tooltip-container">
  <b-link :id="identifier" class="tooltip-trigger"><slot></slot></b-link>

  <b-popover :target="identifier" :placement="position || 'top'" triggers="hover focus" :show="show">
    <template #default><slot name="content"></slot></template>
  </b-popover>
</span>
</template>

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
@import "./src/styles/variables";

.tooltip-trigger {
  border-bottom: 3px solid $info;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  white-space: nowrap;

  &:focus {
    outline: 0;
    background: rgba($info, 0.3);
  }
}
</style>

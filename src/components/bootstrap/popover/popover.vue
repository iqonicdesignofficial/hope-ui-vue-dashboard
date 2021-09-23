<template>
  <component
  :is="tag"
  :type="type"
  :role="role"
  data-bs-container="body"
  :tabindex="tabindex"
  :class="`btn ${className}`"
  data-bs-toggle="popover"
  :data-bs-placement="popoverPlacement"
  :title="popoverTitle"
  :data-bs-content="popoverContent">
      {{popoverText}}
      <slot/>
  </component>
</template>
<script>
import { Popover } from 'bootstrap'
export default {
  name: 'popover',
  props: {
    tag: { type: String, default: 'button' },
    type: { type: String, default: 'button' },
    role: { type: String, default: '' },
    tabindex: { type: Number, default: 0 },
    className: { type: String, default: '' },
    popoverPlacement: { type: String },
    popoverTitle: { type: String, default: '' },
    popoverContent: { type: String, default: '' },
    popoverText: { type: String, default: '' }
  },
  mounted () {
    // inti Popover
    Array.from(document.querySelectorAll('[data-bs-toggle="popover"]'))
      .forEach(popoverNode => new Popover(popoverNode))
  }
}
</script>

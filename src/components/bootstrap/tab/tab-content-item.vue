<template>
  <div :class="`tab-pane fade ${active ? 'show active' : ''}`" :id="id" :role="role" :aria-labelledby="ariaLabelledBy">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'tab-content-item',
  props: {
    id: { type: String, default: '' },
    active: { type: Boolean, default: false },
    role: { type: String, default: 'tabpanel' },
    ariaLabelledBy: { type: String, default: '' }
  }
}
</script>

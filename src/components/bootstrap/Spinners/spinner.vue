<template>
  <component :is="tag" :class="className" :role="role">
      <slot/>
  </component>
</template>
<script>
export default {
  name: 'spinner',
  props: {
    tag: { type: String, default: 'div' },
    className: { type: String, default: '' },
    role: { type: String, default: '' }
  }
}
</script>

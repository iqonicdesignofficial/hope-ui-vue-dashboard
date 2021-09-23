<template>
    <component :is="tag" :class="`navbar ${className}`">
      <slot/>
    </component>
</template>
<script>
export default {
  name: 'navbar',
  props: {
    tag: { type: String, default: 'nav' },
    className: { type: String, default: '' }
  }
}
</script>

<template>
    <component :is="tag" :class="`navbar ${className}`" :id="id">
      <slot/>
    </component>
</template>
<script>
export default {
  name: 'scrollspy',
  props: {
    tag: { type: String, default: 'nav' },
    className: { type: String, default: '' },
    id: { type: String, default: '' }
  }
}
</script>

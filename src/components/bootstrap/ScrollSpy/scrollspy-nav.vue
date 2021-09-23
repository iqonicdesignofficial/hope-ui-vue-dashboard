<template>
    <component :is="tag" :class="`nav ${className}`">
        <slot/>
    </component>
</template>
<script>

export default {
  name: 'scrollspy-nav',
  props: {
    tag: { type: String, default: 'ul' },
    className: { type: String, default: '' }
  }
}
</script>

<template>
    <component :class="`card ${className}`" :is="tag">
        <slot/>
    </component>
</template>
<script>
export default {
  name: 'cards',
  props: {
    className: { type: String, default: '' },
    tag: { type: String, default: 'div' }
  }
}
</script>

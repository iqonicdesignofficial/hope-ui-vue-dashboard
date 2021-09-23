<template>
  <component :is="innerTag" :class="innerClass">
    <slot/>
  </component>
</template>
<script>
export default {
  name: 'innercontent',
  props: {
    innerTag: { type: String, default: 'span' },
    innerClass: { type: String, default: '' }
  }
}
</script>

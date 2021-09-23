<template>
  <component :is="tag" :class="className">
      <slot/>
  </component>
</template>
<script>
export default {
  name: 'spinnercontent',
  props: {
    tag: { type: String, default: 'span' },
    className: { type: String, default: '' }
  }
}
</script>

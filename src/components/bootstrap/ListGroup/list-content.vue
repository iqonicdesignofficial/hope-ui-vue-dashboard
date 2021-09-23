<template>
    <component :is="tag" :class="contentClass">
        <slot/>
    </component>
</template>
<script>
export default {
  name: 'list-content',
  props: {
    tag: { type: String, default: 'li' },
    contentClass: { type: String, default: '' }
  }
}
</script>

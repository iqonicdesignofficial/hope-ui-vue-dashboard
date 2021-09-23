<template>
    <component :is="tag" :class="className">
        <slot/>
    </component>
</template>
<script>
export default {
  name: 'navbar-content',
  props: {
    tag: { type: String, default: 'a' },
    className: { type: String, default: '' }
  }
}
</script>

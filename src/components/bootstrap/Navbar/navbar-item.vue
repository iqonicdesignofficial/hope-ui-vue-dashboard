<template>
    <component :is="tag" :class="className">
        <slot/>
    </component>
</template>
<script>
export default {
  name: 'navbar-item',
  props: {
    tag: { type: String, default: 'div' },
    className: { type: String, default: '' }
  }
}
</script>

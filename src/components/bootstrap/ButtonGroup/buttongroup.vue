<template>
    <component :is="tag" :class="buttongrpClass" :role="role" :aria-label="ariaLabel">
        <slot/>
    </component>
</template>
<script>
export default {
  name: 'buttongroup',
  props: {
    tag: { type: String, default: 'div' },
    buttongrpClass: { type: String, default: '' },
    role: { type: String, default: 'group' },
    ariaLabel: { type: String, default: '' }
  }
}
</script>

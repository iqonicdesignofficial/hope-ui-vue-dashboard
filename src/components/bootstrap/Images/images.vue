<template>
    <component :is="tag" :class="className"  :xmlns="Xmlns"   :alt="alt" :role="role" :aria-label="ariaLabel" :focusable="Focusable">
        <slot/>
    </component>
</template>
<script>
export default {
  name: 'images',
  props: {
    tag: { type: String, default: 'img' },
    className: { type: String, default: '' },
    src: { type: String, default: '' },
    alt: { type: String, default: '' },
    role: { type: String, default: '' },
    Focusable: { type: Boolean, default: false },
    ariaLabel: { type: String, default: '' },
    xmlns: { type: String, default: '' }
  }
}
</script>

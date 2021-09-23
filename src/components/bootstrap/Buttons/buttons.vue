<template>
    <component :is="tag" :class="`btn ${buttonClass}`" :type="type" :role="role" :tabindex="tabindex" :aria-disabled="ariaDisabled">
        <slot/>
    </component>
</template>
<script>
export default {
  name: 'buttons',
  props: {
    tag: { type: String, default: 'button' },
    buttonClass: { type: String, default: '' },
    type: { type: String, default: 'button' },
    role: { type: String, default: '' },
    tabindex: { type: Number, default: 0 },
    ariaDisabled: { type: Boolean, default: false }
  }
}
</script>

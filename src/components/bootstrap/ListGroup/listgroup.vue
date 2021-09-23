<template>
    <component :is="tag" :class="className" :aria-current="ariaCurrent" :aria-disabled="ariaDisabled" :type="type">
        <slot/>
    </component>
</template>
<script>
export default {
  name: 'listgroup',
  props: {
    tag: { type: String, default: 'ul' },
    className: { type: String, default: '' },
    ariaCurrent: { type: Boolean, default: false },
    ariaDisabled: { type: Boolean, default: false },
    type: { type: String, default: '' }
  }
}
</script>

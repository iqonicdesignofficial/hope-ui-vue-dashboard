<template>
    <h4 :class="`accordion-header ${headerClass}`" :id="id">
        <slot/>
    </h4>
</template>
<script>
export default {
  name: 'accordion-header',
  props: {
    buttonClass: { type: String, default: '' },
    id: { type: String, default: '' },
    type: { type: String, default: 'button' },
    headerClass: { type: String, default: '' },
    ariaExpanded: { type: Boolean, default: false },
    ariaControls: { type: String, default: '' }
  }
}
</script>

<template>
    <div :id="id" :class="`accordion-collapse ${bodyClass}`" :aria-labelledby="ariaLabelledby" :data-bs-parent="parentId">
      <div class="accordion-body">
        <strong>{{strongText}}</strong>{{bodyText}}
        <slot/>
      </div>
    </div>
</template>
<script>
export default {
  name: 'accordion-body',
  props: {
    bodyClass: { type: String, default: 'collapse' },
    parentId: { type: String, default: '' },
    innerText: { type: String, default: '' },
    ariaLabelledby: { type: String, default: '' },
    strongText: { type: String },
    bodyText: { type: String }
  }
}
</script>

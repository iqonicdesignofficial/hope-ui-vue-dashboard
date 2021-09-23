<template>
<div :class="`offcanvas offcanvas-${mainClass}`"  :tabindex="tabindex" :id="id" :aria-labelledby="ariaLabelled" :data-bs-scroll="Scroll">
    <slot/>
</div>
</template>
<script>
export default {
  name: 'offcanvas',
  props: {
    mainClass: { type: String, default: '' },
    tabindex: { type: Number, default: 0 },
    id: { type: String },
    ariaLabelled: { type: String, default: '' },
    Scroll: { type: Boolean, default: false }
  }
}
</script>

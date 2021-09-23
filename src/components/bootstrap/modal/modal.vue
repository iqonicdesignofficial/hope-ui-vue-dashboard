<template>
<div :class="`modal ${mainClass}`" :tabindex="tabindex" :id="id" :aria-labelledby="ariaLabelled" :aria-hidden="ariaHidden" :data-bs-backdrop="backdrop" :data-bs-keyboard="keyboard">
    <div :class="`modal-dialog ${dialogClass}`">
        <div :class="`modal-content ${contentClass}`">
        <slot/>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'modal',
  props: {
    mainClass: { type: String, default: 'fade' },
    dialogClass: { type: String, default: '' },
    contentClass: { type: String, default: '' },
    tabindex: { type: Number, default: 0 },
    id: { type: String },
    ariaLabelled: { type: String, default: '' },
    ariaHidden: { type: Boolean, default: false },
    backdrop: { type: String },
    keyboard: { type: Boolean, default: false }
  }
}
</script>

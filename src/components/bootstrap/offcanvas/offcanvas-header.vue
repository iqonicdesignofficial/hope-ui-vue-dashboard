<template>
<div :class="`offcanvas-header ${headerClass}`">
    <slot/>
    <button v-if="dismissable" type="button" :class="`btn-close text-reset ${dismissbuttonClass}`" data-bs-dismiss="offcanvas" aria-label="Close"/>
</div>
</template>
<script>
export default {
  name: 'offcanvas-header',
  props: {
    headerClass: {
      type: String,
      default: ''
    },
    dismissable: {
      type: Boolean,
      default: false
    },
    dismissbuttonClass: {
      type: String
    }
  }
}
</script>

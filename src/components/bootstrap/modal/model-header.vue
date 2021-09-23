<template>
  <div :class="`modal-header ${headerClass}`">
      <slot/>
      <button v-if="dismissable" type="button" :class="`btn-close ${dismissbuttonClass}`" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
</template>
<script>
export default {
  name: 'model-header',
  props: {
    headerClass: {
      type: String
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

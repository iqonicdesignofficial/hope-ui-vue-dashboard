<template>
<div :class="`modal-footer ${footerClass}`">
    <slot/>
</div>
</template>
<script>
export default {
  name: 'model-footer',
  props: {
    footerClass: {
      type: String
    }
  }
}
</script>

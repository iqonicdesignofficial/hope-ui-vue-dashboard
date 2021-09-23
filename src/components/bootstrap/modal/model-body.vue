<template>
<div :class="`modal-body ${bodyClass}`">
    <slot/>
</div>
</template>
<script>
export default {
  name: 'model-body',
  props: {
    bodyClass: {
      type: String
    }
  }
}
</script>

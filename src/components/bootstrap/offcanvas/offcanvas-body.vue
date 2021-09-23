<template>
<div :class="`offcanvas-body ${bodyClass}`">
    <slot/>
</div>
</template>
<script>
export default {
  name: 'offcanvas-body',
  props: {
    bodyClass: { type: String, default: '' }
  }
}
</script>

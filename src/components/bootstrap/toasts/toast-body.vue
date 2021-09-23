<template>
<div :class="`toast-body ${bodyClass}`">
   <slot/>
</div>
</template>
<script>
export default {
  name: 'toast-body',
  props: {
    bodyClass: {
      type: String
    }
  }
}
</script>

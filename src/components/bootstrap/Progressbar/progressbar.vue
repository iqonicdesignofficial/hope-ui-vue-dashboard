<template>
  <div :class="`progress ${pClass}`" :style="mainStyle">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'progressbar',
  props: {
    pClass: { type: String, default: '' },
    mainStyle: { type: String, default: '' }
  }
}
</script>

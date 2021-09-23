<template>
  <div ref="slider" :class="`slider slider-${variant}`">
  </div>
</template>
<script>
import noUiSlider from 'nouislider'
export default {
  name: 'NoUiSlider',
  props: {
    variant: { type: String, default: 'primary' }
  },
  mounted () {
    noUiSlider.create(this.$refs.slider, {
      start: 50,
      connect: [true, false],
      range: {
        min: 0,
        max: 100
      }
    })
  }
}
</script>

<template>
  <div ref="elem" :class="`slider slider-${variant}`"></div>
</template>
<script>
import noUiSlider from 'nouislider'
import { onMounted, ref } from 'vue'
export default {
  name: 'NoUiSlider',
  props: {
    variant: { type: String, default: 'primary' }
  },
  setup() {
    const elem = ref(null)
    onMounted(() => {
      noUiSlider.create(elem.value, {
        start: 50,
        connect: [true, false],
        range: {
          min: 0,
          max: 100
        }
      })
    })
    return {
      elem
    }
  }
}
</script>

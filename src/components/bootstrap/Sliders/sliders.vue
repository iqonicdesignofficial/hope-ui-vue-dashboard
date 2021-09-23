<template>
    <Slider v-model="value" />
</template>
<script>
import Slider from '@vueform/slider'
export default {
  name: 'sliders',
  components: {
    Slider
  },
  data () {
    return {
      value: 50
    }
  }
}
</script>

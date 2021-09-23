<template>
    <div ref="circleProgress" :class="`circle-progress  circle-progress-${color} ${className} `" >
               <slot></slot>
    </div>
</template>
<script>
import CircleProgress from '@/assets/js/circle-progress.js'
export default {
  name: 'CircleProgress',
  props: {
    value: { type: Number, default: 0 },
    color: { type: String, default: '' },
    className: { type: String, default: 'circle-progress-basic' }
  },
  data () {
    return {
      circle: {}
    }
  },
  mounted () {
    this.circle = new CircleProgress(this.$refs.circleProgress, {
      max: 100,
      value: this.value,
      textFormat: 'percent'
    })
  }
}
</script>

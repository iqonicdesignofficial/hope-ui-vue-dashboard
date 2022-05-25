<template>
  <b-card-body>
    <div class="progress-widget">
      <div :id="`circle-progress-${index}`" :class="`circle-progress-01 circle-progress circle-progress-${color} text-center`" :data-value="value" role="progressbar" aria-valuemin="0" aria-valuemax="100" :aria-valuenow="value">
        <svg class="card-slie-arrow" width="24" height="24px" viewBox="0 0 24 24" v-if="isProfit">
          <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z"></path>
        </svg>
        <svg class="card-slie-arrow" width="24" height="24" viewBox="0 0 24 24" v-else>
          <path fill="currentColor" d="M19,6.41L17.59,5L7,15.59V9H5V19H15V17H8.41L19,6.41Z"></path>
        </svg>
      </div>
      <div class="progress-detail">
        <p class="mb-2">{{ subTitle }}</p>
        <h4 class="counter">${{ title }}</h4>
      </div>
    </div>
  </b-card-body>
</template>

<script>
import { onMounted } from 'vue'
import CircleProgress from 'js-circle-progress'
export default {
  props: {
    index: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'primary'
    },
    value: {
      type: [String, Number],
      default: ''
    },
    isProfit: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    onMounted(() => {
      new CircleProgress(`#circle-progress-${props.index}`, {
        min: 0,
        max: 100,
        value: props.value,
        textFormat: 'percent'
      })
    })
    return {}
  }
}
</script>

<style lang="scss" scoped></style>

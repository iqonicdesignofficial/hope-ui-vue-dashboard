<template>
  <div ref="refElem" :class="`text-center circle-progress-01 circle-progress circle-progress-${props.color}`">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue'
import CircleProgress from 'js-circle-progress'
const props = defineProps({
  size: { type: Number, default: 0 },
  color: { type: String, default: 'primary' }
})
const refElem = ref(null)
onMounted(() => {
  new CircleProgress(refElem.value, {
    value: props.size ?? 0,
    max: 100
  })
})
</script>

<style lang="scss" scoped></style>

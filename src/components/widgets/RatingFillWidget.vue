<template>
  <div v-for="item in 5" :key="item">
    <div v-if="rating >= item">
      <RatingStarWidget fill="true" />
    </div>
    <div v-else>
      <RatingStarWidget />
    </div>
  </div>
</template>

<script>
import RatingStarWidget from './RatingStarWidget.vue'

export default {
  components: {
    RatingStarWidget
  },
  props: {
    rating: {
      type: Number,
      default: 0
    }
  }
}
</script>

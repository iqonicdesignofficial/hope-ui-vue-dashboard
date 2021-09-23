<template>
<button type="button" :data-bs-target="'#'+item.carouselTargetID" :data-bs-slide-to="item.indicatorPosition" :class="item.active?'active':''" :aria-current="item.active?'true':'false'" :aria-label="item.indicatorLabel"/>
</template>
<script>
export default {
  name: 'carouselIndicator',
  data () {
    return {
      item: [
        {
          carouselTargetID: 'carouselExampleCaptions',
          indicatorPosition: '0',
          active: false,
          indicatorLabel: 'Slide 1'
        },
        {
          carouselTargetID: 'carouselExampleCaptions',
          indicatorPosition: '1',
          active: true,
          indicatorLabel: 'Slide 2'
        },
        {
          carouselTargetID: 'carouselExampleCaptions',
          indicatorPosition: '2',
          active: false,
          indicatorLabel: 'Slide 3'
        }
      ]
    }
  },
  props: {
    // item: { type: Array }
  }
}
</script>

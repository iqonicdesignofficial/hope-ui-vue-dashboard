<template>
  <component :is="tag" class="swiper-slide">
    <slot />
  </component>
</template>
<script>
export default {
  name: 'SwiperSlider',
  props: {
    tag: { type: String, default: 'li' }
  }
}
</script>

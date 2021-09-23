<template>
  <div>
    <!-- If we need navigation buttons -->
    <div :class="`swiper-button swiper-button-next  ${defaultClass}`"  tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-bb5b4e5553f7a9a4" aria-disabled="false">
      <slot name="right" />
    </div>
    <div :class="`swiper-button swiper-button-prev  ${defaultClass}`" tabindex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-bb5b4e5553f7a9a4" aria-disabled="true">
      <slot name="left" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'SwiperNav',
  props: {
    leftClass: { type: String, default: '' },
    rightClass: { type: String, default: '' },
    defaultClass: { type: Boolean, default: true }
  }
}
</script>

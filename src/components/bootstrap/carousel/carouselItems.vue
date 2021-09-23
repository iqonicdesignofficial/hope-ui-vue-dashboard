<template>
<div  :class="active?'carousel-item'+itemClass:'carousel-item'+itemClass">
    <slot/>
    <carouselCaption :captionClass="captionClass"></carouselCaption>
</div>
</template>
<script>
import carouselCaption from './carouselCaption'
export default {
  name: 'carouselItems',
  components: {
    carouselCaption
  },
  props: {
    itemClass: { type: String, default: '' },
    captionClass: { type: String, default: '' },
    intervalTime: { type: Number },
    active: { type: Boolean, default: false }
  }
}
</script>

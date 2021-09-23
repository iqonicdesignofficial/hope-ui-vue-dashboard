<template>
<div v-if="!autoplay"  :id="id" :class="'carousel slide'+variant" data-bs-ride="carousel" data-bs-touch="false" data-bs-interval="false">
<div v-if="autoplay"  :id="id" :class="'carousel slide'+variant" data-bs-ride="carousel">
    <div :class="'carousel-indicators'+indicatorClass">
        <carouselIndicator :item="indicatorItem"/>
    </div>
    <div :class="'carousel-inner'+itemClass">
        <slot/>
    </div>
    <button  :class="'carousel-control-prev'+controlClass" :type="type" :data-bs-target="'#'+carouselTargetID" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button  :class="'carousel-control-next'+controlClass" :type="type" :data-bs-target="'#'+carouselTargetID" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
</div>
</template>
<script>
import CarouselIndicator from './carouselIndicator'
export default {
  name: 'carousels',
  components: { CarouselIndicator },
  props: {
    id: { type: String },
    variant: { type: String },
    indicatorClass: { type: String },
    itemClass: { type: String },
    controlClass: { type: String },
    type: { type: String, default: 'button' },
    carouselTargetID: { type: String, default: 'carouselExampleCaptions' },
    autoplay: { type: Boolean, default: true },
    indicatorItem: { type: Array }
  }
}
</script>

<template>
    <div :class="'carousel-caption d-none d-md-block' +captionClass">
        <slot/>
    </div>
</template>
<script>
export default {
  name: 'carouselCaption',
  props: {
    captionClass: { type: String }
  }
}
</script>

<template>
  <b-card no-body>
    <b-card-header class="d-flex align-items-center justify-content-between">
      <div class="header-title">
        <h4 class="card-title">Gallery</h4>
      </div>
      <span>132 pics</span>
    </b-card-header>
    <b-card-body>
      <div class="d-grid gap-card grid-cols-3">
        <a data-fslightbox="gallery" href="#" v-for="(item, index) in list" :key="index" @click="toggler = !toggler">
          <img :src="item.image" alt="product-details" class="img-fluid bg-soft-info rounded" loading="lazy" />
        </a>
        <FsLightbox :toggler="toggler" :sources="[require('@/assets/images/icons/04.png'), require('@/assets/images/shapes/02.png'), require('@/assets/images/icons/06.png'), require('@/assets/images/shapes/04.png'), require('@/assets/images/icons/02.png'), require('@/assets/images/shapes/06.png'), require('@/assets/images/icons/05.png'), require('@/assets/images/shapes/05.png'), require('@/assets/images/icons/01.png')]" />
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
import FsLightbox from 'fslightbox-vue/v3'

export default {
  components: { FsLightbox },
  props: {
    image: { type: String, default: '' },
    list: { type: String, default: '' }
  },
  data() {
    return {
      toggler: false
    }
  }
}
</script>

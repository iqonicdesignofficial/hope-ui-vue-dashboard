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
        <a data-fslightbox="gallery" href="@/assets/images/shapes/02.png" v-for="(item, index) in list" :key="index">
          <img :src="item.image" alt="product-details" class="img-fluid bg-soft-info rounded" loading="lazy" />
        </a>
      </div>
    </b-card-body>
  </b-card>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    image: { type: String, required: true }
  }
}
</script>

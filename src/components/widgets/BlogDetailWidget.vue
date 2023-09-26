<template>
  <div class="card mt-4">
    <div class="card-body p-3">
      <img :src="`${blogImage}`" :alt="id" class="img-fluid rounded" loading="lazy" />
      <p class="text-primary pt-3">{{ blogDate }}</p>
      <router-link to="/blog-details" class="my-3 h6">{{ blogTitle }}</router-link>
      <div class="d-flex align-items-center my-3">
        <span>{{ blogAuther }}</span>
        <span class="ms-3 text-primary">Admin</span>
      </div>
      <router-link to="/blog-details" class="btn btn-primary">Read More</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: String, default: '' },
    blogImage: { type: String, default: '' },
    blogDate: { type: String, default: '' },
    blogTitle: { type: String, default: '' },
    blogAuther: { type: String, default: '' }
  }
}
</script>

<template>
  <img :src="`${blogImage}`" :alt="id" class="img-fluid" loading="lazy" />
  <div class="card-body">
    <p>{{ blogText }}</p>
    <h6 class="my-2">{{ blogTitle }}</h6>
  </div>
</template>
<script>
export default {
  props: {
    id: { type: String, default: '' },
    blogTitle: { type: String, default: '' },
    blogImage: { type: String, default: '' },
    blogText: { type: String, default: '' }
  }
}
</script>

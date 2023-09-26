<template>
  <h6 class="mb-3 text-center">{{ featurTitle }}</h6>
  <p class="text-center">{{ featurText }}</p>
  <router-link class="d-flex justify-content-center" to="#">Know More</router-link>
</template>

<script>
export default {
  props: {
    featurTitle: { type: String, default: '' },
    featurText: { type: String, default: '' }
  }
}
</script>

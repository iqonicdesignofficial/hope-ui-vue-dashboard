<template>
  <img :src="`${clientImage}`" alt="client-details" class="img-fluid client-img" loading="lazy" />
</template>

<script>
export default {
  props: {
    clientImage: { type: String, default: '' }
  }
}
</script>

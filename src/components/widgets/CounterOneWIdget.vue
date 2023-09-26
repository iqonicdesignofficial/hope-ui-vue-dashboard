<template>
  <h2 class="mb-2 counter text-white">{{ counterValue }}</h2>
  <h6 class="text-white">{{ counterTitle }}</h6>
</template>

<script>
export default {
  props: {
    counterValue: { type: String, default: '' },
    counterTitle: { type: String, default: '' }
  }
}
</script>

<template>
  <div class="loader simple-loader">
          <div class="loader-body"></div>
  </div>
</template>
<script>
export default {
  name: 'Loader',
  props: {
    dark: { type: Boolean, default: false }
  },
  mounted () {
    const loader = document.querySelector('.loader')
    setTimeout(() => {
      loader.classList.add('animate__animated', 'animate__fadeOut')
      setTimeout(() => {
        loader.classList.add('d-none')
      }, 500)
    }, 500)
  }
}
</script>

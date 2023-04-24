<template>
  <router-view />
</template>

<script>
import { onMounted, onUnmounted, computed } from 'vue'
import { useStore } from 'vuex'
import '@/plugins/styles'
export default {
  name: 'App',
  setup() {
    const store = useStore()
    store.dispatch('setting/setSetting')
    const sidebarType = computed(() => store.getters['setting/sidebar_type'])
    const resizePlugin = () => {
      const sidebarResponsive = document.querySelector('[data-sidebar="responsive"]')
      if (window.innerWidth < 1025) {
        if (sidebarResponsive !== null) {
          if (!sidebarResponsive.classList.contains('sidebar-mini')) {
            sidebarResponsive.classList.add('on-resize')
            store.dispatch('setting/sidebar_type', [...sidebarType.value, 'sidebar-mini'])
          }
        }
      } else {
        if (sidebarResponsive !== null) {
          if (sidebarResponsive.classList.contains('sidebar-mini') && sidebarResponsive.classList.contains('on-resize')) {
            sidebarResponsive.classList.remove('on-resize')
            store.dispatch(
              'setting/sidebar_type',
              sidebarType.value.filter((item) => item !== 'sidebar-mini')
            )
          }
        }
      }
    }
    onMounted(() => {
      window.addEventListener('resize', resizePlugin)
      setTimeout(() => {
        resizePlugin()
      }, 200)
    })
    onUnmounted(() => {
      window.removeEventListener('resize', resizePlugin)
    })
  }
}
</script>

<style lang="scss">
@import '@/assets/custom-vue/scss/styles.scss';
</style>

<template>
  <main v-if="header === 'header_two'" class="main-content">
    <div class="position-relative">
      <HeaderTwo></HeaderTwo>
    </div>
    <router-view></router-view>
  </main>
  <main v-else class="main-content">
    <div class="position-relative">
      <HeaderOne></HeaderOne>
    </div>
    <router-view></router-view>
  </main>
  <footer v-if="footer === 'footer'">
    <FooterComponent />
  </footer>
  <footer v-else-if="footer === 'footer_one'">
    <FooterOne />
  </footer>
  <footer v-else>
    <FooterTwo />
  </footer>
  <div id="back-to-top" ref="backToTopButton" :class="buttonClass" style="display: none" @click="backToTop">
    <router-link class="p-0 btn btn-primary btn-sm position-fixed top" id="top" to="#">
      <svg class="icon-30" width="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 15.5L12 8.5L19 15.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </router-link>
  </div>
  <div class="btn-download">
    <router-link class="btn btn-fixed-end btn-primary btn-icon btn-landing" :to="{ name: 'default.dashboard' }"> Dashboard Demo </router-link>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

//vue router
import { computed } from 'vue'
import { useRoute } from 'vue-router'

//components
import FooterOne from '@/components/modules/landing-pages/FooterOne.vue'
import HeaderTwo from '../components/modules/landing-pages/HeaderTwo.vue'
import HeaderOne from '@/components/modules/landing-pages/HeaderOne.vue'
import FooterTwo from '@/components/modules/landing-pages/FooterTwo.vue'
import FooterComponent from '@/components/modules/landing-pages/FooterComponent.vue'

const route = useRoute()
const header = computed(() => route.meta.header)
const footer = computed(() => route.meta.footer)

onMounted(addBodyClass)
onBeforeUnmount(removeBodyClass)

function addBodyClass() {
  document.body.classList.add('landing-pages')
}

function removeBodyClass() {
  document.body.classList.remove('landing-pages')
}

const buttonClass = ref('')
const backToTopButton = ref(null)

const backToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleScroll = () => {
  if (document.documentElement.scrollTop > 250) {
    buttonClass.value = 'animate__animated animate__fadeIn'
  } else {
    buttonClass.value = 'animate__animated animate__fadeOut'
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

// const backToTop = () => {
//   window.scrollTo({ top: 0, behavior: 'smooth' })
// }
</script>
<style lang="scss">
@import '@/assets/modules/landing-pages/scss/landing-pages.scss';
</style>

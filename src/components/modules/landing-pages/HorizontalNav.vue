<template>
  <nav id="navbar_main" class="mobile-offcanvas nav navbar navbar-expand-xl hover-nav horizontal-nav" ref="sidebarRef">
    <div class="container-fluid p-lg-0 mt-2">
      <div class="offcanvas-header px-0">
        <div class="navbar-brand ms-3">
          <BrandLogo :color="true" />
          <h5 class="logo-title">{{ appName }}</h5>
        </div>
        <button class="btn-close float-end px-3" @click="closeSidebar"></button>
      </div>
      <ul class="navbar-nav iq-nav-menu list-unstyled" id="header-menu">
        <li class="nav-item">
          <a class="nav-link menu-arrow justify-content-start" data-bs-toggle="collapse" href="#homeData" role="button" aria-expanded="false" aria-controls="homeData">
            <span class="item-name">Home</span>
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-18" width="18" height="18" viewBox="0 0 24 24"><path d="M19 8.5L12 15.5L5 8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </a>
          <ul class="iq-header-sub-menu list-unstyled collapse" id="homeData">
            <li class="nav-item"><router-link class="nav-link" to="/landing-page">App Landing Page</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/software"> Software Landing Page </router-link></li>
          </ul>
        </li>
        <li class="nav-item"><router-link class="nav-link" active-class="active" to="/about-us">About Us </router-link></li>
        <li class="nav-item"><router-link class="nav-link" active-class="active" to="/features"> Features </router-link></li>
        <li class="nav-item"><router-link class="nav-link" active-class="active" to="/pricing">Pricing</router-link></li>
        <li class="nav-item d-xl-none"><router-link class="nav-link" active-class="active" to="/blogs">Blog</router-link></li>
        <!-- <li class="nav-item d-xl-none"><router-link class="nav-link" active-class="active" to="/shop"> Shop</router-link></li> -->
        <li class="nav-item d-xl-none"><router-link class="nav-link" active-class="active" to="/faq">Faq</router-link></li>
        <li class="nav-item d-xl-none"><router-link class="nav-link" active-class="active" to="/contact-us">Contact Us</router-link></li>
      </ul>
    </div>
    <!-- container-fluid.// -->
  </nav>
</template>
<script setup>
import BrandLogo from '@/components/custom/logo/BrandLogo.vue'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const appName = computed(() => store.getters['setting/app_name'])
const sidebarRef = ref(null)
const closeSidebar = () => {
  if (sidebarRef.value) {
    sidebarRef.value.classList.remove('show')
  }
}
</script>

<template>
  <nav class="nav navbar navbar-expand-xl navbar-light iq-navbar header-hover-menu">
    <div class="container-fluid navbar-inner mt-2">
      <div class="d-flex align-items-center justify-content-between w-100 landing-header">
        <router-link to="/landing-page" class="active exact-active navbar-brand m-0 d-xl-flex d-none">
          <!--Logo start-->
          <svg class="icon-30 text-primary" width="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor"></rect>
            <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor"></rect>
            <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor"></rect>
            <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor"></rect>
          </svg>
          <!--logo End-->
          <h5 class="logo-title">{{ appName }}</h5>
        </router-link>
        <div class="d-flex align-items-center d-xl-none">
          <button data-bs-toggle="offcanvas" data-bs-target="#navbar_main" class="d-xl-none btn btn-primary rounded-pill p-1 pt-0" type="button">
            <svg width="20px" class="icon-20" viewBox="0 0 24 24">
              <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
            </svg>
          </button>
          <router-link to="/landing-page" class="navbar-brand ms-3">
            <!--Logo start-->
            <svg class="icon-30 text-primary" width="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor"></rect>
              <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor"></rect>
              <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor"></rect>
              <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor"></rect>
            </svg>
            <!--logo End-->
            <h5 class="logo-title">{{ appName }}</h5>
          </router-link>
        </div>
        <ul class="d-block d-xl-none list-unstyled">
          <li class="nav-item dropdown iq-responsive-menu">
            <div class="btn btn-sm bg-body" id="navbarDropdown-search-11" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <svg class="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>
                <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>
            <ul class="dropdown-menu dropdown-menu-end ms-5" aria-labelledby="navbarDropdown-search-11" style="width: 18rem">
              <li class="px-3 py-0">
                <div class="form-group input-group mb-0">
                  <input type="text" class="form-control" placeholder="Search..." />
                  <span class="input-group-text">
                    <svg class="icon-20" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>
                      <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <!-- Horizontal Menu Start -->
        <nav id="navbar_main" class="mobile-offcanvas nav navbar navbar-expand-xl hover-nav horizontal-nav" ref="sidebarRef">
          <div class="container-fluid p-lg-0">
            <div class="offcanvas-header px-0">
              <div class="navbar-brand ms-3">
                <brand-logo color="true" />
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
              <li class="nav-item"><router-link class="nav-link" to="/about-us">About Us </router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/features"> Features </router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/pricing">Pricing</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/blogs">Blog</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/faq">Faq</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/contact-us">Contact Us</router-link></li>
            </ul>
          </div>
          <!-- container-fluid.// -->
        </nav>
        <!-- Sidebar Menu End -->
      </div>
    </div>
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
<style>
body {
  padding-right: 0 !important;
}
</style>

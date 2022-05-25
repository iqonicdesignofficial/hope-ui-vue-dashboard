<template>
  <default-navbar>
    <button data-trigger="navbar_main" class="d-xl-none btn btn-primary rounded-pill p-1 pt-0" type="button">
      <svg width="20px" height="20px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
      </svg>
    </button>
    <b-col lg="3 navbar-brand">
      <router-link :to="{ name: 'default.dashboard' }" class="d-flex">
        <brand-logo></brand-logo>
        <h4 class="logo-title d-none d-sm-block"><brand-name></brand-name></h4>
      </router-link>
    </b-col>
    <horizontal-menu></horizontal-menu>
  </default-navbar>
</template>

<script setup>
import DefaultNavbar from '@/components/custom/navbar/DefaultNavbar.vue'
import HorizontalMenu from '@/components/custom/navbar/HorizontalMenu.vue'
</script>

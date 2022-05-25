<template>
  <span class="screen-darken"></span>
  <!-- Main Content Start Here -->
  <main class="main-content">
    <dual-compact-navbar></dual-compact-navbar>
    <main-content-component>
      <!-- Router View For Pages -->
      <router-view></router-view>
    </main-content-component>
  </main>
  <!-- Main Content Start Here -->
  <!-- Footer Component Start Here -->
  <footer-component></footer-component>
  <!-- Footer Component End Here -->
  <!-- Live Customizer Component Start Here -->
  <setting-offcanvas></setting-offcanvas>
  <!-- Live Customizer Component End Here-->
</template>

<script setup>
// Library
import { onMounted, onUnmounted } from 'vue'

// Custom Utility Functions
import { addClass, removeClass } from '@/utilities/dom'

// Componants
import DualCompactNavbar from '@/components/menu-styles/DualCompactNavbar.vue'
import MainContentComponent from '@/components/partials/MainContentComponent.vue'
import FooterComponent from '@/components/partials/FooterComponent.vue'
import SettingOffcanvas from '@/components/setting/SettingOffcanvas.vue'
onMounted(() => {
  addClass(document.body, 'dual-compact')
})
onUnmounted(() => {
  removeClass(document.body, 'dual-compact')
})
</script>

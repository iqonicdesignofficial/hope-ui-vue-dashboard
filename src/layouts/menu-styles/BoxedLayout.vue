<template>
  <div class="boxed-inner">
    <span class="screen-darken"></span>
    <!-- Main Content Start Here -->
    <main class="main-content">
      <horizontal-navbar></horizontal-navbar>
      <main-content-component>
        <!-- Router View For Pages -->
        <router-view></router-view>
      </main-content-component>
    </main>
    <!-- Main Content Start Here -->
    <!-- Footer Component Start Here -->
    <footer-component></footer-component>
    <!-- Footer Component End Here -->
  </div>
  <!-- Live Customizer Component Start Here -->
  <setting-offcanvas></setting-offcanvas>
  <!-- Live Customizer Component End Here-->
</template>

<script setup>
// Library
import { onMounted, onUnmounted } from 'vue'

// Custom Utility Functions
import { addClass, removeClass } from '@/utilities/dom'

// Components
import HorizontalNavbar from '@/components/menu-styles/HorizontalNavbar.vue'
import MainContentComponent from '@/components/partials/MainContentComponent.vue'
import FooterComponent from '@/components/partials/FooterComponent.vue'
import SettingOffcanvas from '@/components/setting/SettingOffcanvas.vue'
onMounted(() => {
  addClass(document.body, 'boxed')
})
onUnmounted(() => {
  removeClass(document.body, 'boxed')
})
</script>

<template>
  <span class="screen-darken"></span>
  <!-- Main Content Start Here -->
  <main class="main-content">
    <dual-horizontal-navbar></dual-horizontal-navbar>
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
import DualHorizontalNavbar from '@/components/menu-styles/DualHorizontalNavbar.vue'
import MainContentComponent from '@/components/partials/MainContentComponent.vue'
import FooterComponent from '@/components/partials/FooterComponent.vue'
import SettingOffcanvas from '@/components/setting/SettingOffcanvas.vue'
</script>

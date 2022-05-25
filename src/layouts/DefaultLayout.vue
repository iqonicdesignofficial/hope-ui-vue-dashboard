<template>
  <loader-component :show="isLoader"></loader-component>
  <!-- Sidebar Component Start Here-->
  <sidebar-component></sidebar-component>
  <!-- Sidebar Component End Here-->
  <main class="main-content">
    <div :class="`position-relative  ${isBanner ? 'iq-banner ' + bannerStyle : ''}`">
      <!-- Header Component Start Here -->
      <header-component></header-component>
      <template v-if="isBanner">
        <!-- Sub Header Component Start Here-->
        <sub-header></sub-header>
        <!-- Sub Header Component End Here-->
      </template>
      <!-- Header Component End Here -->
    </div>

    <!-- Main Content Start Here -->
    <main-content-component>
      <!-- Router View For Pages -->
      <router-view></router-view>
    </main-content-component>
    <!-- Main Content Start Here -->

    <!-- Footer Component Start Here -->
    <footer-component></footer-component>
    <!-- Footer Component End Here -->
  </main>
  <!-- Live Customizer Component Start Here -->
  <setting-offcanvas></setting-offcanvas>
  <!-- Live Customizer Component End Here-->
</template>

<script setup>
// Library
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

// Components
import HeaderComponent from '@/components/partials/HeaderComponent.vue'
import SubHeader from '@/components/custom/header/SubHeader.vue'
import SidebarComponent from '@/components/partials/SidebarComponent.vue'
import MainContentComponent from '@/components/partials/MainContentComponent.vue'
import FooterComponent from '@/components/partials/FooterComponent.vue'
import SettingOffcanvas from '@/components/setting/SettingOffcanvas.vue'
import LoaderComponent from '@/components/custom/loader/LoaderComponent.vue'

const route = useRoute()
const store = useStore()
const isBanner = computed(() => route.meta.isBanner)
const bannerStyle = computed(() => store.getters['setting/header_banner'])
const isLoader = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoader.value = false
  }, 300)
})
</script>

<style></style>

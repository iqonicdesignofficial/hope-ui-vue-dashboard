<template>
  <aside id="first-tour" :class="`sidebar sidebar-base ${sidebarColor} ${sidebarMenuStyle} ${sidebarType.join(' ')}`" data-toggle="main-sidebar" data-sidebar="responsive">
    <div class="sidebar-header d-flex align-items-center justify-content-start">
      <router-link :to="{ name: 'default.dashboard' }" class="navbar-brand">
        <brand-logo></brand-logo>
        <h4 class="logo-title" data-setting="app_name">
          <brand-name></brand-name>
        </h4>
      </router-link>
      <div class="sidebar-toggle" @click="toggleSidebar">
        <i class="icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.25 12.2744L19.25 12.2744" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </i>
      </div>
    </div>
    <div class="sidebar-body pt-0 data-scrollbar">
      <slot name="profile-card"></slot>
      <div class="sidebar-list">
        <slot></slot>
      </div>
    </div>
    <div class="sidebar-footer"></div>
  </aside>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import Scrollbar from 'smooth-scrollbar'
export default {
  setup() {
    const store = useStore()
    const sidebarColor = computed(() => store.getters['setting/sidebar_color'])
    const sidebarType = computed(() => store.getters['setting/sidebar_type'])
    const sidebarMenuStyle = computed(() => store.getters['setting/sidebar_menu_style'])
    const toggleSidebar = () => {
      // Code Here
      if (sidebarType.value.includes('sidebar-mini')) {
        store.dispatch(
          'setting/sidebar_type',
          sidebarType.value.filter((item) => item !== 'sidebar-mini')
        )
      } else {
        store.dispatch('setting/sidebar_type', [...sidebarType.value, 'sidebar-mini'])
      }
    }
    onMounted(() => {
      Scrollbar.init(document.querySelector('.data-scrollbar'), { continuousScrolling: false })
    })
    return { sidebarColor, sidebarType, sidebarMenuStyle, toggleSidebar }
  }
}
</script>

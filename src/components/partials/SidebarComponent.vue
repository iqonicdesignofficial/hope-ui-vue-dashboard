<template>
  <!-- Sidebar Component Start Here-->
  <default-sidebar>
    <ul class="navbar-nav iq-main-menu" id="sidebar-menu">
      <side-menu title="Home" :static-item="true"></side-menu>
      <side-menu isTag="router-link" title="Dashboard" icon="view-grid" :route="{ to: 'default.dashboard' }"></side-menu>

      <side-menu title="Menu Style" icon="adjustment" toggle-id="menu-style" :caret-icon="true" :route="{ popup: 'false', to: 'menu-style' }" @onClick="toggle" :active="currentRoute.includes('menu-style')">
        <b-collapse tag="ul" class="sub-nav" id="menu-style" accordion="sidebar-menu" :visible="currentRoute.includes('menu-style')">
          <side-menu title="Horizontal" icon="circle" :icon-size="10" icon-type="solid" miniTitle="H" :route="{ to: 'horizontal.dashboard' }"></side-menu>
          <side-menu title="Dual Horizontal" icon="circle" :icon-size="10" icon-type="solid" miniTitle="D" :route="{ to: 'dual-horizontal.dashboard' }"></side-menu>
          <side-menu title="Dual Compact" icon="circle" :icon-size="10" icon-type="solid" miniTitle="D" :route="{ to: 'dual-compact' }"></side-menu>
          <side-menu title="Boxed Horizontal" icon="circle" :icon-size="10" icon-type="solid" miniTitle="B" :route="{ to: 'boxed.dashboard' }"></side-menu>
          <side-menu title="Boxed Fancy" icon="circle" :icon-size="10" icon-type="solid" miniTitle="B" :route="{ to: 'boxed-fancy.dashboard' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu title="Design System" icon="wallet" :route="{ to: 'design-system.main' }">
        <template #title>
          Design System
          <b-badge variant="success" pill>UI</b-badge>
        </template>
      </side-menu>
      <li><hr class="hr-horizontal" /></li>
      <side-menu title="PAGES" :static-item="true"></side-menu>
      <side-menu title="Special Pages" icon="document" toggle-id="special-pages" :caret-icon="true" :route="{ popup: 'false', to: 'special-pages' }" @onClick="toggle" :active="currentRoute.includes('special-pages')">
        <b-collapse tag="ul" class="sub-nav" id="special-pages" accordion="sidebar-menu" :visible="currentRoute.includes('special-pages')">
          <side-menu isTag="router-link" title="Billing" icon="circle" :icon-size="10" icon-type="solid" miniTitle="B" :route="{ to: 'default.billing' }"></side-menu>
          <side-menu isTag="router-link" title="Calender" icon="circle" :icon-size="10" icon-type="solid" miniTitle="C" :route="{ to: 'default.calender' }"></side-menu>
          <side-menu isTag="router-link" title="Kanban" icon="circle" :icon-size="10" icon-type="solid" miniTitle="K" :route="{ to: 'default.kanban' }"></side-menu>
          <side-menu isTag="router-link" title="Pricing" icon="circle" :icon-size="10" icon-type="solid" miniTitle="P" :route="{ to: 'default.pricing' }"></side-menu>
          <side-menu isTag="router-link" title="Timeline" icon="circle" :icon-size="10" icon-type="solid" miniTitle="T" :route="{ to: 'default.timeline' }"></side-menu>
          <side-menu isTag="router-link" title="RTL Support" icon="circle" :icon-size="10" icon-type="solid" miniTitle="R" :route="{ to: 'default.rtlsupport' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu title="Authentication" icon="shield-check" toggle-id="auth-skins" :caret-icon="true" :route="{ popup: 'false', to: 'auth' }" @onClick="toggle" :active="currentRoute.includes('auth')">
        <b-collapse tag="ul" class="sub-nav" id="auth-skins" accordion="sidebar-menu" :visible="currentRoute.includes('auth')">
          <side-menu isTag="router-link" title="Login" icon="circle" :icon-size="10" icon-type="solid" miniTitle="L" :route="{ to: 'auth.login' }"></side-menu>
          <side-menu isTag="router-link" title="Register" icon="circle" :icon-size="10" icon-type="solid" miniTitle="R" :route="{ to: 'auth.register' }"></side-menu>
          <side-menu isTag="router-link" title="Confirm Mail" icon="circle" :icon-size="10" icon-type="solid" miniTitle="CM" :route="{ to: 'auth.varify-email' }"></side-menu>
          <side-menu isTag="router-link" title="Lock Screen" icon="circle" :icon-size="10" icon-type="solid" miniTitle="LS" :route="{ to: 'auth.lock-screen' }"></side-menu>
          <side-menu isTag="router-link" title="Recover Password" icon="circle" :icon-size="10" icon-type="solid" miniTitle="RP" :route="{ to: 'auth.reset-password' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu title="Users" icon="user-group" toggle-id="users" :caret-icon="true" :route="{ popup: 'false', to: 'user' }" @onClick="toggle" :active="currentRoute.includes('user')">
        <b-collapse tag="ul" class="sub-nav" id="users" accordion="sidebar-menu" :visible="currentRoute.includes('user')">
          <side-menu isTag="router-link" title="User Profile" icon="circle" :icon-size="10" icon-type="solid" miniTitle="UP" :route="{ to: 'default.user-profile' }"></side-menu>
          <side-menu isTag="router-link" title="User Add" icon="circle" :icon-size="10" icon-type="solid" miniTitle="UA" :route="{ to: 'default.user-add' }"></side-menu>
          <side-menu isTag="router-link" title="User List" icon="circle" :icon-size="10" icon-type="solid" miniTitle="UL" :route="{ to: 'default.user-list' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu title="Utilities" icon="bookmark" toggle-id="utilities" :caret-icon="true" :route="{ popup: 'false', to: 'errors' }" @onClick="toggle" :active="currentRoute.includes('errors')">
        <b-collapse tag="ul" class="sub-nav" id="utilities" accordion="sidebar-menu" :visible="currentRoute.includes('errors')">
          <side-menu title="Error 404" icon="circle" :icon-size="10" icon-type="solid" miniTitle="404" :route="{ to: 'errors.404' }"></side-menu>
          <side-menu title="Error 500" icon="circle" :icon-size="10" icon-type="solid" miniTitle="500" :route="{ to: 'errors.500' }"></side-menu>
          <side-menu title="Maintenance" icon="circle" :icon-size="10" icon-type="solid" miniTitle="M" :route="{ to: 'errors.maintenance' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu isTag="router-link" title="Admin" icon="lock-open" :route="{ to: 'default.admin-permissions' }"></side-menu>
      <li><hr class="hr-horizontal" /></li>
      <side-menu title="ELEMENTS" :static-item="true"></side-menu>
      <side-menu title="Components" icon="brief-case"></side-menu>
      <side-menu title="Widgets" icon="offer" toggle-id="widgets" :caret-icon="true" :route="{ popup: 'false', to: 'widget' }" @onClick="toggle" :active="currentRoute.includes('widget')">
        <b-collapse tag="ul" class="sub-nav" id="widgets" accordion="sidebar-menu" :visible="currentRoute.includes('widget')">
          <side-menu isTag="router-link" title="Widgets Basic" icon="circle" :icon-size="10" icon-type="solid" miniTitle="WB" :route="{ to: 'default.widget-basic' }"></side-menu>
          <side-menu isTag="router-link" title="Widgets Chart" icon="circle" :icon-size="10" icon-type="solid" miniTitle="WC" :route="{ to: 'default.widget-chart' }"></side-menu>
          <side-menu isTag="router-link" title="Widgets Card" icon="circle" :icon-size="10" icon-type="solid" miniTitle="WC" :route="{ to: 'default.widget-card' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu title="Maps" icon="location" toggle-id="maps" :caret-icon="true" :route="{ popup: 'false', to: 'maps' }" @onClick="toggle" :active="currentRoute.includes('maps')">
        <b-collapse tag="ul" class="sub-nav" id="maps" accordion="sidebar-menu" :visible="currentRoute.includes('maps')">
          <side-menu isTag="router-link" title="Google" icon="circle" :icon-size="10" icon-type="solid" miniTitle="G" :route="{ to: 'default.map-google' }"></side-menu>
          <side-menu isTag="router-link" title="Vector" icon="circle" :icon-size="10" icon-type="solid" miniTitle="V" :route="{ to: 'default.map-vector' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu title="Form" icon="file" toggle-id="form" :caret-icon="true" :route="{ popup: 'false', to: 'form' }" @onClick="toggle" :active="currentRoute.includes('form')">
        <b-collapse tag="ul" class="sub-nav" id="form" accordion="sidebar-menu" :visible="currentRoute.includes('form')">
          <side-menu isTag="router-link" title="Elements" icon="circle" :icon-size="10" icon-type="solid" miniTitle="E" :route="{ to: 'default.elements' }"></side-menu>
          <side-menu isTag="router-link" title="Wizard" icon="circle" :icon-size="10" icon-type="solid" miniTitle="W" :route="{ to: 'default.wizard' }"></side-menu>
          <side-menu isTag="router-link" title="Validation" icon="circle" :icon-size="10" icon-type="solid" miniTitle="V" :route="{ to: 'default.validation' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu title="Table" icon="table" toggle-id="table" :caret-icon="true" :route="{ popup: 'false', to: 'table' }" @onClick="toggle" :active="currentRoute.includes('table')">
        <b-collapse tag="ul" class="sub-nav" id="table" accordion="sidebar-menu" :visible="currentRoute.includes('table')">
          <side-menu isTag="router-link" title="Bootstrap Table" icon="circle" :icon-size="10" icon-type="solid" miniTitle="BS" :route="{ to: 'default.bootstrap-table' }"></side-menu>
          <side-menu isTag="router-link" title="Datatable" icon="circle" :icon-size="10" icon-type="solid" miniTitle="DT" :route="{ to: 'default.data-table' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu title="Icons" icon="i" toggle-id="icons" :caret-icon="true" :route="{ popup: 'false', to: 'icons' }" @onClick="toggle" :active="currentRoute.includes('icons')">
        <b-collapse tag="ul" class="sub-nav" id="icons" accordion="sidebar-menu" :visible="currentRoute.includes('icons')">
          <side-menu isTag="router-link" title="Solid" icon="circle" :icon-size="10" icon-type="solid" miniTitle="S" :route="{ to: 'default.icons.solid' }"></side-menu>
          <side-menu isTag="router-link" title="Outlined" icon="circle" :icon-size="10" icon-type="solid" miniTitle="O" :route="{ to: 'default.icons.outlined' }"></side-menu>
          <side-menu isTag="router-link" title="Dual Tone" icon="circle" :icon-size="10" icon-type="solid" miniTitle="DT" :route="{ to: 'default.icons.dual-tone' }"></side-menu>
        </b-collapse>
      </side-menu>
    </ul>
  </default-sidebar>
  <!-- Sidebar Component End Here-->
</template>

<!-- <script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import DefaultSidebar from '@/components/custom/sidebar/DefaultSidebar.vue'
import SideMenu from '@/components/custom/nav/SideMenu.vue'
export default {
  components: { DefaultSidebar, SideMenu },
  setup() {
    const visible = ref(false)
    const currentRoute = useRoute()
    const openMenu = () => {
      visible.value = !visible.value
    }
    const checkActive = (route) => {
      if (currentRoute.name === route) {
        return true
      }
      if (route.includes(currentRoute.name)) {
        return true
      }
    }

    return { visible, openMenu, checkActive }
  },
  methods: {}
}
</script> -->
<script setup>
import DefaultSidebar from '@/components/custom/sidebar/DefaultSidebar.vue'
import SideMenu from '@/components/custom/nav/SideMenu.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const currentRoute = ref('')
const route = useRoute()
const toggle = (route) => {
  if (route === currentRoute.value && route.includes('.')) {
    const menu = currentRoute.value.split('.')
    return (currentRoute.value = menu[menu.length - 2])
  }
  if (route !== currentRoute.value && currentRoute.value.includes(route)) {
    return (currentRoute.value = '')
  }
  if (route !== currentRoute.value) {
    return (currentRoute.value = route)
  }
  if (route === currentRoute.value) {
    return (currentRoute.value = '')
  }
  return (currentRoute.value = '')
}
toggle(route.name)
</script>
<style></style>

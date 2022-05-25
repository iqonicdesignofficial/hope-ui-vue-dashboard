<template>
  <!-- Sidebar Component Start Here-->
  <default-sidebar>
    <ul class="navbar-nav iq-main-menu" id="sidebar-menu">
      <side-menu title="Home" :static-item="true"></side-menu>
      <side-menu title="Dashboard" icon="view-grid" :route="{ to: 'default.dashboard' }" :active="true"></side-menu>
      <side-menu title="Menu Style" icon="adjustment" toggle-id="menu-style" :caret-icon="true">
        <b-collapse tag="ul" class="sub-nav" id="menu-style" accordion="sidebar-menu">
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
      <side-menu title="Special Pages" icon="document" toggle-id="special-pages" :caret-icon="true">
        <b-collapse tag="ul" class="sub-nav" id="special-pages" accordion="sidebar-menu">
          <side-menu title="Billing" icon="circle" :icon-size="10" icon-type="solid" miniTitle="B" :route="{ to: 'default.billing' }"></side-menu>
          <side-menu title="Calender" icon="circle" :icon-size="10" icon-type="solid" miniTitle="C" :route="{ to: 'default.calender' }"></side-menu>
          <side-menu title="Kanban" icon="circle" :icon-size="10" icon-type="solid" miniTitle="K" :route="{ to: 'default.kanban' }"></side-menu>
          <side-menu title="Pricing" icon="circle" :icon-size="10" icon-type="solid" miniTitle="P" :route="{ to: 'default.pricing' }"></side-menu>
          <side-menu title="Timeline" icon="circle" :icon-size="10" icon-type="solid" miniTitle="T" :route="{ to: 'default.timeline' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu title="Authentication" icon="shield-check" toggle-id="auth-skins" :caret-icon="true">
        <b-collapse tag="ul" class="sub-nav" id="auth-skins" accordion="sidebar-menu">
          <side-menu title="Login" icon="circle" :icon-size="10" icon-type="solid" miniTitle="L" :route="{ to: 'auth.login' }"></side-menu>
          <side-menu title="Register" icon="circle" :icon-size="10" icon-type="solid" miniTitle="R" :route="{ to: 'auth.register' }"></side-menu>
          <side-menu title="Confirm Mail" icon="circle" :icon-size="10" icon-type="solid" miniTitle="CM" :route="{ to: 'auth.varify-email' }"></side-menu>
          <side-menu title="Lock Screen" icon="circle" :icon-size="10" icon-type="solid" miniTitle="LS" :route="{ to: 'auth.lock-screen' }"></side-menu>
          <side-menu title="Recover Password" icon="circle" :icon-size="10" icon-type="solid" miniTitle="RP" :route="{ to: 'auth.reset-password' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu title="Users" icon="user-group" toggle-id="users" :caret-icon="true">
        <b-collapse tag="ul" class="sub-nav" id="users" accordion="sidebar-menu">
          <side-menu title="User Profile" icon="circle" :icon-size="10" icon-type="solid" miniTitle="UP" :route="{ to: 'default.user-profile' }"></side-menu>
          <side-menu title="User Add" icon="circle" :icon-size="10" icon-type="solid" miniTitle="UA" :route="{ to: 'default.user-add' }"></side-menu>
          <side-menu title="User List" icon="circle" :icon-size="10" icon-type="solid" miniTitle="UL" :route="{ to: 'default.user-list' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu title="Utilities" icon="bookmark" toggle-id="utilities" :caret-icon="true">
        <b-collapse tag="ul" class="sub-nav" id="utilities" accordion="sidebar-menu">
          <side-menu title="Error 404" icon="circle" :icon-size="10" icon-type="solid" miniTitle="404" :route="{ to: 'errors.404' }"></side-menu>
          <side-menu title="Error 500" icon="circle" :icon-size="10" icon-type="solid" miniTitle="500" :route="{ to: 'errors.500' }"></side-menu>
          <side-menu title="Maintenance" icon="circle" :icon-size="10" icon-type="solid" miniTitle="M" :route="{ to: 'errors.maintenance' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu title="Admin" icon="lock-open" :route="{ to: 'default.admin-permissions' }"></side-menu>
      <li><hr class="hr-horizontal" /></li>
      <side-menu title="ELEMENTS" :static-item="true"></side-menu>
      <side-menu title="Components" icon="brief-case"></side-menu>
      <side-menu title="Widgets" icon="offer" toggle-id="widgets" :caret-icon="true">
        <b-collapse tag="ul" class="sub-nav" id="widgets" accordion="sidebar-menu">
          <side-menu title="Widgets Basic" icon="circle" :icon-size="10" icon-type="solid" miniTitle="WB" :route="{ to: 'default.widget-basic' }"></side-menu>
          <side-menu title="Widgets Chart" icon="circle" :icon-size="10" icon-type="solid" miniTitle="WC" :route="{ to: 'default.widget-chart' }"></side-menu>
          <side-menu title="Widgets Card" icon="circle" :icon-size="10" icon-type="solid" miniTitle="WC" :route="{ to: 'default.widget-card' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu title="Maps" icon="location" toggle-id="maps" :caret-icon="true">
        <b-collapse tag="ul" class="sub-nav" id="maps" accordion="sidebar-menu">
          <side-menu title="Google" icon="circle" :icon-size="10" icon-type="solid" miniTitle="G" :route="{ to: 'default.map-google' }"></side-menu>
          <side-menu title="Vector" icon="circle" :icon-size="10" icon-type="solid" miniTitle="V" :route="{ to: 'default.map-vector' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu title="Form" icon="file" toggle-id="form" :caret-icon="true">
        <b-collapse tag="ul" class="sub-nav" id="form" accordion="sidebar-menu">
          <side-menu title="Elements" icon="circle" :icon-size="10" icon-type="solid" miniTitle="E" :route="{ to: 'default.elements' }"></side-menu>
          <side-menu title="Wizard" icon="circle" :icon-size="10" icon-type="solid" miniTitle="W" :route="{ to: 'default.wizard' }"></side-menu>
          <side-menu title="Validation" icon="circle" :icon-size="10" icon-type="solid" miniTitle="V" :route="{ to: 'default.validation' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu title="Table" icon="table" toggle-id="table" :caret-icon="true">
        <b-collapse tag="ul" class="sub-nav" id="table" accordion="sidebar-menu">
          <side-menu title="Bootstrap Table" icon="circle" :icon-size="10" icon-type="solid" miniTitle="BS" :route="{ to: 'default.bootstrap-table' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu title="Icons" icon="i" toggle-id="icons" :caret-icon="true">
        <b-collapse tag="ul" class="sub-nav" id="icons" accordion="sidebar-menu">
          <side-menu title="Solid" icon="circle" :icon-size="10" icon-type="solid" miniTitle="S" :route="{ to: 'default.icons.solid' }"></side-menu>
          <side-menu title="Outlined" icon="circle" :icon-size="10" icon-type="solid" miniTitle="O" :route="{ to: 'default.icons.outlined' }"></side-menu>
          <side-menu title="Dual Tone" icon="circle" :icon-size="10" icon-type="solid" miniTitle="DT" :route="{ to: 'default.icons.dual-tone' }"></side-menu>
        </b-collapse>
      </side-menu>
    </ul>
  </default-sidebar>
  <!-- Sidebar Component End Here-->
</template>

<script>
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
</script>

<style></style>

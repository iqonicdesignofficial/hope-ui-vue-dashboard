<template>
  <router-view> </router-view>
  <!-- Live Customizer Component Start Here -->
  <setting-offcanvas></setting-offcanvas>
  <!-- Live Customizer Component End Here-->
</template>

<script>
import SettingOffcanvas from '@/components/setting/SettingOffcanvas.vue'
export default {
  components: { SettingOffcanvas }
}
</script>

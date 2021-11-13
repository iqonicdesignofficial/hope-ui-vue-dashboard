<template>
  <router-view/>
</template>

<script>
import 'nouislider/dist/nouislider.css'
export default {
  name: 'App'
}
</script>
<style lang="scss">
  @import "@/assets/scss/hope-ui.scss";
  @import "@/assets/scss/custom.scss";
  @import "@/assets/scss/dark.scss";
  @import "@/assets/scss/rtl.scss";
  @import "@/assets/scss/customizer.scss";
  @import url("./plugins/aos/dist/aos.css");
  @import url("./plugins/Leaflet/leaflet.css");
  @import url("./assets/vendor/fullcalendar/core/main.css");
  @import url("./assets/vendor/fullcalendar/daygrid/main.css");
  @import url("./assets/vendor/fullcalendar/timegrid/main.css");
  @import url("./assets/vendor/fullcalendar/list/main.css");
</style>

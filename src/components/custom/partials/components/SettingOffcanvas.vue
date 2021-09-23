<template>
  <div :class="`offcanvas ${stateSchemeDirection == 'ltr'?'offcanvas-end':'offcanvas-start'} ${showoffcanvas?'show':''}`" tabindex="-1" id="offcanvasExample" data-bs-scroll="true" data-bs-backdrop="true" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title" id="offcanvasExampleLabel">Settings</h3>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" @click="closeoffcanvas"></button>
    </div>
    <div class="offcanvas-body">
      <div class="row">
        <div class="col-lg-12">
          <h5 class="mb-3">Scheme</h5>
          <div class="d-grid gap-x-3 grid-cols-3 mb-4">
            <div :class="`btn-border ${stateScheme =='auto' ? 'active':''}`" data-setting="color-mode" data-name="color" data-value="auto" @click="schemeActive('auto')">
                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M7,2V13H10V22L17,10H13L17,2H7Z" />
                </svg>
              <span class="ms-2 "> Auto </span>
            </div>
            <div :class="`btn-border ${stateScheme =='dark' ? 'active':''}`" data-setting="color-mode" data-name="color" data-value="dark" @click="schemeActive('dark')">
              <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M9,2C7.95,2 6.95,2.16 6,2.46C10.06,3.73 13,7.5 13,12C13,16.5 10.06,20.27 6,21.54C6.95,21.84 7.95,22 9,22A10,10 0 0,0 19,12A10,10 0 0,0 9,2Z" />
                </svg>
              <span class="ms-2 "> Dark  </span>
            </div>
            <div :class="`btn-border ${stateScheme =='light' ? 'active':''}`" data-setting="color-mode" data-name="color" data-value="light" @click="schemeActive('light')">
                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z" />
              </svg>
              <span class="ms-2 "> Light</span>
            </div>
          </div>
          <hr class="hr-horizontal">
          <h5 class="mb-3 mt-4">Scheme Direction</h5>
          <div class="d-grid gap-x-3 grid-cols-2 mb-4">
            <div class="text-center" @click="schemediractive('ltr')">
              <img src="@/assets/images/settings/dark/01.png" alt="ltr" :class="`mode dark-img img-fluid btn-border p-0 flex-column ${stateSchemeDirection == 'ltr' ? 'active':''}`" data-setting="dir-mode" data-name="dir" data-value="ltr">
              <img src="@/assets/images/settings/light/01.png" alt="ltr" :class="`mode light-img img-fluid btn-border p-0 flex-column ${stateSchemeDirection == 'ltr' ? 'active':''}`" data-setting="dir-mode" data-name="dir" data-value="ltr">
              <span class=" mt-2"> LTR </span>
            </div>
            <div class="text-center" @click="schemediractive('rtl')">
              <img src="@/assets/images/settings/dark/02.png" alt="" :class="`mode dark-img img-fluid btn-border p-0 flex-column ${stateSchemeDirection == 'rtl' ? 'active':''}`" data-setting="dir-mode" data-name="dir" data-value="rtl">
                <img src="@/assets/images/settings/light/02.png" alt="" :class="`mode light-img img-fluid btn-border p-0 flex-column ${stateSchemeDirection == 'rtl' ? 'active':''}`" data-setting="dir-mode" data-name="dir" data-value="rtl">
                <span class="mt-2 "> RTL  </span>
            </div>
          </div>
          <hr class="hr-horizontal">
          <h5 class="mt-4 mb-3">Sidebar Color</h5>
          <div class="d-grid gap-x-3 grid-cols-2 mb-4">
            <div :class="`btn btn-border mb-4 ${stateSidebarColor =='sidebar-dark' ? 'active':''}`" data-setting="sidebar" data-name="sidebar-color" data-value="sidebar-dark" @click="sidebarcolorActive('sidebar-dark')">
                <i class="text-dark">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                  </svg>
                </i>
              <span class="ms-2 "> Dark </span>
            </div>
            <div :class="`btn btn-border mb-4 ${stateSidebarColor== 'sidebar-color' ? 'active':''}`" data-setting="sidebar" data-name="sidebar-color" data-value="sidebar-color" @click="sidebarcolorActive('sidebar-color')">
                <i class="text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                  </svg>
                </i>
              <span class="ms-2 "> Color </span>
            </div>
            <div :class="`btn btn-border ${stateSidebarColor== 'sidebar-white' ? 'active':''}`" data-setting="sidebar" data-name="sidebar-color" data-value="sidebar-white" @click="sidebarcolorActive('sidebar-white')">
                <i class="text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="8" fill="currentColor" stroke="black" stroke-width="3"></circle>
                  </svg>
                </i>
              <span class="ms-2 "> White </span>
            </div>
            <div :class="`btn btn-border ${stateSidebarColor== 'sidebar-transparent' ? 'active':''}`" data-setting="sidebar" data-name="sidebar-color" data-value="sidebar-transparent" @click="sidebarcolorActive('sidebar-transparent')">
                <i class="text-body">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="8" fill="#F5F6FA" stroke="black" stroke-width="3"></circle>
                  </svg>
                </i>
              <span class="ms-2 "> Transparent </span>
            </div>
          </div>
          <hr class="hr-horizontal">
          <h5 class="mt-4 mb-3">Sidebar Types</h5>
          <div class="d-grid gap-x-3 grid-cols-3 mb-4">
            <div class="text-center" @click="sidebartypeActive('sidebar-mini')">
              <img src="@/assets/images/settings/dark/03.png" alt="mini" :class="`mode dark-img img-fluid btn-border p-0 flex-column ${miniclass == 'sidebar-mini' ? 'active':''}`" data-setting="sidebar" data-name="sidebar-type" data-value="sidebar-mini">
              <img src="@/assets/images/settings/light/03.png" alt="mini" :class="`mode light-img img-fluid btn-border p-0 flex-column ${miniclass == 'sidebar-mini' ? 'active':''}`" data-setting="sidebar" data-name="sidebar-type" data-value="sidebar-mini">
              <span class="mt-2">Mini</span>
            </div>
            <div class="text-center" @click="sidebartypeActive('sidebar-hover')">
            <img src="@/assets/images/settings/dark/04.png" alt="hover" :class="`mode dark-img img-fluid btn-border p-0 flex-column ${hoverclass == 'sidebar-hover' ? 'active':''}`" data-setting="sidebar" data-name="sidebar-type" data-value="sidebar-hover" data-extra-value="sidebar-mini">
            <img src="@/assets/images/settings/light/04.png" alt="hover" :class="`mode light-img img-fluid btn-border p-0 flex-column ${hoverclass == 'sidebar-hover' ? 'active':''}`" data-setting="sidebar" data-name="sidebar-type" data-value="sidebar-hover" data-extra-value="sidebar-mini">
              <span class="mt-2">Hover</span>
            </div>
            <div class="text-center" @click="sidebartypeActive('sidebar-boxed')">
              <img src="@/assets/images/settings/dark/05.png" alt="boxed" :class="`mode dark-img img-fluid btn-border p-0 flex-column ${boxedclass == 'sidebar-boxed' ? 'active':''}`" data-setting="sidebar" data-name="sidebar-type" data-value="sidebar-boxed">
              <img src="@/assets/images/settings/light/05.png" alt="boxed" :class="`mode light-img img-fluid btn-border p-0 flex-column ${boxedclass == 'sidebar-boxed' ? 'active':''}`" data-setting="sidebar" data-name="sidebar-type" data-value="sidebar-boxed">
              <span class="mt-2">Boxed</span>
            </div>
          </div>
          <hr class="hr-horizontal">
          <h5 class="mt-4 mb-3">Sidebar Active Style</h5>
          <div class="d-grid gap-x-3 grid-cols-2 mb-4">
            <div class="mb-4 text-center" @click="sidebarstyleActive('navs-rounded')">
              <img src="@/assets/images/settings/dark/06.png" alt="rounded-one-side" :class="`mode dark-img img-fluid btn-border p-0 flex-column ${stateSidebarActiveStyle == 'navs-rounded' ? 'active':''}`" data-setting="sidebar" data-name="sidebar-item" data-value="navs-rounded">
              <img src="@/assets/images/settings/light/06.png" alt="rounded-one-side" :class="`mode light-img img-fluid btn-border p-0 flex-column ${stateSidebarActiveStyle == 'navs-rounded' ? 'active':''}`" data-setting="sidebar" data-name="sidebar-item" data-value="navs-rounded">
              <span class="mt-2">Rounded One Side</span>
            </div>
            <div class="mb-4 text-center" @click="sidebarstyleActive('navs-rounded-all')">
              <img src="@/assets/images/settings/dark/07.png" alt="rounded-all" :class="`mode dark-img img-fluid btn-border p-0 flex-column ${stateSidebarActiveStyle == 'navs-rounded-all' ? 'active':''}`" data-setting="sidebar" data-name="sidebar-item" data-value="navs-rounded-all">
              <img src="@/assets/images/settings/light/07.png" alt="rounded-all" :class="`mode light-img img-fluid btn-border p-0 flex-column ${stateSidebarActiveStyle == 'navs-rounded-all' ? 'active':''}`" data-setting="sidebar" data-name="sidebar-item" data-value="navs-rounded-all">
              <span class="mt-2">Rounded All</span>
            </div>
            <div class="mb-4 text-center" @click="sidebarstyleActive('navs-pill')">
              <img src="@/assets/images/settings/dark/09.png" alt="pill-one-side" :class="`mode dark-img img-fluid btn-border p-0 flex-column ${stateSidebarActiveStyle == 'navs-pill' ? 'active':''}`" data-setting="sidebar" data-name="sidebar-item" data-value="navs-pill">
              <img src="@/assets/images/settings/light/09.png" alt="pill-one-side" :class="`mode light-img img-fluid btn-border p-0 flex-column ${stateSidebarActiveStyle == 'navs-pill' ? 'active':''}`" data-setting="sidebar" data-name="sidebar-item" data-value="navs-pill">
              <span class="mt-2">Pill One Side</span>
            </div>
            <div class="mb-4 text-center" @click="sidebarstyleActive('navs-pill-all')">
              <img src="@/assets/images/settings/dark/08.png" alt="pill-all" :class="`mode dark-img img-fluid btn-border p-0 flex-column ${stateSidebarActiveStyle == 'navs-pill-all' ? 'active':''}`" data-setting="sidebar" data-name="sidebar-item" data-value="navs-pill-all">
              <img src="@/assets/images/settings/light/08.png" alt="pill-all" :class="`mode light-img img-fluid btn-border p-0 flex-column ${stateSidebarActiveStyle == 'navs-pill-all' ? 'active':''}`" data-setting="sidebar" data-name="sidebar-item" data-value="navs-pill-all">
              <span class="mt-2">Pill All</span>
            </div>
          </div>
          <hr class="hr-horizontal">
          <h5 class="mt-4 mb-3">Navbar Style</h5>
          <div class="d-grid gap-x-3 grid-cols-2">
            <div class="mb-4 text-center" @click="navbarstyleActive('nav-glass')">
              <img src="@/assets/images/settings/dark/11.png" alt="image" :class="`mode dark-img img-fluid btn-border p-0 flex-column ${navbarstyle== 'nav-glass' ? 'active':''}`" data-setting="navbar" data-target=".iq-navbar" data-name="navbar-type" data-value="nav-glass">
              <img src="@/assets/images/settings/light/10.png" alt="image" :class="`mode light-img img-fluid btn-border p-0 flex-column ${navbarstyle== 'nav-glass' ? 'active':''}`" data-setting="navbar" data-target=".iq-navbar" data-name="navbar-type" data-value="nav-glass">
              <span class="mt-2">Glass</span>
            </div>
            <div class="mb-4 text-center" @click="navbarstyleActive('navs-bg-color')">
              <img src="@/assets/images/settings/dark/10.png" alt="color" :class="`mode dark-img img-fluid btn-border p-0 flex-column ${navbarstyle== '' && subnavbarstyle== 'navs-bg-color' ? 'active':''}`" data-setting="navbar" data-target=".iq-navbar-header" data-name="navbar-type" data-value="navs-bg-color">
              <img src="@/assets/images/settings/light/11.png" alt="color" :class="`mode light-img img-fluid btn-border p-0 flex-column ${navbarstyle== '' && subnavbarstyle== 'navs-bg-color' ? 'active':''}`" data-setting="navbar" data-target=".iq-navbar-header" data-name="navbar-type" data-value="navs-bg-color">
              <span class="mt-2">Color</span>
            </div>
            <div class="mb-4 text-center" @click="navbarstyleActive('navs-sticky')">
              <img src="@/assets/images/settings/dark/12.png" alt="sticky" :class="`mode dark-img img-fluid btn-border p-0 flex-column ${navbarstyle== 'navs-sticky' ? 'active':''}`" data-setting="navbar" data-target=".iq-navbar" data-name="navbar-type" data-value="navs-sticky">
              <img src="@/assets/images/settings/light/12.png" alt="sticky" :class="`mode light-img img-fluid btn-border p-0 flex-column ${navbarstyle== 'navs-sticky' ? 'active':''}`" data-setting="navbar" data-target=".iq-navbar" data-name="navbar-type" data-value="navs-sticky">
              <span class="mt-2">Sticky</span>
            </div>
            <div class="mb-4 text-center" @click="navbarstyleActive('navs-transparent')">
                <img src="@/assets/images/settings/dark/12.png" alt="transparent" :class="`mode dark-img img-fluid btn-border p-0 flex-column ${navbarstyle== 'navs-transparent' ? 'active':''}`" data-setting="navbar" data-target=".iq-navbar" data-name="navbar-type" data-value="navs-transparent">
                <img src="@/assets/images/settings/light/12.png" alt="transparent" :class="`mode light-img img-fluid btn-border p-0 flex-column ${navbarstyle== 'navs-transparent' ? 'active':''}`" data-setting="navbar" data-target=".iq-navbar" data-name="navbar-type" data-value="navs-transparent">
              <span class="mt-2">Transparent</span>
            </div>
            <div class="btn btn-border active col-span-full" data-setting="navbar" data-name="navbar-default" data-value="default" @click="defaultsidebar()">
                <i class="text-body">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="8" fill="#F5F6FA" stroke="black" stroke-width="3"></circle>
                  </svg>
                </i>
              <span class="ms-2 "> Default </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SettingOffcanvas',
  data () {
    return {
      setting: {
        scheme: 'light',
        schemeDirection: 'ltr',
        sidebarcolor: 'sidebar-white',
        sidebartype: { mini: '', hover: '', boxed: '' },
        sidebaractivestyle: 'navs-rounded-all',
        navbarstyle: ''
      }
    }
  },
  props: {
    showoffcanvas: { type: Boolean, default: false }
  },
  computed: {
    ...mapGetters({
      stateScheme: 'scheme',
      stateSchemeDirection: 'schemeDir',
      stateSidebarColor: 'sidebarcolor',
      miniclass: 'sidebartypemini',
      hoverclass: 'sidebartypehover',
      boxedclass: 'sidebartypeboxed',
      stateSidebarActiveStyle: 'sidebaractivestyle',
      navbarstyle: 'navbarstyle',
      subnavbarstyle: 'subnavbarstyle'
    })
  },
  methods: {
    ...mapActions({
      schememodeChange: 'schemeModeAction',
      schemedirmodeChange: 'schemedirModeAction',
      sidebarcolorChange: 'sidebarcolorsAction',
      sidebarminitypeChange: 'sidebarminitypeAction',
      sidebarhovertypeChange: 'sidebarhovertypeAction',
      sidebarboxedtypeChange: 'sidebarboxedtypeAction',
      sidebaractivestyleChange: 'sidebaractivestyleAction',
      navbarstyleChange: 'navbarstyleAction',
      defaultChange: 'defaultAction'
    }),
    closeoffcanvas () {
      this.$emit('closeoffcanvas', !this.showoffcanvas)
    },
    schemeActive (value) {
      switch (value) {
        case 'auto':
          this.setting.scheme = 'auto'
          this.schememodeChange(this.setting.scheme)
          break
        case 'dark':
          this.setting.scheme = 'dark'
          this.schememodeChange(this.setting.scheme)
          break
        case 'light':
          this.setting.scheme = 'light'
          this.schememodeChange(this.setting.scheme)
          break
      }
    },
    schemediractive (dir) {
      switch (dir) {
        case 'ltr':
          this.setting.schemeDirection = 'ltr'
          this.schemedirmodeChange(this.setting.schemeDirection)
          break
        case 'rtl':
          this.setting.schemeDirection = 'rtl'
          this.schemedirmodeChange(this.setting.schemeDirection)
          break
      }
    },
    sidebarcolorActive (color) {
      switch (color) {
        case 'sidebar-dark':
          this.setting.sidebarcolor = 'sidebar-dark'
          this.sidebarcolorChange(this.setting.sidebarcolor)
          break
        case 'sidebar-color':
          this.setting.sidebarcolor = 'sidebar-color'
          this.sidebarcolorChange(this.setting.sidebarcolor)
          break
        case 'sidebar-white':
          this.setting.sidebarcolor = 'sidebar-white'
          this.sidebarcolorChange(this.setting.sidebarcolor)
          break
        case 'sidebar-transparent':
          this.setting.sidebarcolor = 'sidebar-transparent'
          this.sidebarcolorChange(this.setting.sidebarcolor)
          break
      }
    },
    sidebartypeActive (type) {
      if (type === 'sidebar-mini') {
        if (this.miniclass === 'null' || this.miniclass === '') {
          this.setting.sidebartype.mini = 'sidebar-mini'
          this.sidebarminitypeChange(this.setting.sidebartype.mini)
        } else {
          this.setting.sidebartype.mini = ''
          this.sidebarminitypeChange(this.setting.sidebartype.mini)
        }
      }
      if (type === 'sidebar-hover') {
        if (this.hoverclass === 'null' || this.hoverclass === '') {
          this.setting.sidebartype.hover = 'sidebar-hover'
          this.sidebarhovertypeChange(this.setting.sidebartype.hover)
        } else {
          this.setting.sidebartype.hover = ''
          this.sidebarhovertypeChange(this.setting.sidebartype.hover)
        }
      }
      if (type === 'sidebar-boxed') {
        if (this.boxedclass === 'null' || this.boxedclass === '') {
          this.setting.sidebartype.boxed = 'sidebar-boxed'
          this.sidebarboxedtypeChange(this.setting.sidebartype.boxed)
        } else {
          this.setting.sidebartype.boxed = ''
          this.sidebarboxedtypeChange(this.setting.sidebartype.boxed)
        }
      }
    },
    sidebarstyleActive (sidebarstyle) {
      switch (sidebarstyle) {
        case 'navs-rounded':
          this.setting.sidebaractivestyle = 'navs-rounded'
          this.sidebaractivestyleChange(this.setting.sidebaractivestyle)
          break
        case 'navs-rounded-all':
          this.setting.sidebaractivestyle = 'navs-rounded-all'
          this.sidebaractivestyleChange(this.setting.sidebaractivestyle)
          break
        case 'navs-pill':
          this.setting.sidebaractivestyle = 'navs-pill'
          this.sidebaractivestyleChange(this.setting.sidebaractivestyle)
          break
        case 'navs-pill-all':
          this.setting.sidebaractivestyle = 'navs-pill-all'
          this.sidebaractivestyleChange(this.setting.sidebaractivestyle)
          break
      }
    },
    navbarstyleActive (navbarstyle) {
      switch (navbarstyle) {
        case 'nav-glass':
          this.setting.navbarstyle = 'nav-glass'
          this.navbarstyleChange(this.setting.navbarstyle)
          break
        case 'navs-bg-color':
          this.setting.navbarstyle = 'navs-bg-color'
          this.navbarstyleChange(this.setting.navbarstyle)
          break
        case 'navs-sticky':
          this.setting.navbarstyle = 'navs-sticky'
          this.navbarstyleChange(this.setting.navbarstyle)
          break
        case 'navs-transparent':
          this.setting.navbarstyle = 'navs-transparent'
          this.navbarstyleChange(this.setting.navbarstyle)
          break
      }
    },
    defaultsidebar () {
      this.defaultChange(this.setting)
    }
  }
}
</script>

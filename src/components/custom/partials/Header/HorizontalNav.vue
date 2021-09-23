<template>
<!-- Horizontal Menu Start -->
<nav id="navbar_main" :class="`mobile-offcanvas nav navbar navbar-expand-xl hover-nav horizontal-nav mx-md-auto ${showoffcanvas?'show':''}`">
    <div class="container-fluid">
        <div class="offcanvas-header px-0">
            <div class="navbar-brand ms-0">
                <logo />
                <h4 class="logo-title">Hope UI</h4>
            </div>
            <button class="btn-close float-end" @click="closeoffcanvas"></button>
        </div>
        <ul class="navbar-nav">
            <li class="nav-item"><router-link :class="`nav-link ${checkActive('horizontal.IndexHorizontal') ? 'active' : ''}`" :to="{name:'horizontal.IndexHorizontal'}"> Horizontal </router-link></li>
            <li class="nav-item"><router-link :class="`nav-link ${checkActive('dual-horizontal.IndexDualHorizontal') ? 'active' : ''}`" :to="{name:'dual-horizontal.IndexDualHorizontal'}"> Dual Horizontal </router-link></li>
            <li class="nav-item"><router-link :class="`nav-link ${checkActive('dual-compact.IndexDualCompact') ? 'active' : ''}`" :to="{name:'dual-compact.IndexDualCompact'}"><span class="item-name">Dual Compact</span></router-link></li>
            <li class="nav-item"><router-link :class="`nav-link ${checkActive('boxed.IndexBoxedHorizontal') ? 'active' : ''}`" :to="{name:'boxed.IndexBoxedHorizontal'}"> Boxed Horizontal </router-link></li>
            <li class="nav-item"><router-link :class="`nav-link ${checkActive('boxedfancy.IndexBoxedFancy') ? 'active' : ''}`" :to="{name:'boxedfancy.IndexBoxedFancy'}"> Boxed Fancy</router-link></li>
        </ul>
    </div> <!-- container-fluid.// -->
</nav>
<!-- Sidebar Menu End -->
</template>
<script>
import logo from '@/components/custom/Logo/logo'
export default {
  name: 'HorizontalNav',
  props: {
    showoffcanvas: { type: Boolean, default: false }
  },
  components: {
    logo
  },
  methods: {
    closeoffcanvas () {
      this.$emit('closeoffcanvas', !this.showoffcanvas)
    },
    checkActive (route) {
      if (this.$route.name === route) {
        return true
      }
    }
  }
}
</script>

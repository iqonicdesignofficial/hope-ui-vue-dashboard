<template>
  <!-- Horizontal Menu Start -->
  <nav id="navbar_main" class="mobile-offcanvas hover-nav horizontal-nav mx-md-auto navbar navbar-expand-xl navbar-light">
    <div class="container-fluid">
      <div class="offcanvas-header px-0">
        <div class="navbar-brand ms-0">
          <brand-logo :color="true"></brand-logo>
          <h4 class="logo-title"><brand-name></brand-name></h4>
        </div>
        <button class="btn-close float-end"></button>
      </div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'horizontal.dashboard' }"> Horizontal </router-link>
        </li>
        <li class="nav-item"><router-link class="nav-link" :to="{ name: 'dual-horizontal.dashboard' }"> Dual Horizontal </router-link></li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'dual-compact.dashboard' }"><span class="item-name">Dual Compact</span></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'boxed.dashboard' }"> Boxed Horizontal </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'boxed-fancy.dashboard' }"> Boxed Fancy</router-link>
        </li>
      </ul>
    </div>
    <!-- container-fluid.// -->
  </nav>
  <!-- Sidebar Menu End -->
</template>

<script setup></script>

<style lang="scss" scoped></style>

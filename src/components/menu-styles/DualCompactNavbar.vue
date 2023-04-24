<template>
  <!--Nav Start-->
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark iq-navbar iq-dual-compact">
    <div class="container-fluid navbar-innser">
      <router-link :to="{ name: 'default.dashboard' }" class="navbar-brand d-flex align-items-center ms-0">
        <brand-logo></brand-logo>
        <h4 class="logo-title text-light ms-3 mb-0 d-none d-sm-block"><brand-name></brand-name></h4>
      </router-link>
      <button class="navbar-toggler p-0 border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
        <span class="navbar-toggler-icon">
          <span class="navbar-toggler-bar bar1 mt-1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <div class="offcanvas offcanvas-end bg-dark w-100" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div class="offcanvas-header">
          <router-link :to="{ name: 'default.dashboard' }" class="navbar-brand d-flex align-items-center ms-0">
            <brand-logo></brand-logo>
            <h4 class="logo-title text-light ms-3 mb-0 d-none d-sm-block"><brand-name></brand-name></h4>
          </router-link>
          <div class="align-items-left justify-content-end">
            <button class="navbar-toggler p-0 border-0" type="button" data-bs-dismiss="offcanvas" aria-label="Close">
              <span class="navbar-toggler-icon">
                <span class="navbar-toggler-bar bar1 mt-1"></span>
                <span class="navbar-toggler-bar bar2"></span>
                <span class="navbar-toggler-bar bar3"></span>
              </span>
            </button>
          </div>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Notifications</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Profile</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Settings</a>
              <ul class="dropdown-menu" aria-labelledby="dropdown01">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-primary" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  </nav>
  <div class="nav-scroller bg-body shadow-sm">
    <nav class="nav nav-underline" aria-label="Secondary navigation">
      <a class="nav-link active" aria-current="page" href="#">Dashboard</a>
      <a class="nav-link" href="#">
        Friends
        <span class="badge bg-light text-dark rounded-pill align-text-bottom">27</span>
      </a>
      <a class="nav-link" href="#">Explore</a>
      <a class="nav-link" href="#">Suggestions</a>
      <a class="nav-link" href="#">Link</a>
      <a class="nav-link" href="#">Link</a>
      <a class="nav-link" href="#">Link</a>
      <a class="nav-link" href="#">Link</a>
      <a class="nav-link" href="#">Link</a>
    </nav>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped></style>

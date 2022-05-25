<template>
  <div class="sidebar-profile-card mt-3">
    <div class="sidebar-profile-body">
      <div class="mb-3 d-flex justify-content-center">
        <div class="rounded rounded-3 border border-primary p-2">
          <img src="@/assets/images/avatars/01.png" alt="User-Profile" class="img-fluid rounded" loading="lazy" />
        </div>
      </div>
      <div class="sidebar-profile-detail">
        <h6 class="sidebar-profile-name">Elon musk</h6>
        <span class="sidebar-profile-username">@musk</span>
      </div>
      <div class="sidebar-profile-action">
        <b-button variant="primary btn-icon btn-action" size="sm" pill>
          <span class="btn-inner">
            <icon-component type="dual-tone" icon-name="cart"></icon-component>
          </span>
        </b-button>
        <b-button variant="primary btn-icon btn-action" size="sm" pill>
          <span class="btn-inner">
            <icon-component type="dual-tone" icon-name="heart"></icon-component>
          </span>
        </b-button>
        <b-button variant="primary btn-icon btn-action" size="sm" pill>
          <span class="btn-inner">
            <icon-component type="dual-tone" icon-name="bell"></icon-component>
          </span>
          <span class="notification-alert"></span>
        </b-button>
      </div>
    </div>
  </div>
</template>

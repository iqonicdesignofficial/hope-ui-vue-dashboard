<template>
  <b-card>
    <div class="d-grid grid-flow-col align-items-center justify-content-between mb-2">
      <div class="d-flex align-items-center">
        <span>Dashboard plan</span>
        <icon-component type="outlined" icon-name="chevron-right" :size="20"></icon-component>
        <span>List</span>
      </div>
      <b-dropdown id="dropdown-3" text="" class="dropdown" variant="link text-body p-0" toggle-class="text-decoration-none" no-caret dropleft>
        <template #button-content>
          <icon-component type="outlined" icon-name="three-dots" :size="20"></icon-component>
        </template>
        <b-dropdown-item> <icon-component type="dual-tone" icon-name="document-plus" :size="20"></icon-component> Duplicate </b-dropdown-item>
        <b-dropdown-item> <icon-component type="dual-tone" icon-name="pencil" :size="20"></icon-component> Rename </b-dropdown-item>
        <b-dropdown-item> <icon-component type="dual-tone" icon-name="trash" :size="20"></icon-component> Delete </b-dropdown-item>
      </b-dropdown>
    </div>
    <h6 class="mb-3">{{ title }}</h6>
    <div class="d-flex align-items-center mb-3">
      <b-button variant="icon btn-soft-light me-2">
        <span class="btn-inner">
          <icon-component type="dual-tone" icon-name="document" :size="20"></icon-component>
        </span>
      </b-button>
      <b-button variant="icon btn-soft-light me-2">
        <span class="btn-inner">
          <icon-component type="dual-tone" icon-name="calendar" :size="20"></icon-component>
        </span>
      </b-button>
      <b-button variant="icon btn-soft-light me-2">
        <span class="btn-inner">
          <icon-component type="dual-tone" icon-name="controller" :size="20"></icon-component>
        </span>
      </b-button>
      <b-button variant="icon btn-soft-light me-2">
        <span class="btn-inner">
          <icon-component type="dual-tone" icon-name="scanner" :size="20"></icon-component>
        </span>
      </b-button>
    </div>
    <div class="iq-media-group-1">
      <a href="#" class="iq-media-1">
        <div class="icon iq-icon-box-2 text-primary">AT</div>
      </a>
      <a href="#" class="iq-media-1">
        <div class="icon iq-icon-box-2 text-warning">WT</div>
      </a>
      <a href="#" class="iq-media-1">
        <div class="icon iq-icon-box-2 text-success">GT</div>
      </a>
      <a href="#" class="iq-media-1">
        <div class="icon iq-icon-box-2 text-danger">
          <icon-component type="solid" icon-name="plus" :size="16"></icon-component>
        </div>
      </a>
    </div>
    <span class="remove"></span>
  </b-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

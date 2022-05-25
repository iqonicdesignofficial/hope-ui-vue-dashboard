<template>
  <div class="d-flex align-items-center justify-content-between">
    <h6 :class="`text-${variant} mb-0`">{{ title }}</h6>
    <b-dropdown id="dropdown-3" text="" class="dropdown" variant="link text-body p-0" toggle-class="text-decoration-none" no-caret dropleft>
      <template #button-content>
        <icon-component type="outlined" icon-name="three-dots" :size="20"></icon-component>
      </template>
      <b-dropdown-item> <icon-component type="dual-tone" icon-name="document-plus" :size="20"></icon-component> Duplicate </b-dropdown-item>
      <b-dropdown-item> <icon-component type="dual-tone" icon-name="pencil" :size="20"></icon-component> Rename </b-dropdown-item>
      <b-dropdown-item> <icon-component type="dual-tone" icon-name="trash" :size="20"></icon-component> Delete </b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: ''
    }
  }
}
</script>

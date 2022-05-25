<template>
  <b-row class="row">
    <b-col md="12">
      <b-card body-class="d-flex justify-content-between align-items-center flex-wrap">
        <div class="card-title mb-0">
          <slot name="title">
            <h4 class="mb-0">{{ title }}</h4>
          </slot>
        </div>
        <div class="card-action mt-2 mt-sm-0">
          <slot></slot>
        </div>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Page Title'
    }
  }
}
</script>

<template>
  <div class="p-5 bd-example bg-dark align-items-center">
    <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <svg class="rounded bd-placeholder-img me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#007aff"></rect></svg>

        <strong class="me-auto">Bootstrap</strong>
        <small class="text-muted">11 mins ago</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">Hello, world! This is a toast message.</div>
    </div>
  </div>
  <div class="p-5 bd-example bg-dark align-items-center">
    <div class="toast fade show align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="d-flex">
        <div class="toast-body">Hello, world! This is a toast message.</div>
        <button type="button" class="m-auto btn-close me-2" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
  </div>

  <div class="p-5 bd-example bg-dark align-items-center">
    <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-body">
        Hello, world! This is a toast message.
        <div class="pt-2 mt-2 border-top">
          <button type="button" class="btn btn-primary">Take action</button>
          <button type="button" class="btn btn-dark mt-2 mt-sm-0" data-bs-dismiss="toast">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {}
}
</script>

<template>
  <div class="bd-example">
    <div class="mb-3 form-floating custom-form-floating custom-form-floating-sm form-group">
      <b-form-input type="email" class="form-control" id="floatingInput11" placeholder="Place Holder" />
      <label for="floatingInput11">Small</label>
    </div>
    <div class="mb-3 form-floating custom-form-floating form-group">
      <b-form-input type="email" class="form-control" id="floatingInput12" placeholder="Place Holder" />
      <label for="floatingInput12">Regular</label>
    </div>
    <div class="mb-3 form-floating custom-form-floating custom-form-floating-lg form-group">
      <b-form-input type="email" class="form-control" id="floatingInput13" placeholder="Place Holder" />
      <label for="floatingInput13">Large</label>
    </div>
    <div class="mb-3 form-floating custom-form-floating form-group">
      <b-form-input type="email" class="form-control" disabled id="floatingInput14" placeholder="Place Holder" />
      <label for="floatingInput14">Regular</label>
    </div>
    <div class="mb-3 form-floating custom-form-floating form-group">
      <b-form-input type="email" class="form-control" :state="true" id="floatingInput15" placeholder="Place Holder" />
      <label for="floatingInput15">Regular</label>
    </div>
    <div class="mb-3 form-floating custom-form-floating form-group">
      <b-form-input type="email" class="form-control" :state="false" id="floatingInput16" placeholder="Place Holder" />
      <label for="floatingInput16">Regular</label>
    </div>
  </div>
</template>
<script>
export default {
  setup() {}
}
</script>

<template>
  <div class="bd-example">
    <b-form>
      <div class="mb-3 form-floating">
        <b-form-input type="email" class="form-control" id="floatingInput1" placeholder="name@example.com" />
        <label for="floatingInput1">Email address</label>
      </div>
      <div class="mb-3 form-floating">
        <b-form-input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
        <label for="floatingPassword">Password</label>
      </div>
      <div class="mb-3 form-floating form-group">
        <b-form-input type="email" class="form-control" disabled id="floatingInput2" placeholder="Place Holder" />
        <label for="floatingInput2">Regular</label>
      </div>
      <div class="mb-3 form-floating form-group">
        <b-form-input type="email" class="form-control" :state="true" id="floatingInput3" placeholder="Place Holder" />
        <label for="floatingInput3">Regular</label>
      </div>
      <div class="form-floating form-group">
        <b-form-input type="email" class="form-control" :state="false" id="floatingInput4" placeholder="Place Holder" />
        <label for="floatingInput4">Regular</label>
      </div>
    </b-form>
  </div>
</template>
<script>
export default {
  setup() {}
}
</script>

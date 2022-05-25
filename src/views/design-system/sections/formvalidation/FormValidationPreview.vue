<template>
  <div class="bd-example">
    <b-form class="row g-3">
      <div class="col-md-4">
        <label for="validationServer01" class="form-label">First name</label>
        <b-form-input id="input-live-feedback1" :state="true" placeholder="Mark" aria-describedby=" input-live-feedback"></b-form-input>
        <b-form-valid-feedback id="input-live-feedback"> Looks good! </b-form-valid-feedback>
      </div>
      <div class="col-md-4">
        <label for="validationServer02" class="form-label">Last name</label>
        <b-form-input id="input-live-feedback2" :state="true" placeholder="Otto" aria-describedby=" input-live-feedback"></b-form-input>
        <b-form-valid-feedback id="input-live-feedback"> Looks good! </b-form-valid-feedback>
      </div>
      <div class="col-md-4">
        <label for="validationServerUsername" class="form-label">Username</label>
        <b-input-group prepend="@">
          <b-form-input id="input-live-feedback3" :state="false" placeholder="Otto" aria-describedby=" input-live-feedback"></b-form-input>
          <b-form-invalid-feedback id="input-live-feedback"> Please choose a username. </b-form-invalid-feedback>
        </b-input-group>
      </div>
      <div class="col-md-6">
        <label for="validationServer03" class="form-label">City</label>
        <input type="text" class="form-control is-invalid" id="validationServer03" required="" />
        <div class="invalid-feedback">Please provide a valid city.</div>
      </div>
      <div class="col-md-3">
        <label for="validationServer04" class="form-label">State</label>
        <select class="form-select is-invalid" id="validationServer04" required="">
          <option selected="" disabled="" value="">Choose...</option>
          <option>...</option>
        </select>
        <div class="invalid-feedback">Please select a valid state.</div>
      </div>
      <div class="col-md-3">
        <label for="validationServer05" class="form-label">Zip</label>
        <b-form-input id="input-live-feedback4" :state="false" aria-describedby=" input-live-feedback"></b-form-input>
        <b-form-invalid-feedback id="input-live-feedback"> Please provide a valid zip.</b-form-invalid-feedback>
      </div>
      <div class="col-12">
        <div class="form-check">
          <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required="" />
          <label class="form-check-label" for="invalidCheck3"> Agree to terms and conditions </label>
          <div class="invalid-feedback">You must agree before submitting.</div>
        </div>
      </div>
      <div class="col-12">
        <b-button variant="primary">Submit form</b-button>
      </div>
    </b-form>
  </div>
</template>
<script>
export default {
  setup() {}
}
</script>

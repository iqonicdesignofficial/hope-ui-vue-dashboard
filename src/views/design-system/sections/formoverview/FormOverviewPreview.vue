<template>
  <b-form>
    <div class="mb-3">
      <b-form-group label="Email address:" label-for="input-1" description="We'll never share your email with anyone else.">
        <b-form-input id="input-1" type="email" required></b-form-input>
      </b-form-group>
    </div>
    <div class="mb-3">
      <b-form-group label="Password" label-for="text-password">
        <b-form-input id="text-password" type="password"></b-form-input>
      </b-form-group>
    </div>
    <div class="mb-3">
      <b-form-checkbox class="form-check-label">Check me out</b-form-checkbox>
    </div>
    <fieldset class="mb-3">
      <legend>Radios buttons</legend>
      <b-form-radio name="radios" value="A">Default radio </b-form-radio>
      <b-form-radio name="radios" value="B">Another radio </b-form-radio>
    </fieldset>
    <div class="mb-3">
      <label class="form-label" for="customFile">Upload</label>
      <input type="file" class="form-control" id="customFile" />
    </div>
    <div class="mb-3 form-check form-switch">
      <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
      <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
    </div>
    <div class="mb-3">
      <label for="customRange3" class="form-label">Example range</label>
      <b-form-input id="range2" type="range" min="0" max="5"></b-form-input>
    </div>
    <b-button variant="primary">Submit</b-button>
  </b-form>
</template>
<script>
export default {
  setup() {}
}
</script>

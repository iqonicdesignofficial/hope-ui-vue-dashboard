<template>
  <div class="card">
    <div class="card-header d-flex justify-content-between">
      <div class="header-title">
        <h4 class="card-title">Supported elements</h4>
      </div>
    </div>
    <div class="card-body">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
      <form class="was-validated" @submit.prevent="formSubmit">
        <div class="form-group">
          <label for="validationTextarea" class="form-label">Textarea</label>
          <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required=""></textarea>
          <div class="invalid-feedback">Please enter a message in the textarea.</div>
        </div>
        <div class="form-check form-group">
          <input type="checkbox" class="form-check-input" id="validationFormCheck1" required="" />
          <label class="form-check-label" for="validationFormCheck1">Check this checkbox</label>
          <div class="invalid-feedback">Example invalid feedback text</div>
        </div>
        <div class="form-check">
          <input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked" required="" />
          <label class="form-check-label" for="validationFormCheck2">Toggle this radio</label>
        </div>
        <div class="form-check form-group">
          <input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked" required="" />
          <label class="form-check-label" for="validationFormCheck3">Or toggle this other radio</label>
          <div class="invalid-feedback">More example invalid feedback text</div>
        </div>
        <div class="form-group">
          <select class="form-select" required="" aria-label="select example">
            <option value="">Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div class="invalid-feedback">Example invalid select feedback</div>
        </div>
        <div class="form-group mb-0">
          <input type="file" class="form-control" aria-label="file example" required="" />
          <div class="invalid-feedback">Example invalid form file feedback</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const formSubmit = (e) => {
  console.log('Form submitted!', e)
}
</script>

<template>
  <b-card>
    <div class="mb-3">
      <h3 class="text-center">Sign Up</h3>
      <p class="text-center">Create your Hope UI account</p>
    </div>
    <form>
      <div class="row d-flex justify-content-between">
        <div class="form-group col-sm-12 col-md-6">
          <label class="form-label" for="firstName">First Name</label>
          <input type="email" class="form-control mb-0" id="firstName" placeholder="Enter First Name" />
        </div>
        <div class="form-group col-sm-12 col-md-6">
          <label class="form-label" for="lastname">Last Name</label>
          <input type="password" class="form-control mb-0" id="lastname" placeholder="Enter Last Name" />
        </div>
      </div>
      <div class="row d-flex justify-content-between">
        <div class="form-group col-sm-12 col-md-6">
          <label class="form-label" for="Emailid">Email</label>
          <input type="email" class="form-control mb-0" id="Emailid" placeholder="Enter Email" />
        </div>
        <div class="form-group col-sm-12 col-md-6">
          <label class="form-label" for="Phone_NO">Phone No.</label>
          <input type="password" class="form-control mb-0" id="Phone_NO" placeholder="Enter Phone Number" />
        </div>
      </div>
      <div class="row d-flex justify-content-between">
        <div class="form-group col-sm-12 col-md-6">
          <label class="form-label" for="firstPassword">Password</label>
          <input type="email" class="form-control mb-0" id="firstPassword" placeholder="Enter Password" autocomplete="current-password" />
        </div>
        <div class="form-group col-sm-12 col-md-6">
          <label class="form-label" for="ConfirmPAssword">Confirm Password</label>
          <input type="password" class="form-control mb-0" id="ConfirmPAssword" placeholder="Enter Confirm Password" />
        </div>
      </div>
      <div class="text-center pb-3">
        <input type="checkbox" class="form-check-input" id="aggrement-hopeui" />
        <label class="form-check-label" for="aggrement-hopeui">I agree with the terms of use</label>
      </div>
      <div class="text-center pb-3">
        <button type="button" class="btn btn-primary">Sign in</button>
      </div>
    </form>
    <p class="text-center">Or sign in with other accounts?</p>
    <div class="d-flex justify-content-center align-items-center gap-4 flex-wrap">
      <a href="#"><img src="@/assets/images/brands/fb.svg" alt="fb" loading="lazy" /></a>
      <a href="#"><img src="@/assets/images/brands/gm.svg" alt="gm" loading="lazy" /></a>
      <a href="#"><img src="@/assets/images/brands/im.svg" alt="im" loading="lazy" /></a>
      <a href="#"><img src="@/assets/images/brands/li.svg" alt="li" loading="lazy" /></a>
    </div>
    <p class="text-center">Already have an Account<a href="dashboard/auth-pro/sign-in.html" class="ms-2">Sign in</a></p>
  </b-card>
</template>

<script setup></script>

<style lang="scss" scoped></style>

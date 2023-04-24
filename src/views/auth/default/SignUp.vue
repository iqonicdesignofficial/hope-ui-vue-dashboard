<template>
  <section class="login-content">
    <div class="row m-0 align-items-center bg-white vh-100">
      <div class="col-md-6 d-md-block d-none bg-primary p-0 vh-100 overflow-hidden">
        <img src="@/assets/images/auth/05.png" class="img-fluid gradient-main animated-scaleX" alt="images" loading="lazy" />
      </div>
      <div class="col-md-6">
        <div class="row justify-content-center">
          <div class="col-md-10">
            <div class="card card-transparent auth-card shadow-none d-flex justify-content-center mb-0">
              <div class="card-body">
                <router-link :to="{ name: 'default.dashboard' }" class="navbar-brand d-flex align-items-center mb-3 text-primary">
                  <brand-logo></brand-logo>
                  <h4 class="logo-title ms-3 mb-0"><brand-name></brand-name></h4>
                </router-link>
                <h2 class="mb-2 text-center">Sign Up</h2>
                <p class="text-center">Create your <brand-name></brand-name> account.</p>
                <form>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="full-name" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="full-name" placeholder=" " />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="last-name" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="last-name" placeholder=" " />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" placeholder=" " />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="phone" class="form-label">Phone No.</label>
                        <input type="text" class="form-control" id="phone" placeholder=" " />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" placeholder=" " />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="confirm-password" class="form-label">Confirm Password</label>
                        <input type="text" class="form-control" id="confirm-password" placeholder=" " />
                      </div>
                    </div>
                    <div class="col-lg-12 d-flex justify-content-center">
                      <div class="form-check mb-3">
                        <input type="checkbox" class="form-check-input" id="customCheck1" />
                        <label class="form-check-label" for="customCheck1">I agree with the terms of use</label>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center">
                    <button type="submit" class="btn btn-primary">Sign Up</button>
                  </div>
                  <p class="text-center my-3">or sign in with other accounts?</p>
                  <div class="d-flex justify-content-center">
                    <ul class="list-group list-group-horizontal list-group-flush">
                      <li class="list-group-item border-0 pb-0">
                        <a href="#"><img src="@/assets/images/brands/fb.svg" alt="fb" loading="lazy" /></a>
                      </li>
                      <li class="list-group-item border-0 pb-0">
                        <a href="#"><img src="@/assets/images/brands/gm.svg" alt="gm" loading="lazy" /></a>
                      </li>
                      <li class="list-group-item border-0 pb-0">
                        <a href="#"><img src="@/assets/images/brands/im.svg" alt="im" loading="lazy" /></a>
                      </li>
                      <li class="list-group-item border-0 pb-0">
                        <a href="#"><img src="@/assets/images/brands/li.svg" alt="li" loading="lazy" /></a>
                      </li>
                    </ul>
                  </div>
                  <p class="mt-3 text-center">Already have an Account <a href="/auth/login" class="text-underline">Sign In</a></p>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="sign-bg sign-bg-right">
          <svg width="280" height="230" viewBox="0 0 421 359" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.05">
              <rect x="-15.0845" y="154.773" width="543" height="77.5714" rx="38.7857" transform="rotate(-45 -15.0845 154.773)" fill="#3A57E8" />
              <rect x="149.47" y="319.328" width="543" height="77.5714" rx="38.7857" transform="rotate(-45 149.47 319.328)" fill="#3A57E8" />
              <rect x="203.936" y="99.543" width="310.286" height="77.5714" rx="38.7857" transform="rotate(45 203.936 99.543)" fill="#3A57E8" />
              <rect x="204.316" y="-229.172" width="543" height="77.5714" rx="38.7857" transform="rotate(45 204.316 -229.172)" fill="#3A57E8" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>

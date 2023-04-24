<template>
  <section class="login-content">
    <b-row class="m-0 align-items-center bg-white h-100">
      <b-col md="6">
        <b-row class="justify-content-center">
          <b-col md="10">
            <b-card class="card-transparent shadow-none d-flex justify-content-center mb-0 auth-card iq-auth-form">
              <router-link :to="{ name: 'default.dashboard' }" class="navbar-brand d-flex align-items-center mb-3 text-primary">
                <brand-logo></brand-logo>
                <h4 class="logo-title ms-3 mb-0" data-setting="app_name"><brand-name></brand-name></h4>
              </router-link>
              <h2 class="mb-2 text-center">Sign In</h2>
              <p class="text-center">Login to stay connected.</p>
              <form>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label for="email" class="form-label">Email</label>
                      <input type="email" class="form-control" id="email" aria-describedby="email" placeholder=" " />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label for="password" class="form-label">Password</label>
                      <input type="password" class="form-control" id="password" aria-describedby="password" placeholder=" " />
                    </div>
                  </div>
                  <div class="col-lg-12 d-flex justify-content-between">
                    <div class="form-check mb-3">
                      <input type="checkbox" class="form-check-input" id="customCheck1" />
                      <label class="form-check-label" for="customCheck1">Remember Me</label>
                    </div>
                    <a href="/auth/reset-password">Forgot Password?</a>
                  </div>
                </div>
                <div class="d-flex justify-content-center">
                  <button type="submit" class="btn btn-primary">Sign In</button>
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
                <p class="mt-3 text-center">Don’t have an account? <a href="/auth/register" class="text-underline">Click here to sign up.</a></p>
              </form>
            </b-card>
          </b-col>
        </b-row>
        <div class="sign-bg">
          <svg width="280" height="230" viewBox="0 0 431 398" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.05">
              <rect x="-157.085" y="193.773" width="543" height="77.5714" rx="38.7857" transform="rotate(-45 -157.085 193.773)" fill="#3B8AFF" />
              <rect x="7.46875" y="358.327" width="543" height="77.5714" rx="38.7857" transform="rotate(-45 7.46875 358.327)" fill="#3B8AFF" />
              <rect x="61.9355" y="138.545" width="310.286" height="77.5714" rx="38.7857" transform="rotate(45 61.9355 138.545)" fill="#3B8AFF" />
              <rect x="62.3154" y="-190.173" width="543" height="77.5714" rx="38.7857" transform="rotate(45 62.3154 -190.173)" fill="#3B8AFF" />
            </g>
          </svg>
        </div>
      </b-col>
      <div class="col-md-6 d-md-block d-none bg-primary p-0 vh-100 overflow-hidden">
        <img src="@/assets/images/auth/01.png" class="img-fluid gradient-main animated-scaleX" alt="images" loading="lazy" />
      </div>
    </b-row>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>

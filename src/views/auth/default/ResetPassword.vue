<template>
  <section class="login-content">
    <div class="row m-0 align-items-center bg-white vh-100">
      <div class="col-md-6 d-md-block d-none bg-primary p-0 vh-100 overflow-hidden">
        <img src="@/assets/images/auth/02.png" class="img-fluid gradient-main animated-scaleX" alt="images" loading="lazy" />
      </div>
      <div class="col-md-6 p-0">
        <div class="card card-transparent auth-card shadow-none d-flex justify-content-center mb-0">
          <div class="card-body">
            <router-link :to="{ name: 'default.dashboard' }" class="navbar-brand d-flex align-items-center mb-3 text-primary">
              <brand-logo></brand-logo>
              <h4 class="logo-title ms-3 mb-0"><brand-name></brand-name></h4>
            </router-link>
            <h2 class="mb-2">Reset Password</h2>
            <p>Enter your email address and we'll send you an email with instructions to reset your password.</p>
            <form>
              <div class="row">
                <div class="col-lg-12">
                  <div class="floating-label form-group">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" aria-describedby="email" placeholder=" " />
                  </div>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">Reset</button>
            </form>
          </div>
        </div>
        <div class="sign-bg sign-bg-right">
          <svg width="280" height="230" viewBox="0 0 431 398" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.05">
              <rect x="-157.085" y="193.773" width="543" height="77.5714" rx="38.7857" transform="rotate(-45 -157.085 193.773)" fill="#3B8AFF" />
              <rect x="7.46875" y="358.327" width="543" height="77.5714" rx="38.7857" transform="rotate(-45 7.46875 358.327)" fill="#3B8AFF" />
              <rect x="61.9355" y="138.545" width="310.286" height="77.5714" rx="38.7857" transform="rotate(45 61.9355 138.545)" fill="#3B8AFF" />
              <rect x="62.3154" y="-190.173" width="543" height="77.5714" rx="38.7857" transform="rotate(45 62.3154 -190.173)" fill="#3B8AFF" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

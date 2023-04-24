<template>
  <section class="login-content">
    <b-row class="m-0 align-items-center bg-white vh-100">
      <b-col md="6 p-0">
        <b-card class="card-transparent auth-card shadow-none d-flex justify-content-center mb-0">
          <router-link :to="{ name: 'default.dashboard' }" class="navbar-brand d-flex align-items-center mb-3 text-primary">
            <brand-logo></brand-logo>
            <h4 class="logo-title ms-3 mb-0"><brand-name></brand-name></h4>
          </router-link>
          <h2 class="mt-3 mb-0">Success !</h2>
          <p class="cnf-mail mb-1">A email has been send to youremail@domain.com. Please check for an email from company and click on the included link to reset your password.</p>
          <div class="d-inline-block w-100">
            <router-link :to="{ name: 'default.dashboard' }" class="btn btn-primary mt-3">Back to Home</router-link>
          </div>
        </b-card>
      </b-col>
      <b-col md="6 d-md-block d-none bg-primary p-0 vh-100 overflow-hidden">
        <img src="@/assets/images/auth/03.png" class="img-fluid gradient-main animated-scaleX" alt="images" loading="lazy" />
      </b-col>
    </b-row>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>

<template>
  <footer class="bg-secondary inner-box text-white">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <router-link to="/dashboard" class="navbar-brand mb-4 d-flex">
            <svg class="icon-30 text-primary" width="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" fill="none">
              <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="white" />
              <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="white" />
              <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="white" />
              <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="white" />
            </svg>

            <h4 class="logo-title ms-3 text-white">{{ appName }}</h4>
          </router-link>
        </div>
        <div class="col-lg-3">
          <h5 class="mb-4 text-white">Company</h5>
          <ul class="m-0 ps-3">
            <router-link to="/about-us"><li class="mb-3 text-white">About us</li></router-link>
            <router-link to="/terms-and-conditions"><li class="mb-3 text-white">Terms Of Use</li></router-link>
            <router-link to="/privacy-policy"><li class="mb-3 text-white">Privacy Policy</li></router-link>
            <router-link to="/faq"><li class="mb-3 text-white">FAQ</li></router-link>
          </ul>
        </div>
        <div class="col-lg-3">
          <h5 class="mb-4 text-white">Services</h5>
          <ul class="m-0 ps-3">
            <li class="mb-3">Branding</li>
            <li class="mb-3">Design</li>
            <li class="mb-3">Development</li>
            <li>Marketing</li>
          </ul>
        </div>
        <div class="col-lg-3">
          <h5 class="mb-4 text-white">Get In touch</h5>
          <p>Need help? Let us hear about it!</p>
          <p>Email us at:</p>
          <a href="#" class="text-decoration-underline text-white">support@hopeui.com</a>
          <ul class="list-unstyled p-0 m-0 d-flex mt-4">
            <li>
              <a href="#"><img src="../../../assets/images/brands/08.png" alt="fb" loading="lazy" class="rounded-pill" /></a>
            </li>
            <li class="ps-3">
              <a href="#"><img src="../../../assets/images/brands/09.png" alt="gm" loading="lazy" class="rounded-pill" /></a>
            </li>
            <li class="ps-3">
              <a href="#"><img src="../../../assets/images/brands/10.png" alt="im" loading="lazy" class="rounded-pill" /></a>
            </li>
            <li class="ps-3">
              <a href="#"><img src="../../../assets/images/brands/13.png" alt="li" loading="lazy" class="rounded-pill" /></a>
            </li>
          </ul>
        </div>
        <hr />
        <div class="col-md-12 text-center">
          <p>© {{ date }} Hope UI, All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  data() {
    return {
      date: new Date().getFullYear()
    }
  },
  setup() {
    const store = useStore()
    const appName = computed(() => store.getters['setting/app_name'])
    const show = ref(false)
    return {
      appName,
      show
    }
  }
}
</script>

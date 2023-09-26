<template>
  <div :class="`card iq-product-custom-card animate:hover-media ${className}`">
    <div class="iq-product-hover-img position-relative animate:hover-media-wrap">
      <router-link to="/shop-detail">
        <img :src="`${productImage}`" alt="product-details" class="img-fluid iq-product-img hover-media" loading="lazy" />
      </router-link>
      <div class="hopeui_style-btn-container">
        <router-link to="#" class="add_to_cart">
          <svg class="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M5.91064 20.5886C5.91064 19.7486 6.59064 19.0686 7.43064 19.0686C8.26064 19.0686 8.94064 19.7486 8.94064 20.5886C8.94064 21.4186 8.26064 22.0986 7.43064 22.0986C6.59064 22.0986 5.91064 21.4186 5.91064 20.5886ZM17.1606 20.5886C17.1606 19.7486 17.8406 19.0686 18.6806 19.0686C19.5106 19.0686 20.1906 19.7486 20.1906 20.5886C20.1906 21.4186 19.5106 22.0986 18.6806 22.0986C17.8406 22.0986 17.1606 21.4186 17.1606 20.5886Z" fill="currentColor"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1907 6.34909C20.8007 6.34909 21.2007 6.55909 21.6007 7.01909C22.0007 7.47909 22.0707 8.13909 21.9807 8.73809L21.0307 15.2981C20.8507 16.5591 19.7707 17.4881 18.5007 17.4881H7.59074C6.26074 17.4881 5.16074 16.4681 5.05074 15.1491L4.13074 4.24809L2.62074 3.98809C2.22074 3.91809 1.94074 3.52809 2.01074 3.12809C2.08074 2.71809 2.47074 2.44809 2.88074 2.50809L5.26574 2.86809C5.60574 2.92909 5.85574 3.20809 5.88574 3.54809L6.07574 5.78809C6.10574 6.10909 6.36574 6.34909 6.68574 6.34909H20.1907ZM14.1307 11.5481H16.9007C17.3207 11.5481 17.6507 11.2081 17.6507 10.7981C17.6507 10.3781 17.3207 10.0481 16.9007 10.0481H14.1307C13.7107 10.0481 13.3807 10.3781 13.3807 10.7981C13.3807 11.2081 13.7107 11.5481 14.1307 11.5481Z" fill="currentColor"></path>
          </svg>
        </router-link>
      </div>
      <div v-if="statusDetails" :class="`iq-ribbon-effect text-${statusColor}`">
        <span>{{ statusDetails }}</span>
      </div>
    </div>
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <router-link to="/shop-detail" class="h6 iq-product-detail mb-0">{{ product_name }}</router-link>
        <div class="d-flex align-items-center">
          <svg class="icon-24" xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z" fill="#FFD329" />
          </svg>
          <p class="mb-0">{{ product_rating }}</p>
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <h6 class="mb-0">{{ product_price }}</h6>
        <span>{{ product_rating }} Ratings</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    className: { type: String, default: '' },
    productImage: { type: String, default: '' },
    statusColor: { type: String, default: '' },
    statusDetails: { type: String, default: '' },
    product_name: { type: String, default: '' },
    product_rating: { type: String, default: '' },
    product_price: { type: String, default: '' }
  }
}
</script>

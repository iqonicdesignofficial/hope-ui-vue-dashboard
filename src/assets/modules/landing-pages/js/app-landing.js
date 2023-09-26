if ($('#app-slider').length > 0) {
  const options = {
    centeredSlides: false,
    loop: false,
    slidesPerView: 4,
    autoplay: false,
    spaceBetween: 32,
    breakpoints: {
      270: { slidesPerView: 1 },
      550: { slidesPerView: 2 },
      991: { slidesPerView: 3 },
      1400: { slidesPerView: 3 },
      1500: { slidesPerView: 3 },
      1920: { slidesPerView: 3 },
      2040: { slidesPerView: 4 },
      2440: { slidesPerView: 4 }
    },
    pagination: {
      el: '.swiper-pagination'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar'
    }
  }
  let swiper = new Swiper('#app-slider', options)

  document.addEventListener('theme_scheme_direction', (e) => {
    swiper.destroy(true, true)
    setTimeout(() => {
      swiper = new Swiper('#app-slider', options)
    }, 500)
  })
}
//--------------testimonial---------------//
if ($('#testimonial-slider').length > 0) {
  const options = {
    centeredSlides: false,
    loop: false,
    slidesPerView: 4,
    autoplay: false,
    spaceBetween: 32,
    breakpoints: {
      270: { slidesPerView: 1 },
      550: { slidesPerView: 1 },
      991: { slidesPerView: 1 },
      1400: { slidesPerView: 1 },
      1500: { slidesPerView: 1 },
      1920: { slidesPerView: 1 },
      2040: { slidesPerView: 1 },
      2440: { slidesPerView: 1 }
    },
    pagination: {
      el: '.swiper-pagination'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar'
    }
  }
  let swiper = new Swiper('#testimonial-slider', options)

  document.addEventListener('theme_scheme_direction', (e) => {
    swiper.destroy(true, true)
    setTimeout(() => {
      swiper = new Swiper('#testimonial-slider', options)
    }, 500)
  })
}
if ($('#testimonial-one-slider').length > 0) {
  const options = {
    centeredSlides: false,
    loop: false,
    slidesPerView: 4,
    autoplay: false,
    spaceBetween: 32,
    breakpoints: {
      270: { slidesPerView: 1 },
      320: { slidesPerView: 1 },
      550: { slidesPerView: 2 },
      991: { slidesPerView: 3 },
      1400: { slidesPerView: 3 },
      1500: { slidesPerView: 3 },
      1920: { slidesPerView: 3 },
      2040: { slidesPerView: 4 },
      2440: { slidesPerView: 4 }
    },
    pagination: {
      el: '.swiper-pagination'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar'
    }
  }
  let swiper = new Swiper('#testimonial-one-slider', options)

  document.addEventListener('theme_scheme_direction', (e) => {
    swiper.destroy(true, true)
    setTimeout(() => {
      swiper = new Swiper('#testimonial-one-slider', options)
    }, 500)
  })
}

if ($('#testimonial-slider-two').length > 0) {
  const options = {
    centeredSlides: false,
    loop: false,
    slidesPerView: 4,
    autoplay: false,
    spaceBetween: 32,
    breakpoints: {
      270: { slidesPerView: 1 },
      550: { slidesPerView: 1 },
      991: { slidesPerView: 2 },
      1400: { slidesPerView: 2 },
      1500: { slidesPerView: 2 },
      1920: { slidesPerView: 2 },
      2040: { slidesPerView: 2 },
      2440: { slidesPerView: 2 }
    },
    pagination: {
      el: '.swiper-pagination'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar'
    }
  }
  let swiper = new Swiper('#testimonial-slider-two', options)

  document.addEventListener('theme_scheme_direction', (e) => {
    swiper.destroy(true, true)
    setTimeout(() => {
      swiper = new Swiper('#testimonial-slider-two', options)
    }, 500)
  })
}

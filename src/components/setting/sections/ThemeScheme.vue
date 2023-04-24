<template>
  <h6 class="mb-3">Theme</h6>
  <div class="d-grid gap-3 grid-cols-3 mb-3">
    <radio-input btn-name="theme_scheme" id="color-mode-auto" label-class="d-block" :default-checked="themeScheme" value="auto" @onChange="updateRadio">
      <icon-component type="solid" icon-name="lighting" />
      Auto
    </radio-input>
    <radio-input btn-name="theme_scheme" id="color-mode-dark" label-class="d-block" :default-checked="themeScheme" value="dark" @onChange="updateRadio">
      <icon-component type="solid" icon-name="moon" />
      Dark
    </radio-input>
    <radio-input btn-name="theme_scheme" id="color-mode-light" label-class="d-block" :default-checked="themeScheme" value="light" @onChange="updateRadio">
      <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"></path>
      </svg>
      Light
    </radio-input>
  </div>
  <!-- Theme Scheme color customizer -->
  <color-customizer />
  <!-- Theme Scheme color customizer End -->
  <div class="d-grid gap-3 grid-cols-2 mb-4">
    <radio-input btn-name="theme_scheme_direction" :img-component="true" label-title="LTR" class-name="text-center" label-class="p-0" id="theme-scheme-direction-ltr" :default-checked="themeSchemeDirection" value="ltr" @onChange="updateRadio">
      <img src="@/assets/images/settings/dark/01.png" alt="ltr" class="mode dark-img img-fluid" loading="lazy" />
      <img src="@/assets/images/settings/light/01.png" alt="ltr" class="mode light-img img-fluid" loading="lazy" />
    </radio-input>
    <radio-input btn-name="theme_scheme_direction" :img-component="true" label-title="RTL" class-name="text-center" label-class="p-0" id="theme-scheme-direction-rtl" :default-checked="themeSchemeDirection" value="rtl" @onChange="updateRadio">
      <img src="@/assets/images/settings/dark/02.png" alt="rtl" class="mode dark-img img-fluid" loading="lazy" />
      <img src="@/assets/images/settings/light/02.png" alt="rtl" class="mode light-img img-fluid" loading="lazy" />
    </radio-input>
  </div>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import RadioInput from '@/components/custom/elements/RadioInput'
import ColorCustomizer from '@/components/setting/sections/ColorCustomizer.vue'
export default {
  components: {
    RadioInput,
    ColorCustomizer
  },
  setup() {
    const store = useStore()
    const themeScheme = computed(() => store.getters['setting/theme_scheme'])
    const themeSchemeDirection = computed(() => store.getters['setting/sheme_scheme_direction'])

    const updateRadio = (value, name) => {
      store.dispatch(`setting/${name}`, value)
    }
    return {
      themeScheme,
      themeSchemeDirection,
      updateRadio
    }
  }
}
</script>

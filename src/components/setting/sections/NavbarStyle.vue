<template>
  <div>
    <h6 class="mt-4 mb-3">Navbar Style</h6>
    <div class="d-grid gap-3 grid-cols-2 mb-4">
      <radio-input btn-name="header_navbar" :img-component="true" labelClass="p-0 d-block overflow-hidden" label-title="Glass" class-name="text-center" id="nav-glass" :default-checked="headerNavbar" value="nav-glass" @onChange="updateRadio">
        <img src="@/assets/images/settings/dark/10.png" alt="hover" class="mode dark-img img-fluid" width="200" height="200" loading="lazy" />
        <img src="@/assets/images/settings/light/10.png" alt="hover" class="mode light-img img-fluid" width="200" height="200" loading="lazy" />
      </radio-input>
      <radio-input btn-name="header_navbar" :img-component="true" labelClass="p-0 d-block overflow-hidden" label-title="Sticky" class-name="text-center" id="navs-sticky" :default-checked="headerNavbar" value="navs-sticky" @onChange="updateRadio">
        <img src="@/assets/images/settings/dark/04.png" alt="hover" class="mode dark-img img-fluid" width="200" height="200" loading="lazy" />
        <img src="@/assets/images/settings/light/04.png" alt="hover" class="mode light-img img-fluid" width="200" height="200" loading="lazy" />
      </radio-input>
      <radio-input btn-name="header_navbar" :img-component="true" labelClass="p-0 d-block overflow-hidden" label-title="Transparent" class-name="text-center" id="navs-transparent" :default-checked="headerNavbar" value="navs-transparent" @onChange="updateRadio">
        <img src="@/assets/images/settings/dark/12.png" alt="boxed" class="mode dark-img img-fluid" width="200" height="200" loading="lazy" />
        <img src="@/assets/images/settings/light/12.png" alt="boxed" class="mode light-img img-fluid" width="200" height="200" loading="lazy" />
      </radio-input>
      <radio-input btn-name="header_navbar" :img-component="true" labelClass="p-0 d-block overflow-hidden" label-title="Default" class-name="text-center" id="navs-default" :default-checked="headerNavbar" value="navs-default" @onChange="updateRadio">
        <img src="@/assets/images/settings/dark/01.png" alt="default" class="mode dark-img img-fluid" width="200" height="200" loading="lazy" />
        <img src="@/assets/images/settings/light/01.png" alt="default" class="mode light-img img-fluid" width="200" height="200" loading="lazy" />
      </radio-input>
    </div>
    <div class="btn btn-border active col-span-full mt-4 d-block" data-setting="navbar" data-name="navbar-default" data-value="default">
      <span class=""> Default Navbar</span>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import RadioInput from '@/components/custom/elements/RadioInput'
export default {
  name: 'NavbarStyle',
  components: {
    RadioInput
  },
  setup() {
    const store = useStore()
    const headerNavbar = computed(() => store.getters['setting/header_navbar'])
    const updateRadio = (value, name) => {
      store.dispatch(`setting/${name}`, value)
    }
    return {
      headerNavbar,
      updateRadio
    }
  }
}
</script>

<template>
  <h6 class="mt-4 mb-3">Menu Color</h6>
  <div class="d-grid gap-3 grid-cols-2 mb-4">
    <radio-input btn-name="sidebar_color" labelClass="d-flex align-items-center bg-transparent gap-1" id="sidebar-white" :default-checked="sidebarcolor" value="sidebar-white" @onChange="updateRadio">
      <i class="text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="8" fill="currentColor" stroke="black" stroke-width="3"></circle>
        </svg>
      </i>
      <span> Default </span>
    </radio-input>
    <radio-input btn-name="sidebar_color" labelClass="d-flex align-items-center bg-transparent gap-1" id="sidebar-dark" :default-checked="sidebarcolor" value="sidebar-dark" @onChange="updateRadio">
      <i class="text-dark">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
        </svg>
      </i>
      <span> Dark </span>
    </radio-input>
    <radio-input btn-name="sidebar_color" labelClass="d-flex align-items-center bg-transparent gap-1" id="sidebar-color" :default-checked="sidebarcolor" value="sidebar-color" @onChange="updateRadio">
      <icon-component type="solid" :size="18" icon-name="circle" class="text-primary"></icon-component>
      <span> Color </span>
    </radio-input>
    <radio-input btn-name="sidebar_color" labelClass="d-flex align-items-center bg-transparent gap-1" :imgComponent="true" id="sidebar-transparent" :default-checked="sidebarcolor" value="sidebar-transparent" @onChange="updateRadio">
      <i class="text-dark">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="8" fill="#F5F6FA" stroke="black" stroke-width="3"></circle>
        </svg>
      </i>
      <span> Transparent </span>
    </radio-input>
  </div>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import RadioInput from '@/components/custom/elements/RadioInput'
export default {
  name: 'MenuColor',
  components: {
    RadioInput
  },
  setup() {
    const store = useStore()
    const sidebarcolor = computed(() => store.getters['setting/sidebar_color'])

    const updateRadio = (value, name) => {
      store.dispatch(`setting/${name}`, value)
    }
    return {
      sidebarcolor,
      updateRadio
    }
  }
}
</script>

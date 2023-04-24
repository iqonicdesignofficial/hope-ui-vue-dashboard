<template>
  <h6 class="mt-4 mb-3">Sidebar Color</h6>
  <div class="d-grid gap-3 grid-cols-2 mb-4">
     <radio-input btn-name="sidebar_color" labelClass="d-block  gap-1" id="sidebar-white" :default-checked="sidebarcolor" value="sidebar-white" @onChange="updateRadio">
      <span class="text-center">Default </span>
    </radio-input>
    <radio-input btn-name="sidebar_color" labelClass="d-block gap-1" id="sidebar-dark" :default-checked="sidebarcolor" value="sidebar-dark" @onChange="updateRadio">
      <span> Dark </span>
    </radio-input>
    <radio-input btn-name="sidebar_color" labelClass="d-block  gap-1" id="sidebar-color" :default-checked="sidebarcolor" value="sidebar-color" @onChange="updateRadio">
      <span> Color </span>
    </radio-input>
    <radio-input btn-name="sidebar_color" labelClass="d-block  gap-1" :imgComponent="true" id="sidebar-transparent" :default-checked="sidebarcolor" value="sidebar-transparent" @onChange="updateRadio">
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

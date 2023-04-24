<template>
  <div>
    <h6 class="mb-3">Sidebar Types</h6>
    <div class="d-grid gap-3 grid-cols-3 mb-3 text-center">
      <checkbox-input btn-name="sidebar_type" :imgComponent="true" label-title="Mini" id="sidebar-mini" label-class="p-0" :default-checked="menuStyle.value" value="sidebar-mini" @onChange="updateCheckbox">
        <img src="@/assets/images/settings/dark/03.png" alt="mini" className="mode dark-img img-fluid" loading="lazy" />
        <img src="@/assets/images/settings/light/03.png" alt="mini" className="mode light-img img-fluid" loading="lazy" />
      </checkbox-input>
      <checkbox-input btn-name="sidebar_type" :imgComponent="true" label-title="Hover" id="sidebar-hover" label-class="p-0" :default-checked="menuStyle.value" value="sidebar-hover" @onChange="updateCheckbox">
        <img src="@/assets/images/settings/dark/04.png" alt="hover" className="mode dark-img img-fluid" loading="lazy" />
        <img src="@/assets/images/settings/light/04.png" alt="hover" className="mode light-img img-fluid" loading="lazy" />
      </checkbox-input>
      <checkbox-input btn-name="sidebar_type" :imgComponent="true" label-title="Boxed" id="sidebar-boxed" label-class="p-0" :default-checked="menuStyle.value" value="sidebar-boxed" @onChange="updateCheckbox">
        <img src="@/assets/images/settings/dark/05.png" alt="boxed" className="mode dark-img img-fluid" loading="lazy" />
        <img src="@/assets/images/settings/light/05.png" alt="boxed" className="mode light-img img-fluid" loading="lazy" />
      </checkbox-input>
    </div>
  </div>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import CheckboxInput from '@/components/custom/elements/CheckboxInput'
import _ from 'lodash'
export default {
  components: {
    CheckboxInput
  },
  setup() {
    const store = useStore()
    const menuStyle = computed(() => _.cloneDeep(store.state.setting.setting.sidebar_type))

    const updateCheckbox = (value, name) => {
      store.dispatch(`setting/${name}`, value)
    }
    return {
      menuStyle,
      updateCheckbox
    }
  }
}
</script>

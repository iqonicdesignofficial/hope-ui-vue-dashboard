<template>
  <Dashboard id="drag-drop-area" :uppy="uppy" :open="open" :props="{ onRequestCloseModal: handleClose }" />
  <slot></slot>
</template>
<script>
import { computed, ref } from 'vue'
import Uppy from '@uppy/core'
import { Dashboard } from '@uppy/vue'
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'
export default {
  components: {
    Dashboard
  },
  props: {
    id: { type: String, default: '' },
    tag: { type: String, default: '' }
  },
  setup() {
    const open = ref(false)
    const uppy = computed(() => new Uppy())
    const handleClose = () => {
      this.open = false
    }
    return { uppy, open, handleClose }
  }
}
</script>

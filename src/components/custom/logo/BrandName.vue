<template>
  {{ appName }}
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const appName = computed(() => store.getters['setting/app_name'])
    return { appName }
  }
}
</script>

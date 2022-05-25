<template>
  <article id="toasts">
    <card-lable lablename="Toasts" lablelink="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Toasts"></card-lable>
    <section-components preview-component="toasts-preview" codeComponent="toasts-code" targetpreview="toasts-preview" targetcode="toasts-code"></section-components>
  </article>
</template>
<script>
import SectionComponents from '../../components/SectionComponents.vue'
import CardLable from '../../components/CardLable.vue'
import { onMounted } from 'vue'
const prism = () => import('@/plugins/prism.mini.js')

export default {
  components: {
    SectionComponents,
    CardLable
  },
  setup() {
    onMounted(() => {
      prism()
    })
  }
}
</script>

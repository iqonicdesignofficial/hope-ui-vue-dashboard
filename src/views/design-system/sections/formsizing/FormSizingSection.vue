<template>
  <article id="formSizing">
    <card-lable lablename="Sizing" lablelink="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Sizing"></card-lable>
    <section-components preview-component="formSizing-preview" codeComponent="formSizing-code" targetpreview="formSizing-preview" targetcode="formSizing-code"></section-components>
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

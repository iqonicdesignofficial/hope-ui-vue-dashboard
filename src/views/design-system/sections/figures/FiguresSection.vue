<template>
  <article id="figures">
    <card-lable lablename="Figures" lablelink="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Figures"></card-lable>
    <section-components preview-component="figures-preview" codeComponent="figures-code" targetpreview="figures-preview" targetcode="figures-code"></section-components>
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

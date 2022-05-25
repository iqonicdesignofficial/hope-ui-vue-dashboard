<template>
  <article id="alerts">
    <card-lable lablename="Alerts" lablelink="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Alert"></card-lable>
    <section-components preview-component="alerts-preview" codeComponent="alerts-code" targetpreview="alerts-preview" targetcode="alerts-code"></section-components>
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

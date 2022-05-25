<template>
  <article id="progress">
    <card-lable lablename="Progress" lablelink="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Progress"></card-lable>
    <section-components preview-component="progress-preview" codeComponent="progress-code" targetpreview="progress-preview" targetcode="progress-code"></section-components>
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

<template>
  <article id="typography">
    <card-lable lablename="Typography" lablelink="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Typography"></card-lable>
    <section-components preview-component="typography-preview" codeComponent="typography-code" targetpreview="typography-preview" targetcode="typography-code"></section-components>
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

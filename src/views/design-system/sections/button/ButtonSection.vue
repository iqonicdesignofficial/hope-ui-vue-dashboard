<template>
  <article id="button">
    <card-lable lablename="Button" lablelink="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Button"></card-lable>
    <section-components preview-component="button-preview" codeComponent="button-code" targetpreview="button-preview" targetcode="button-code"></section-components>
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

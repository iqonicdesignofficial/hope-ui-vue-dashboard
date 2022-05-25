<template>
  <article id="images">
    <card-lable lablename="Images" lablelink="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Images"></card-lable>
    <section-components preview-component="images-preview" codeComponent="images-code" targetpreview="images-preview" targetcode="images-code"></section-components>
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

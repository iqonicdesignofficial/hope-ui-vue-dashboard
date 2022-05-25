<template>
  <article id="card">
    <card-lable lablename="Card" lablelink="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Cards"></card-lable>
    <section-components preview-component="card-preview" codeComponent="card-code" targetpreview="card-preview" targetcode="card-code"></section-components>
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

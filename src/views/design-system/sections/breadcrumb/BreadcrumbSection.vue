<template>
  <article id="breadcrumb">
    <card-lable lablename="Breadcrumb" lablelink="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Breadcrumb"></card-lable>
    <section-components preview-component="breadcrumb-preview" codeComponent="breadcrumb-code" targetpreview="breadcrumb-preview" targetcode="breadcrumb-code"></section-components>
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

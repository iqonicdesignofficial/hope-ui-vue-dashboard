<template>
  <article id="carousel">
    <card-lable lablename="Carousel" lablelink="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Coursel"></card-lable>
    <section-components preview-component="carousel-preview" codeComponent="carousel-code" targetpreview="carousel-preview" targetcode="carousel-code"></section-components>
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

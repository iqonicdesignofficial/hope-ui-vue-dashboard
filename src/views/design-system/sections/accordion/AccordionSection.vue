<template>
  <article class="" id="Accordion">
    <card-lable lablename="Accordian" lablelink="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Accordian"></card-lable>
    <section-components preview-component="accordion-preview" codeComponent="accordion-code" targetpreview="accordion-preview" targetcode="accordion-code" class="iq-doc-head"></section-components>
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

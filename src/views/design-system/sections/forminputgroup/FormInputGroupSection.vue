<template>
  <article id="formInputGroup">
    <card-lable lablename="Input Group" lablelink="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Inputgroup"></card-lable>
    <section-components preview-component="formInputGroup-preview" codeComponent="formInputGroup-code" targetpreview="formInputGroup-preview" targetcode="formInputGroup-code"></section-components>
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

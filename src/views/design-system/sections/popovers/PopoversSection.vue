<template>
  <article id="popovers">
    <card-lable lablename="Popovers" lablelink="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Popovers"></card-lable>
    <section-components preview-component="popovers-preview" codeComponent="popovers-code" targetpreview="popovers-preview" targetcode="popovers-code"></section-components>
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

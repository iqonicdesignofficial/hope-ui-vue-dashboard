<template>
  <article id="listGroup">
    <card-lable lablename="List Group" lablelink="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Listgroup"></card-lable>
    <section-components preview-component="listGroup-preview" codeComponent="listGroup-code" targetpreview="listGroup-preview" targetcode="listGroup-code"></section-components>
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

<template>
  <article id="formOverview">
    <card-lable lablename="Overview" lablelink=""></card-lable>
    <section-components preview-component="formOverview-preview" codeComponent="formOverview-code" targetpreview="formOverview-preview" targetcode="formOverview-code"></section-components>
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

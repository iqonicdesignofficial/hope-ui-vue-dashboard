<template>
  <article id="Calendar">
    <card-lable lablename="Calendar" lablelink=""></card-lable>
    <section-components preview-component="Calendar-preview" codeComponent="Calendar-code" targetpreview="Calendar-preview" targetcode="Calendar-code"></section-components>
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

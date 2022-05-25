<template>
  <article id="navbar">
    <card-lable lablename="Navbar" lablelink="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Navbar"></card-lable>
    <section-components preview-component="navbar-preview" codeComponent="navbar-code" targetpreview="navbar-preview" targetcode="navbar-code"></section-components>
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

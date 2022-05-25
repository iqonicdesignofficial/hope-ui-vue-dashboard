<template>
  <component :is="tag" :class="classNames" role="tabpanel" :aria-labelledby="areaFor">
    <slot></slot>
  </component>
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    tag: {
      type: String,
      default: 'div'
    },

    active: {
      type: Boolean,
      default: false
    },
    noFade: {
      type: Boolean,
      default: false
    },
    animationClass: {
      type: String,
      default: 'fade'
    },
    tabFor: {
      type: String,
      default: '-tab'
    }
  },
  setup(props) {
    const classNames = ref([])
    classNames.value.push('tab-pane')
    if (!props.noFade) {
      classNames.value.push(props.animationClass)
    }
    if (props.active) {
      classNames.value.push('active')
      classNames.value.push('show')
    }
    const areaFor = ref(props.tabFor + '-tab')
    return {
      areaFor,
      classNames
    }
  }
}
</script>

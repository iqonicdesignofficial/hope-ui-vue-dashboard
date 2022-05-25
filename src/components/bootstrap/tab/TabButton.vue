<template>
  <component ref="bsTab" :is="tag" :class="classNames" :id="idName" :data-bs-toggle="toggleType" :data-bs-target="target" role="tab" :aria-controls="target" :aria-selected="active">
    <slot></slot>
  </component>
</template>
<script>
import { onMounted, ref } from 'vue'
import Tab from 'bootstrap/js/src/tab'
export default {
  props: {
    tag: {
      type: String,
      default: 'a'
    },
    toggleType: {
      type: String,
      default: 'tab'
    },
    target: {
      type: String,
      required: true,
      default: 'myTab'
    },
    active: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: '-tab'
    }
  },
  setup(props, { emit }) {
    const classNames = ref([])
    const bsTab = ref(null)
    const idName = ref('')
    idName.value = props.id + '-tab'
    let tab
    const onActive = () => {
      if (props.active) {
        tab.show()
      }
    }
    onMounted(() => {
      tab = new Tab(bsTab.value)
      onActive()
      bsTab.value.addEventListener('show.bs.tab', () => {
        emit('show', bsTab.value)
      })
      bsTab.value.addEventListener('shown.bs.tab', () => {
        emit('shown', bsTab.value)
      })
      bsTab.value.addEventListener('hide.bs.tab', () => {
        emit('hide', bsTab.value)
      })
      bsTab.value.addEventListener('hidden.bs.tab', () => {
        emit('hidden', bsTab.value)
      })
    })
    return {
      idName,
      classNames,
      bsTab
    }
  }
}
</script>

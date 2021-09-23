<template>
    <component :is="tag" :type="type" :tabindex="tabindex" :id="tooltipTarget" :class="className" data-bs-toggle="tooltip" :data-bs-placement="tooltipPlacement" :data-bs-html="htmlContent" :title="tooltipContent" ref="tooltip">
       {{tooltipText}}
        <slot/>
    </component>
</template>
<script>
import { Tooltip } from 'bootstrap'
export default {
  name: 'tooltip',
  props: {
    tag: { type: String, default: 'button' },
    type: { type: String, default: 'button' },
    tabindex: { type: Number },
    className: { type: String, default: '' },
    tooltipPlacement: { type: String, default: 'left' },
    htmlContent: { type: Boolean, default: false },
    tooltipContent: { type: String, default: '' },
    tooltipText: { type: String },
    tooltipTarget: { type: String, default: 'example-tooltip' },
    toggle: { type: Boolean, default: false, required: false }
  },
  mounted () {
    this.elem = new Tooltip(this.$refs.tooltip)
    this.initShow()
    this.initShown()
    this.initHide()
    this.initHidden()
    this.initInserted()
  },
  methods: {
    initShow () {
      this.$refs.tooltip.addEventListener('show.bs.tooltip', () => {
        this.$emit('show')
      })
    },
    initShown () {
      this.$refs.tooltip.addEventListener('shown.bs.tooltip', () => {
        this.$emit('shown')
      })
    },
    initHide () {
      this.$refs.tooltip.addEventListener('hide.bs.tooltip', () => {
        this.$emit('hide')
      })
    },
    initHidden () {
      this.$refs.tooltip.addEventListener('hidden.bs.tooltip', () => {
        this.$emit('hidden')
      })
    },
    initInserted () {
      this.$refs.tooltip.addEventListener('inserted.bs.tooltip', () => {
        this.$emit('inserted')
      })
    },
    destroyShow () {
      this.$refs.tooltip.removeListener('show.bs.tooltip')
    },
    destroyShown () {
      this.$refs.tooltip.removeListener('shown.bs.tooltip')
    },
    destroyHide () {
      this.$refs.tooltip.removeListener('hide.bs.tooltip')
    },
    destroyHidden () {
      this.$refs.tooltip.removeListener('hidden.bs.tooltip')
    },
    destroyInserted () {
      this.$refs.tooltip.removeListener('inserted.bs.tooltip')
    }
  }
}
</script>

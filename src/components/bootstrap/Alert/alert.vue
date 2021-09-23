<template>
<div :class="isdismissable? `alert  alert-dismissible  ${className} alert-`+variant : `alert  ${className} alert-`+variant" ref="alert" role="alert">
    <div v-if="isheader" :class="`alert-heading ${headingClass}`">{{headerText}}</div>
    <slot/>
    <button v-if="isdismissable" type="button" :class="`btn-close ${buttonClass}`" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
</template>
<script>
import { Alert } from 'bootstrap'
export default {
  name: 'alert',
  props: {
    variant: { type: String },
    className: { type: String, default: '' },
    headingClass: { type: String, default: '' },
    isdismissable: { type: Boolean, default: false },
    isheader: { type: Boolean, default: false },
    headerText: { type: String },
    buttonClass: { type: String, default: '' }
  },
  data () {
    return {
      elem: {}
    }
  },
  mounted () {
    this.elem = new Alert(this.$refs.alert)
    this.initClose()
    this.initClosed()
  },
  methods: {
    initClose () {
      this.$refs.alert.addEventListener('close.bs.alert', () => {
        this.$emit('close')
      })
    },
    initClosed () {
      this.$refs.alert.addEventListener('closed.bs.alert', () => {
        this.$emit('closed')
      })
    },
    destroyClose () {
      this.$refs.alert.removeListener('close.bs.alert')
    },
    destroyClosed () {
      this.$refs.alert.removeListener('closed.bs.alert')
    }
  }
  // unmounted () {
  //   this.destroyClose()
  //   this.destroyClosed()
  // }
}
</script>

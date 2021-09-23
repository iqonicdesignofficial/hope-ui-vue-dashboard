<template>
<div :class="`btn-group ${className}`" ref="dropdown">
  <div class="dropdown">
    <component v-if="presplit" :is="dropdownSplitTag" :type="splittype" :class="'dropdown-toggle dropdown-toggle-split btn btn-'+splitmainClass" data-bs-toggle="dropdown" :aria-expanded="splitariaExpanded">
        <span :class="'visually-hidden'+splitClass">{{splitDropdownText}}</span>
    </component>
    <component :is="dropdownMainTag" :class="presplit || postsplit? mainClass:`dropdown-toggle ${mainClass}`" data-bs-toggle="dropdown" :id="id" data-bs-display="static" :aria-haspopup="haspopup" :type="type" :role="role" :aria-expanded="ariaExpanded" >
        {{innerText}}
        <slot/>
    </component>
    <component v-if="postsplit" :is="dropdownSplitTag" :type="splittype" :class="'dropdown-toggle dropdown-toggle-split btn btn-'+splitmainClass" data-bs-toggle="dropdown" :aria-expanded="splitariaExpanded">
        <span :class="'visually-hidden'+splitClass">{{splitDropdownText}}</span>
    </component>
  </div>
</div>
</template>
<script>
import { Dropdown } from 'bootstrap'
export default {
  name: 'dropdown',
  props: {
    className: { type: String, default: '' },
    presplit: { type: Boolean, default: false },
    postsplit: { type: Boolean, default: false },
    dropdownSplitTag: { type: String, default: 'button' },
    dropdownMainTag: { type: String, default: 'button' },
    splittype: { type: String, default: 'button' },
    splitmainClass: { type: String },
    splitClass: { type: String },
    splitariaExpanded: { type: Boolean, default: false },
    haspopup: { type: Boolean, default: false },
    splitDropdownText: { type: String },
    mainClass: { type: String },
    type: { type: String },
    role: { type: String },
    id: { type: String },
    ariaExpanded: { type: Boolean, default: false },
    innerText: { type: String }
  },
  mounted () {
    this.elem = new Dropdown(this.$refs.dropdown)
    this.initShow()
    this.initShown()
    this.initHide()
    this.initHidden()
  },
  methods: {
    initShow () {
      this.$refs.dropdown.addEventListener('show.bs.dropdown', () => {
        this.$emit('show')
      })
    },
    initShown () {
      this.$refs.dropdown.addEventListener('shown.bs.dropdown', () => {
        this.$emit('shown')
      })
    },
    initHide () {
      this.$refs.dropdown.addEventListener('hide.bs.dropdown', () => {
        this.$emit('hide')
      })
    },
    initHidden () {
      this.$refs.dropdown.addEventListener('hidden.bs.dropdown', () => {
        this.$emit('hidden')
      })
    },
    destroyShow () {
      this.$refs.dropdown.removeListener('show.bs.dropdown')
    },
    destroyShown () {
      this.$refs.dropdown.removeListener('shown.bs.dropdown')
    },
    destroyHide () {
      this.$refs.dropdown.removeListener('hide.bs.dropdown')
    },
    destroyHidden () {
      this.$refs.dropdown.removeListener('hidden.bs.dropdown')
    }
  }
}
</script>

<template>
  <div :class="'card ' + className">
    <slot name="cardImage"/>
    <div v-if="hasHeaderTitleSlot || hasHeaderActionSlot" :class="'card-header d-flex justify-content-between '+headerClass">
      <div class="header-title">
        <slot name="headerTitle" />
      </div>
      <slot name="headerContent"/>
      <div class="card-header-toolbar d-flex align-items-center">
        <slot name="headerAction" />
      </div>
    </div>
    <div :class="'card-body ' + bodyClass" v-if="hasBodySlot">
      <slot name="body"/>
    </div>
    <slot />
    <div v-if="hasFooterSlot" :class="'card-footer' + footerClass">
      <slot name="footer"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'iq-card',
  props: {
    className: { type: String, default: '' },
    bodyClass: { type: String, default: '' },
    headerClass: { type: String, default: '' },
    footerClass: { type: String, default: '' }
  },
  mounted () {
  },
  computed: {
    hasHeaderTitleSlot () {
      return !!this.$slots.headerTitle
    },
    hasHeaderActionSlot () {
      return !!this.$slots.headerAction
    },
    hasBodySlot () {
      return !!this.$slots.body
    },
    hasFooterSlot () {
      return !!this.$slots.footer
    }
  }
}
</script>

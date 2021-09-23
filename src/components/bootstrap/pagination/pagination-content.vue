<template>
<li :class="`page-item ${itemClass}`" :aria-current="ariaCurrent">
    <a :class="`page-link ${itemlinkClass}`" :href="href" :aria-label="label" :tabindex="tabindex" :aria-disabled="Disabled">
        {{itemText}}
        <slot/>
    </a>
</li>
</template>
<script>
export default {
  name: 'pagination-content',
  props: {
    itemClass: {
      type: String,
      default: ''
    },
    itemlinkClass: {
      type: String,
      default: ''
    },
    href: {
      type: String
    },
    label: {
      type: String,
      default: ''
    },
    tabindex: {
      type: Number,
      default: 0
    },
    ariaCurrent: {
      type: String,
      default: ''
    },
    Disabled: {
      type: Boolean,
      default: false
    },
    itemText: {
      type: String,
      default: ''
    }
  }
}
</script>

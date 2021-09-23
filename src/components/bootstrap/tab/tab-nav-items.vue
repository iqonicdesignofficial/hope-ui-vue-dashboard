<template>
  <component :class="liClass" :is="tag" :id="mainId" :role="mainRole">
    <component :is="innerTag" :class="'nav-link '+className+' '+widthclass+ aClass" :id="id" :tabindex="tabindex" :data-bs-toggle="dataToggle" :href="url" :aria-current="ariaCurrent" :role="role" :aria-controls="ariaControls" :aria-selected="ariaSelected" :data-bs-target="target">
      <slot name="title" v-if="hasTitleSlot"/>
      <template v-else>{{ title }}</template>
    </component>
  </component>
</template>
<script>
export default {
  name: 'tab-nav-items',
  props: {
    id: { type: String, default: '' },
    mainId: { type: String, default: '' },
    tag: { type: String, default: 'li' },
    innerTag: { type: String, default: 'a' },
    active: { type: Boolean, default: false },
    mainRole: { type: String, default: '' },
    role: { type: String, default: '' },
    ariaControls: { type: String, default: '' },
    ariaSelected: { type: Boolean, default: false },
    dataToggle: { type: String, default: '' },
    tabindex: { type: Number, default: 0 },
    target: { type: String, default: '' },
    ariaCurrent: { type: String, default: 'page' },
    aClass: { type: String, default: '' },
    href: { type: String, default: '' },
    title: { type: String, default: '' },
    liClass: { type: String, default: 'nav-item' },
    widthclass: { type: String, default: '' }
  },
  mounted () {
    if (this.active) {
      this.className = 'show active'
    }
  },
  computed: {
    hasTitleSlot () {
      return !!this.$slots.title
    },
    url () {
      if (this.href === '') {
        return '#' + this.ariaControls
      }
      return this.href
    }
  },
  data () {
    return {
      className: ''
    }
  }
}
</script>

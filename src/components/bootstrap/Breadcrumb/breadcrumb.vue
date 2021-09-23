<template>
    <component :is="tag" :aria-label="ariaLabel" :class="breadcrumbClass">
        <component :is="innerTag" :class="innerClass">
            <slot/>
        </component>
    </component>
</template>
<script>
export default {
  name: 'breadcrumb',
  props: {
    ariaLabel: { type: String, default: '' },
    tag: { type: String, default: 'nav' },
    innerTag: { type: String, default: 'ol' },
    breadcrumbClass: { type: String, default: '' },
    innerClass: { type: String, default: '' }
  }
}
</script>

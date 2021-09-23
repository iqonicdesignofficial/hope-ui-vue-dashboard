<template>
    <component :is="tag" :class="`breadcrumb-item ${liClass}`" :aria-current="ariaCurrent">
        <slot/>
    </component>
</template>
<script>
export default {
  name: 'breadcrumbcontent',
  props: {
    tag: { type: String, default: 'li' },
    liClass: { type: String, default: '' },
    ariaCurrent: { type: String, default: '' }
  }
}
</script>

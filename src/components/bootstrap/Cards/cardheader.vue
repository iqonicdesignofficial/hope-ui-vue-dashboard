<template>
    <component :class="headerClass" :is="tag">
        <slot/>
    </component>
</template>
<script>
export default {
  name: 'cardheader',
  props: {
    headerClass: { type: String, default: '' },
    tag: { type: String, default: 'div' }
  }
}
</script>

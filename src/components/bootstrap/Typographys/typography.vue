<template>
    <component :is="tag" :class="className" >
        <slot/>
    </component>
</template>
<script>
export default {
  name: 'typography',
  props: {
    tag: { type: String, default: 'blockquote' },
    className: { type: String, default: '' }
  }
}
</script>

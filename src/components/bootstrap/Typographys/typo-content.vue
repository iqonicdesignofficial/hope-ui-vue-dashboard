<template>
    <component :is="tag" :class="className" >
        <slot/>
    </component>
</template>
<script>
export default {
  name: 'typo-content',
  props: {
    tag: { type: String, default: 'p' },
    className: { type: String, default: '' }
  }
}
</script>

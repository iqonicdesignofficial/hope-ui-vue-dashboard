<template>
    <component :class="Class" :is="tag">
        <slot/>
    </component>
</template>
<script>
export default {
  name: 'cardbody',
  props: {
    Class: { type: String, default: 'card-body' },
    tag: { type: String, default: 'div' }
  }
}
</script>

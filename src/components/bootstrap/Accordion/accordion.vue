<template>
    <div :class="`accordion ${mainClass}`" :id="id">
        <div :class="`accordion-item ${itemClass}`">
            <slot/>
        </div>
    </div>
</template>
<script>
export default {
  name: 'accordion',
  props: {
    mainClass: { type: String, default: '' },
    itemClass: { type: String, default: '' },
    id: { type: String }
  }
}
</script>

<template>
    <component :is="dropdownMenuTag" :class="`dropdown-menu ${menuClass}`"  :aria-labelledby="id" >
        <slot/>
    </component>
</template>
<script>
export default {
  name: 'dropdown-items',
  props: {
    dropdownMenuTag: { type: String, default: 'ul' },
    id: { type: String },
    menuClass: { type: String, default: '' }
  }
}
</script>

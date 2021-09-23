<template>
<nav :aria-label="ariaLabel">
    <ul :class="`pagination ${mainClass}`">
        <slot/>
    </ul>
</nav>
</template>
<script>
export default {
  name: 'pagination',
  props: {
    ariaLabel: { type: String, default: '' },
    mainClass: { type: String, default: '' }
  }
}
</script>

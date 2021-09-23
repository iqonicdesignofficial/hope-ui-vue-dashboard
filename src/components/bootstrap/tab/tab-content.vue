<template>
  <div :class="'tab-content' +' '+extraclass " :id="id"  >
    <slot />
  </div>
</template>
<script>
export default {
  name: 'tab-content',
  props: {
    id: { type: String, default: 'myTabContent' },
    extraclass: { type: String, default: 'null' }
  }
}
</script>

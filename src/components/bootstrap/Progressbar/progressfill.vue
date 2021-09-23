<template>
    <div :class="`progress-bar ${className}`" :role="role" :aria-valuemin="ariavaluemin" :aria-valuenow="ariavaluenow" :aria-valuemax="ariavaluemax" :style="Style">
      {{innerText}}
      <slot/>
    </div>
</template>
<script>
export default {
  name: 'progressfill',
  props: {
    ariavaluemin: { type: Number, default: 0 },
    ariavaluenow: { type: Number },
    ariavaluemax: { type: Number },
    color: { type: String, default: '' },
    verticle: { type: Boolean, default: false },
    role: { type: String, default: 'progressbar' },
    className: { type: String, default: '' },
    Style: { type: String, default: '' },
    innerText: { type: String }
  }
}
</script>

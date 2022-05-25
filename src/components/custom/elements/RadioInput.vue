<template>
  <div :class="className">
    <input type="radio" :value="value" class="btn-check" :name="btnName" :id="id" autoComplete="off" :checked="radioCheckValue(defaultChecked, value)" @change="$emit('onChange', value, btnName)" />
    <label :class="`btn btn-border  ${labelClass}`" :for="id">
      <slot />
    </label>
    <span class="mt-2" v-if="imgComponent"> {{ labelTitle }} </span>
  </div>
</template>
<script>
export default {
  name: 'RadioInput',
  props: {
    className: {
      type: String,
      default: ''
    },
    btnName: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    labelTitle: {
      type: String,
      default: ''
    },
    labelClass: {
      type: String,
      default: ''
    },
    imgComponent: {
      type: Boolean,
      default: false
    },
    defaultChecked: {
      type: String,
      default: ''
    }
  },
  setup() {
    const radioCheckValue = (selector, value) => {
      if (selector === value) {
        return true
      }
      return false
    }
    return { radioCheckValue }
  }
}
</script>

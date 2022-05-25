<template>
  <div :class="className">
    <input type="checkbox" :value="value" class="btn-check" :name="btnName" :id="id" autoComplete="off" :checked="checkboxCheckValue(defaultChecked, value)" @change="$emit('onChange', onCheckboxUpdate(defaultChecked, value), btnName)" />
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
      type: Array,
      default: () => []
    }
  },
  setup() {
    const checkboxCheckValue = (selector, value) => {
      if (selector.includes(value)) {
        return true
      }
      return false
    }

    const onCheckboxUpdate = (defaultChecked, value) => {
      if (checkboxCheckValue(defaultChecked, value)) {
        return [...defaultChecked.filter((item) => item !== value)]
      } else {
        return [...defaultChecked, value]
      }
    }
    return { checkboxCheckValue, onCheckboxUpdate }
  }
}
</script>

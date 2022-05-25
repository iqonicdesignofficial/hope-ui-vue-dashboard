<template>
  <div class="bd-example">
    <flat-picker v-model="date" :config="{ minDate: 'today', dateFormat: 'Y-m-d' }" name="date" placeholder="date picker" class="form-control"></flat-picker>
  </div>
  <div class="bd-example">
    <b-input-group class="form-group form-group-filled">
      <flat-picker v-model="rangedate" :config="{ mode: 'range', minDate: 'today', dateFormat: 'Y-m-d' }" name="date" placeholder="date range picker" class="form-control"></flat-picker>
    </b-input-group>
  </div>
  <div class="bd-example">
    <flat-picker v-model="inlinedate" :config="{ mode: 'range', minDate: 'today', dateFormat: 'Y-m-d', inline: true }" name="date" placeholder="date range picker" class="form-control d-none"></flat-picker>
  </div>
</template>
<script>
import { ref } from 'vue'
import FlatPicker from 'vue-flatpickr-component'
export default {
  components: {
    FlatPicker
  },
  setup() {
    const date = ref('')
    const rangedate = ref('')
    const inlinedate = ref('')
    return {
      date,
      rangedate,
      inlinedate
    }
  }
}
</script>

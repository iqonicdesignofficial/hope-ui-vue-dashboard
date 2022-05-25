<template>
  <div class="bd-example">
    <div class="mb-3">
      <b-form-input id="input-large" size="lg" placeholder="Enter your name"></b-form-input>
    </div>
    <div class="mb-3">
      <b-form-select v-model="ex1Selected" :options="ex1Options" size="lg" class="mt-3"></b-form-select>
    </div>
    <div class="mb-3">
      <input type="file" class="form-control form-control-lg" aria-label="Large file input example" />
    </div>
  </div>
  <div class="bd-example">
    <div class="mb-3">
      <b-form-input id="input-small" size="sm" placeholder="Enter your name"></b-form-input>
    </div>
    <div class="mb-3">
      <b-form-select v-model="ex1Selected" :options="ex1Options" size="sm" class="mt-3"></b-form-select>
    </div>
    <div class="mb-3">
      <input type="file" class="form-control form-control-sm" aria-label="Small file input example" />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const ex1Selected = ref()
const ex1Options = [
  { value: null, text: 'Open this select menu' },
  { value: 'c', text: 'One' },
  { value: 'a', text: 'Two' },
  { value: 'b', text: 'Three' }
]
</script>

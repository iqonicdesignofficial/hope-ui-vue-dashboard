<template>
  <div class="bd-example">
    <div class="form-check-inline">
      <b-form-checkbox>Default</b-form-checkbox>
    </div>
    <div class="form-check-inline">
      <b-form-checkbox v-model="switchChecked1">Checked</b-form-checkbox>
    </div>
    <div class="form-check-inline">
      <b-form-checkbox disabled>Disabled</b-form-checkbox>
    </div>
    <div class="form-check-inline">
      <b-form-checkbox disabled>Disabled</b-form-checkbox>
    </div>
  </div>
  <div class="bd-example">
    <div class="form-check-inline">
      <b-form-checkbox v-model="switchChecked1">Active</b-form-checkbox>
    </div>
    <div class="form-check-inline">
      <b-form-radio>Inactive </b-form-radio>
    </div>
    <div class="form-check-inline">
      <b-form-radio v-model="switchChecked1" disabled>Active - Disabled </b-form-radio>
    </div>
    <div class="form-check-inline">
      <b-form-radio disabled>Inactive - Disabled </b-form-radio>
    </div>
  </div>
  <div class="bd-example">
    <div class="form-check-inline">
      <b-form-checkbox v-model="switchChecked" switch>Off Switch</b-form-checkbox>
    </div>
    <div class="form-check-inline">
      <b-form-checkbox v-model="switchChecked1" switch>On Switch</b-form-checkbox>
    </div>
    <div class="form-check-inline">
      <b-form-checkbox v-model="switchChecked" disabled switch>Disabled Switch</b-form-checkbox>
    </div>
    <div class="form-check-inline">
      <b-form-checkbox v-model="switchChecked1" switch>Switch</b-form-checkbox>
    </div>
  </div>
  <div class="bd-example">
    <div class="form-group">
      <label for="customRange1" class="form-label">Example range</label>
      <b-form-input type="range" class="form-range w-100" id="customRange1" />
    </div>
    <div class="form-group">
      <div class="slider"></div>
    </div>
    <div class="form-group">
      <div class="slider slider-secondary"></div>
    </div>
    <div class="form-group">
      <div class="slider slider-success"></div>
    </div>
    <div class="form-group">
      <div class="slider slider-danger"></div>
    </div>
    <div class="form-group">
      <div class="slider slider-warning"></div>
    </div>
    <div class="form-group">
      <div class="slider slider-dark"></div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const switchChecked = ref(false)
const switchChecked1 = ref(true)
</script>

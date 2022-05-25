<template>
  <b-row>
    <div class="col-sm-12 col-lg-6">
      <default-form></default-form>
      <supported-elements></supported-elements>
    </div>
    <div class="col-sm-12 col-lg-6">
      <custom-validation></custom-validation>
      <tooltip-form></tooltip-form>
    </div>
  </b-row>
</template>
<script setup>
import DefaultForm from '@/components/widgets/validation/DefaultForm.vue'
import SupportedElements from '@/components/widgets/validation/SupportedElements.vue'
import CustomValidation from '@/components/widgets/validation/CustomValidation.vue'
import TooltipForm from '@/components/widgets/validation/TooltipsForm.vue'
</script>

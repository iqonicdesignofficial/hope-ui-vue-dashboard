<template>
  <b-row>
    <b-col sm="12">
      <b-card no-body>
        <b-card-header header-class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Vector</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <lea-flet id="chart-map-column-04" :options="leafFletOptions" />
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>
<script setup>
import { ref } from 'vue'
import LeaFlet from '@/components/custom/vector-map/LeaFlet'
import { data } from '@/assets/vector-map.js'
const leafFletOptions = ref(data)
</script>

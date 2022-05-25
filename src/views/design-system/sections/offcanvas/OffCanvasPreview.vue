<template>
  <div class="bd-example">
    <b-button variant="primary mt-2" type="button" @click="offcanvasTop = true">Toggle top offcanvas</b-button>
    {{ ' ' }}
    <b-button variant="primary mt-2" type="button" @click="offcanvasEnd = true">Toggle right offcanvas</b-button>
    {{ ' ' }}
    <b-button variant="primary mt-2" type="button" @click="offcanvasBottom = true">Toggle bottom offcanvas</b-button>
    {{ ' ' }}
    <b-button variant="primary mt-2" type="button" @click="offcanvasStart = true">Toggle left offcanvas</b-button>
    {{ ' ' }}
    <b-button variant="primary mt-2" type="button" @click="offcanvasScroll = true">Toggle Scroll offcanvas</b-button>
    <b-offcanvas v-model="offcanvasTop" placement="top" title="Offcanvas top">...</b-offcanvas>
    <b-offcanvas v-model="offcanvasEnd" placement="end" title="Offcanvas right">...</b-offcanvas>
    <b-offcanvas v-model="offcanvasBottom" placement="bottom" title="Offcanvas bottom">...</b-offcanvas>
    <b-offcanvas v-model="offcanvasStart" placement="start" title="Offcanvas left">...</b-offcanvas>
    <b-offcanvas v-model="offcanvasScroll" placement="start" title="Offcanvas Scroll" :body-scrolling="true">...</b-offcanvas>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const offcanvasTop = ref(false)
const offcanvasStart = ref(false)
const offcanvasEnd = ref(false)
const offcanvasBottom = ref(false)
const offcanvasScroll = ref(false)
</script>

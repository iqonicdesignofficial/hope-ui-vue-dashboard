<template>
  <div class="bd-example">
    <div class="flex-wrap d-flex align-items-center">
      <b-button variant="primary me-2" @click="modal = true">Launch demo modal</b-button>
      {{ ' ' }}

      <b-button variant="primary me-2" @click="modalstatic = true">Launch static backdrop modal</b-button>
      {{ ' ' }}

      <b-button variant="primary me-2 mt-2" @click="modalscroll = true">Vertically centered scrollable modal</b-button>
      {{ ' ' }}

      <b-button variant="primary mt-2" @click="modalfullscreen = true">Full screen</b-button>
      {{ ' ' }}

      <b-modal v-model="modal" title="Modal title"> ... </b-modal>
      <b-modal v-model="modalstatic" title="Modal title" noCloseOnBackdrop><p>I will not close if you click outside me. Don't even try to press escape key.</p></b-modal>
      <b-modal v-model="modalscroll" scrollable title="Modal title">
        <p v-for="i in 20" :key="i">This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the prefedined max-height of modal, content will be cropped and scrollable within the modal.</p>
      </b-modal>
      <b-modal v-model="modalfullscreen" fullscreen dialogClass="testt" title="Full screen modal">
        <p class="my-4">.....</p>
      </b-modal>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const modal = ref(false)
const modalstatic = ref(false)
const modalscroll = ref(false)
const modalfullscreen = ref(false)
// const show = ref(false)
</script>

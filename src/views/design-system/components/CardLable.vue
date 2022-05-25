<template>
  <div class="bd-heading sticky-xl-top align-self-start">
    <b-card>
      <h5>{{ lablename }}</h5>
      <div class="mt-2 d-flex align-items-center">
        <a class="d-flex" :href="`${lablelink}`" target="_blank">
          <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <span>{{ labledec }} </span>
        </a>
      </div>
    </b-card>
  </div>
</template>
<script>
export default {
  props: {
    lablename: { type: String, required: true },
    lablelink: { type: String, required: true },
    labledec: { type: String, default: 'Documentation' }
  }
}
</script>

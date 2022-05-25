<template>
  <div class="card bg-transparent shadow-none">
    <div class="iq-dashed-border">
      <div class="d-flex align-items-center justify-content-between">
        <h6 class="text-body mb-0">New Task</h6>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" fill="none" @click="onClick">
          <g>
            <path d="M12.0711 18.9706V4.82847M19.1421 11.8995H5" stroke="currentColor" stroke-linecap="round"></path>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(props, { emit }) {
    const onClick = (e) => {
      emit('onClick', e)
    }
    return {
      props,
      onClick
    }
  }
}
</script>

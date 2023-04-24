<template>
  <div class="bd-example">
    <b-button variant="danger" id="popover-target-1">Click to toggle popover</b-button>
    <b-popover target="popover-target-1" triggers="click" placement="top">
      <template #title>Popover Title</template>
      I am popover <b>component</b> content!
    </b-popover>
  </div>

  <div class="bd-example">
    <b-button v-b-popover.hover.top="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'" variant="gray">Popover on top</b-button>
    {{ ' ' }}
    <b-button v-b-popover.hover.right="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'" variant="gray">Popover on end</b-button>
    {{ ' ' }}
    <b-button v-b-popover.hover.bottom="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'" variant="gray">Popover on bottom</b-button>
    {{ ' ' }}
    <b-button v-b-popover.hover.left="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'" variant="gray">Popover on start</b-button>
  </div>
</template>

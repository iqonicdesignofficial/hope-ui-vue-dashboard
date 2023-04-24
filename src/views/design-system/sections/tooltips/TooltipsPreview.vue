<template>
  <div class="bd-example tooltip-demo">
    <b-button v-b-tooltip.hover title="Tooltip!" variant="gray">Tooltip on top</b-button>
    {{ ' ' }}
    <b-button v-b-tooltip.hover.right title="Tooltip on end" variant="gray">Tooltip on end</b-button>
    {{ ' ' }}
    <b-button v-b-tooltip.hover.bottom title="Tooltip on bottom" variant="gray">Tooltip on bottom</b-button>
    {{ ' ' }}
    <b-button v-b-tooltip.hover.left title="Tooltip on start" variant="gray">Tooltip on start</b-button>
    {{ ' ' }}
    <b-button v-b-tooltip.hover title="'<em>Tooltip</em> <u>with</u> <b>HTML</b>'" variant="gray">Tooltip with HTML</b-button>
  </div>
</template>

<template>
  <div :class="`progress bg-soft-${colorName} ${verticle ? 'progress-bar-vertical bg-'+colorName : ''}`">
    <component :is="tag" :class="`progess-bar bg-${color}`+midclass" ref="progress" :style="`transition: width 2s ease 0s; width: ${width}`" :data-value="value" data-toggle="progress-bar" role="progressbar">
      <slot name="text"/>
    </component>
  </div>
</template>
<script>
export default {
  name: 'Progressbar',
  props: {
    value: { type: Number, default: 0 },
    colorName: { type: String, default: '' },
    color: { type: String, default: '' },
    midclass: { type: String, default: '' },
    verticle: { type: Boolean, default: false },
    tag: { type: String, default: 'div' }
  },
  data () {
    return {
      waypointInit: {},
      width: 0
    }
  },
  mounted () {
    this.$nextTick()
    setTimeout(() => {
      this.init()
    }, 1000)
  },
  methods: {
    init () {
      if (this.verticle) {
        this.progressInitVerticle(this.$refs.progress)
      } else {
        this.progressInit(this.$refs.progress)
      }
    },
    progressInitVerticle (e) {
      const iqProgress = e
      if (iqProgress !== undefined && iqProgress !== null) {
        iqProgress.style.width = '100%'
        iqProgress.style.height = iqProgress.getAttribute('data-value') + '%'
        iqProgress.style.transition = 'height 2s ease 0s'
      }
    },
    progressInit (e) {
      const iqProgress = e
      if (iqProgress !== undefined && iqProgress !== null && iqProgress !== undefined) {
        this.waypointInit = new Waypoint({
          element: iqProgress,
          handler: () => {
            setTimeout(() => {
              this.width = iqProgress.getAttribute('data-value') + '%'
            }, 100)
          },
          offset: 'bottom-in-view'
        })
      }
    }
  }
}
</script>

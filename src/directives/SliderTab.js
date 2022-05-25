import SliderTab from '@/plugins/slider-tabs.js'

const sliderTab = {
  // called before bound element's attributes
  // or event listeners are applied
  created() {
    // see below for details on arguments
  },
  // called right before the element is inserted into the DOM.
  beforeMount() {
    // Before Mount Function
  },
  // called when the bound element's parent component
  // and all its children are mounted.
  mounted(el) {
    return new SliderTab(el)
  },
  // called before the parent component is updated
  beforeUpdate() {
    // Before Update Function
  },
  // called after the parent component and
  // all of its children have updated
  updated() {
    // Updated Function
  },
  // called before the parent component is unmounted
  beforeUnmount() {
    return SliderTab.destroy()
  },
  // called when the parent component is unmounted
  unmounted() {
    // Unmounted Function
  }
}

export default sliderTab

export default {
  install: (app) => {
    app.directive('slider-tab', require('../directives/SliderTab.js').default)
  }
}

// Register global components
export default {
  install: (app) => {
    // Tab Components
    app.component('tab-button', require('@/components/bootstrap/tab/TabButton').default)
    app.component('tab-pane', require('@/components/bootstrap/tab/TabPane').default)

    // Brand Components
    app.component('brand-logo', require('@/components/custom/logo/BrandLogo').default)
    app.component('brand-name', require('@/components/custom/logo/BrandName').default)

    // Icon Components
    app.component('icon-component', require('@/components/icons/IconComponent').default)
  }
}

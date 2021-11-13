import { createStore } from 'vuex'

export default createStore({
  state: {
    appName: 'Hope UI',
    settings: {
      scheme: 'light',
      themeColor: 'theme-color-default',
      themeprimarycolor: '#3a57e8',
      themeinfocolor: '#079aa2',
      schemeDir: 'ltr',
      sidebarcolor: 'sidebar-white',
      sidebartype: { mini: '', hover: '', boxed: '' },
      sidebaractivestyle: 'navs-rounded-all',
      navbarstyle: '',
      subnavbarstyle: ''
    }
  },
  getters: {
    scheme: state => { return state.settings.scheme },
    themeColor: state => { return state.settings.themeColor },
    themePrimaryColor: state => { return state.settings.themeprimarycolor },
    themeinfoColor: state => { return state.settings.themeinfocolor },
    appName: state => { return state.appName },
    schemeDir: state => { return state.settings.schemeDir },
    sidebartypemini: state => { return state.settings.sidebartype.mini },
    sidebartypehover: state => { return state.settings.sidebartype.hover },
    sidebartypeboxed: state => { return state.settings.sidebartype.boxed },
    sidebarcolor: state => { return state.settings.sidebarcolor },
    sidebaractivestyle: state => { return state.settings.sidebaractivestyle },
    navbarstyle: state => { return state.settings.navbarstyle },
    subnavbarstyle: state => { return state.settings.subnavbarstyle }
  },
  mutations: {
    schemeModeCommit (state, payload) {
      sessionStorage.setItem('color-mode', payload)
      state.settings.scheme = payload
    },
    themecolorModeCommit (state, payload) {
      console.log(payload)
      sessionStorage.setItem('theme-mode', payload.p1)
      sessionStorage.setItem('themeprimary-mode', payload.p2)
      sessionStorage.setItem('colorcustomchart-mode', payload.p3)
      state.settings.themeColor = payload.p1
      state.settings.themeprimarycolor = payload.p2
      state.settings.themeinfocolor = payload.p3
    },
    schemedirModeCommit (state, payload) {
      sessionStorage.setItem('dir-mode', payload)
      state.settings.schemeDir = payload
    },
    sidebarcolorsCommit (state, payload) {
      state.settings.sidebarcolor = payload
      sessionStorage.setItem('sidebar-color', payload)
    },
    sidebarminitypeCommit (state, payload) {
      state.settings.sidebartype.mini = payload
      sessionStorage.setItem('type-mini', payload)
    },
    sidebarhovertypeCommit (state, payload) {
      state.settings.sidebartype.hover = payload
      sessionStorage.setItem('type-hover', payload)
    },
    sidebarboxedtypeCommit (state, payload) {
      state.settings.sidebartype.boxed = payload
      sessionStorage.setItem('type-boxed', payload)
    },
    sidebaractivestylesCommit (state, payload) {
      sessionStorage.setItem('sidebaractivestyle', payload)
      state.settings.sidebaractivestyle = payload
    },
    navbarstylesCommit (state, payload) {
      if (payload === 'navs-bg-color') {
        state.settings.subnavbarstyle = payload
        sessionStorage.setItem('navbarstyle', payload)
        state.settings.navbarstyle = ''
      } else {
        state.settings.navbarstyle = payload
        sessionStorage.setItem('navbarstyle', payload)
        state.settings.subnavbarstyle = ''
      }
    },
    defaultCommit (state) {
      state.settings.navbarstyle = ''
      state.settings.subnavbarstyle = ''
      sessionStorage.setItem('navbarstyle', state.settings.navbarstyle)
    }
  },
  actions: {
    schemeModeAction (context, payload) {
      context.commit('schemeModeCommit', payload)
    },
    themecolorModeAction (context, payload) {
      context.commit('themecolorModeCommit', payload)
    },
    schemedirModeAction (context, payload) {
      context.commit('schemedirModeCommit', payload)
    },
    sidebarcolorsAction (context, payload) {
      context.commit('sidebarcolorsCommit', payload)
    },
    sidebarminitypeAction (context, payload) {
      context.commit('sidebarminitypeCommit', payload)
    },
    sidebarhovertypeAction (context, payload) {
      context.commit('sidebarhovertypeCommit', payload)
    },
    sidebarboxedtypeAction (context, payload) {
      context.commit('sidebarboxedtypeCommit', payload)
    },
    sidebaractivestyleAction (context, payload) {
      context.commit('sidebaractivestylesCommit', payload)
    },
    navbarstyleAction (context, payload) {
      context.commit('navbarstylesCommit', payload)
    },
    defaultAction (context, payload) {
      context.commit('defaultCommit', payload)
    }
  }

})

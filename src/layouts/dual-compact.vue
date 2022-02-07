<template>
    <span class="screen-darken"></span>
    <!-- loader Start -->
    <div id="loading">
      <loader />
    </div>
    <!-- loader END -->
    <main class="main-content">
      <HeaderStyle5 />
      <!--Nav End-->
      <div class="conatiner-fluid content-inner pb-0">
        <router-view />
        <div class="btn-download">
          <a class="btn btn-success" href="https://iqonic.design/product/admin-templates/hope-ui-open-source-vue-js-admin-template/" target="_blank" >
              <svg width="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M5.91064 20.5886C5.91064 19.7486 6.59064 19.0686 7.43064 19.0686C8.26064 19.0686 8.94064 19.7486 8.94064 20.5886C8.94064 21.4186 8.26064 22.0986 7.43064 22.0986C6.59064 22.0986 5.91064 21.4186 5.91064 20.5886ZM17.1606 20.5886C17.1606 19.7486 17.8406 19.0686 18.6806 19.0686C19.5106 19.0686 20.1906 19.7486 20.1906 20.5886C20.1906 21.4186 19.5106 22.0986 18.6806 22.0986C17.8406 22.0986 17.1606 21.4186 17.1606 20.5886Z" fill="currentColor"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1907 6.34909C20.8007 6.34909 21.2007 6.55909 21.6007 7.01909C22.0007 7.47909 22.0707 8.13909 21.9807 8.73809L21.0307 15.2981C20.8507 16.5591 19.7707 17.4881 18.5007 17.4881H7.59074C6.26074 17.4881 5.16074 16.4681 5.05074 15.1491L4.13074 4.24809L2.62074 3.98809C2.22074 3.91809 1.94074 3.52809 2.01074 3.12809C2.08074 2.71809 2.47074 2.44809 2.88074 2.50809L5.26574 2.86809C5.60574 2.92909 5.85574 3.20809 5.88574 3.54809L6.07574 5.78809C6.10574 6.10909 6.36574 6.34909 6.68574 6.34909H20.1907ZM14.1307 11.5481H16.9007C17.3207 11.5481 17.6507 11.2081 17.6507 10.7981C17.6507 10.3781 17.3207 10.0481 16.9007 10.0481H14.1307C13.7107 10.0481 13.3807 10.3781 13.3807 10.7981C13.3807 11.2081 13.7107 11.5481 14.1307 11.5481Z" fill="currentColor"></path>
              </svg>
              <span>Download</span>
          </a>
      </div>
      </div>
      <Footer />
    </main>
</template>
<script>
import Footer from '@/components/custom/partials/Footer/Footer'
import HeaderStyle5 from '@/components/custom/partials/Header/HeaderStyle5'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'dual-compact',
  components: {
    Footer,
    HeaderStyle5
  },
  computed: {
    ...mapGetters({
      stateScheme: 'scheme',
      stateschemedir: 'schemeDir',
      stateThemeColor: 'themeColor',
      statePrimaryColor: 'themePrimaryColor',
      stateInfoColor: 'themeinfoColor'
    })
  },
  mounted () {
    document.body.classList.add('dual-compact')
    this.rtlmode()
    this.colorMode()
    this.themeMode()
  },
  unmounted () {
    document.body.classList.remove('dual-compact')
  },
  watch: {
    stateScheme (change) {
      this.onChangeMode(change)
    },
    stateschemedir (value) {
      this.onChangeDir(value)
    },
    stateThemeColor (change) {
      this.onThemeMode(change, this.statePrimaryColor, this.stateInfoColor)
    }
  },
  methods: {
    ...mapActions({
      schememodeChange: 'schemeModeAction',
      schemedirmodeChange: 'schemedirModeAction',
      themecolormodeChange: 'themecolorModeAction'
    }),
    onChangeMode (change) {
      switch (change) {
        case 'auto':
          document.body.classList.add('auto')
          document.body.classList.remove('dark')
          document.body.classList.remove('light')

          break
        case 'dark':
          document.body.classList.add('dark')
          document.body.classList.remove('auto')
          document.body.classList.remove('light')
          break
        case 'light':
          document.body.classList.add('light')
          document.body.classList.remove('dark')
          document.body.classList.remove('auto')
          break
      }
    },
    colorMode () {
      const schemeMode = sessionStorage.getItem('color-mode')
      if (schemeMode !== null) {
        this.onChangeMode(schemeMode)
        this.schememodeChange(schemeMode)
      } else {
        this.onChangeMode(this.stateScheme)
        this.schememodeChange(this.stateScheme)
      }
    },
    onThemeMode (change, primaryColor, InfoColor) {
      const elem = document.querySelector('html')
      switch (change) {
        case 'theme-color-blue':
          document.body.classList.add('theme-color-blue')
          document.body.classList.remove('theme-color-gray')
          document.body.classList.remove('theme-color-red')
          document.body.classList.remove('theme-color-yellow')
          document.body.classList.remove('theme-color-pink')
          document.body.classList.remove('theme-color-default')
          elem.setAttribute('style', '--bs-info:#573BFF;')

          break
        case 'theme-color-gray':
          document.body.classList.add('theme-color-gray')
          document.body.classList.remove('theme-color-blue')
          document.body.classList.remove('theme-color-red')
          document.body.classList.remove('theme-color-yellow')
          document.body.classList.remove('theme-color-pink')
          document.body.classList.remove('theme-color-default')
          elem.setAttribute('style', '--bs-info:#FD8D00;')
          break
        case 'theme-color-red':
          document.body.classList.add('theme-color-red')
          document.body.classList.remove('theme-color-blue')
          document.body.classList.remove('theme-color-gray')
          document.body.classList.remove('theme-color-yellow')
          document.body.classList.remove('theme-color-pink')
          document.body.classList.remove('theme-color-default')
          elem.setAttribute('style', '--bs-info:#366AF0;')
          break
        case 'theme-color-yellow':
          document.body.classList.add('theme-color-yellow')
          document.body.classList.remove('theme-color-blue')
          document.body.classList.remove('theme-color-gray')
          document.body.classList.remove('theme-color-red')
          document.body.classList.remove('theme-color-pink')
          document.body.classList.remove('theme-color-default')
          elem.setAttribute('style', '--bs-info:#6410F1;')
          break
        case 'theme-color-pink':
          document.body.classList.add('theme-color-pink')
          document.body.classList.remove('theme-color-blue')
          document.body.classList.remove('theme-color-gray')
          document.body.classList.remove('theme-color-red')
          document.body.classList.remove('theme-color-yellow')
          document.body.classList.remove('theme-color-default')
          elem.setAttribute('style', '--bs-info:#25C799;')
          break
        case 'theme-color-default':
          document.body.classList.add('theme-color-default')
          document.body.classList.remove('theme-color-blue')
          document.body.classList.remove('theme-color-gray')
          document.body.classList.remove('theme-color-red')
          document.body.classList.remove('theme-color-yellow')
          document.body.classList.remove('theme-color-pink')
          elem.setAttribute('style', '--bs-info:#079aa2;')
          break
      }
      const event = new CustomEvent('ColorChange', { detail: { detail1: primaryColor.trim(), detail2: InfoColor.trim() } })
      document.dispatchEvent(event)
    },
    themeMode () {
      const themecolorMode = sessionStorage.getItem('theme-mode')
      const themeprimarycolorMode = sessionStorage.getItem('themeprimary-mode')
      const themechartcolorMode = sessionStorage.getItem('colorcustomchart-mode')
      if (themecolorMode !== null && themeprimarycolorMode !== null && themechartcolorMode !== null && themecolorMode !== undefined && themeprimarycolorMode !== undefined && themechartcolorMode !== undefined) {
        this.onThemeMode(themecolorMode, themeprimarycolorMode, themechartcolorMode)
        this.themecolormodeChange({ p1: themecolorMode, p2: themeprimarycolorMode, p3: themechartcolorMode })
      } else {
        this.onThemeMode(this.stateThemeColor, this.statePrimaryColor, this.stateInfoColor)
        this.themecolormodeChange({ p1: this.stateThemeColor, p2: this.statePrimaryColor, p3: this.stateInfoColor })
      }
    },
    onChangeDir (value) {
      const elem = document.querySelector('html')
      switch (value) {
        case 'ltr':
          elem.setAttribute('dir', 'ltr')
          break
        case 'rtl':
          elem.setAttribute('dir', 'rtl')
          break
      }
    },
    rtlmode () {
      const dirMode = sessionStorage.getItem('dir-mode')
      if (dirMode !== null) {
        this.onChangeDir(dirMode)
        this.schemedirmodeChange(dirMode)
      } else {
        this.onChangeDir(this.stateschemedir)
        this.schemedirmodeChange(this.stateschemedir)
      }
    }
  }
}
</script>

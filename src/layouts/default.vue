<template>
<!-- loader Start -->
    <div id="loading">
      <loader />
    </div>
    <!-- loader END -->
    <Sidebar :minisidebar="sidebarmini" @makeminisidebar="onsidebarmini"/>
    <main class="main-content">
      <div class="position-relative">
        <!--Nav Start-->
        <HeaderStyle1 :fullsidebar="sidebarmini" @makefullsidebar="onfullsidebar"/>
        <SubHeader :statesubNavbarStyle="stateNavbarStyle"/>
        <!--Nav End-->
      </div>
      <div class="conatiner-fluid content-inner mt-n5 py-0">
       <router-view/>
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
    <a class="btn btn-fixed-end btn-warning btn-icon btn-setting" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" role="button" aria-controls="offcanvasExample" @click="mobileOffcanvas">
      <svg width="24" viewBox="0 0 24 24" class="animated-rotate" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8064 7.62361L20.184 6.54352C19.6574 5.6296 18.4905 5.31432 17.5753 5.83872V5.83872C17.1397 6.09534 16.6198 6.16815 16.1305 6.04109C15.6411 5.91402 15.2224 5.59752 14.9666 5.16137C14.8021 4.88415 14.7137 4.56839 14.7103 4.24604V4.24604C14.7251 3.72922 14.5302 3.2284 14.1698 2.85767C13.8094 2.48694 13.3143 2.27786 12.7973 2.27808H11.5433C11.0367 2.27807 10.5511 2.47991 10.1938 2.83895C9.83644 3.19798 9.63693 3.68459 9.63937 4.19112V4.19112C9.62435 5.23693 8.77224 6.07681 7.72632 6.0767C7.40397 6.07336 7.08821 5.98494 6.81099 5.82041V5.82041C5.89582 5.29601 4.72887 5.61129 4.20229 6.52522L3.5341 7.62361C3.00817 8.53639 3.31916 9.70261 4.22975 10.2323V10.2323C4.82166 10.574 5.18629 11.2056 5.18629 11.8891C5.18629 12.5725 4.82166 13.2041 4.22975 13.5458V13.5458C3.32031 14.0719 3.00898 15.2353 3.5341 16.1454V16.1454L4.16568 17.2346C4.4124 17.6798 4.82636 18.0083 5.31595 18.1474C5.80554 18.2866 6.3304 18.2249 6.77438 17.976V17.976C7.21084 17.7213 7.73094 17.6516 8.2191 17.7822C8.70725 17.9128 9.12299 18.233 9.37392 18.6717C9.53845 18.9489 9.62686 19.2646 9.63021 19.587V19.587C9.63021 20.6435 10.4867 21.5 11.5433 21.5H12.7973C13.8502 21.5001 14.7053 20.6491 14.7103 19.5962V19.5962C14.7079 19.088 14.9086 18.6 15.2679 18.2407C15.6272 17.8814 16.1152 17.6807 16.6233 17.6831C16.9449 17.6917 17.2594 17.7798 17.5387 17.9394V17.9394C18.4515 18.4653 19.6177 18.1544 20.1474 17.2438V17.2438L20.8064 16.1454C21.0615 15.7075 21.1315 15.186 21.001 14.6964C20.8704 14.2067 20.55 13.7894 20.1108 13.5367V13.5367C19.6715 13.284 19.3511 12.8666 19.2206 12.3769C19.09 11.8873 19.16 11.3658 19.4151 10.928C19.581 10.6383 19.8211 10.3982 20.1108 10.2323V10.2323C21.0159 9.70289 21.3262 8.54349 20.8064 7.63277V7.63277V7.62361Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <circle cx="12.1747" cy="11.8891" r="2.63616" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>
      </svg>
    </a>
    <SettingOffcanvas :showoffcanvas='onshowoffcanvas' @closeoffcanvas="onCloseOffcanvas" />
    <!-- Wrapper End-->
</template>
<script>
import Footer from '@/components/custom/partials/Footer/Footer'
import Sidebar from '@/components/custom/partials/Sidebars/Sidebar'
import HeaderStyle1 from '@/components/custom/partials/Header/HeaderStyle1'
import SubHeader from '@/components/custom/partials/Header/SubHeader'
import SettingOffcanvas from '@/components/custom/partials/components/SettingOffcanvas'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'default',
  components: {
    Footer,
    Sidebar,
    HeaderStyle1,
    SubHeader,
    SettingOffcanvas
  },
  data () {
    return {
      sidebarmini: false,
      onshowoffcanvas: false,
      direction: ''
    }
  },
  mounted () {
    this.rtlmode()
    this.colorMode()
    this.themeMode()
  },
  computed: {
    ...mapGetters({
      stateNavbarStyle: 'subnavbarstyle',
      stateScheme: 'scheme',
      stateschemedir: 'schemeDir',
      stateThemeColor: 'themeColor',
      statePrimaryColor: 'themePrimaryColor',
      stateInfoColor: 'themeinfoColor'
    })
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
    onsidebarmini (e) {
      this.sidebarmini = e
    },
    onfullsidebar (e) {
      this.sidebarmini = e
    },
    mobileOffcanvas () {
      if (this.onshowoffcanvas === true) {
        this.onshowoffcanvas = false
      }
      this.onshowoffcanvas = !this.onshowoffcanvas
    },
    onCloseOffcanvas (e) {
      this.onshowoffcanvas = e
    },
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

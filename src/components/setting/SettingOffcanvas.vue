<template>
  <div class="btn-download">
    <a class="btn btn-success py-2 px-3 d-flex gap-2" href="https://iqonic.design/product/admin-templates/hope-ui-open-source-vue-js-admin-template/" target="_blank">
      <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.4" d="M17.554 7.29614C20.005 7.29614 22 9.35594 22 11.8876V16.9199C22 19.4453 20.01 21.5 17.564 21.5L6.448 21.5C3.996 21.5 2 19.4412 2 16.9096V11.8773C2 9.35181 3.991 7.29614 6.438 7.29614H7.378L17.554 7.29614Z" fill="currentColor"></path>
        <path d="M12.5464 16.0374L15.4554 13.0695C15.7554 12.7627 15.7554 12.2691 15.4534 11.9634C15.1514 11.6587 14.6644 11.6597 14.3644 11.9654L12.7714 13.5905L12.7714 3.2821C12.7714 2.85042 12.4264 2.5 12.0004 2.5C11.5754 2.5 11.2314 2.85042 11.2314 3.2821L11.2314 13.5905L9.63742 11.9654C9.33742 11.6597 8.85043 11.6587 8.54843 11.9634C8.39743 12.1168 8.32142 12.3168 8.32142 12.518C8.32142 12.717 8.39743 12.9171 8.54643 13.0695L11.4554 16.0374C11.6004 16.1847 11.7964 16.268 12.0004 16.268C12.2054 16.268 12.4014 16.1847 12.5464 16.0374Z" fill="currentColor"></path>
      </svg>
    </a>
  </div>
  <!-- Setting offcanvas start here -->
  <b-offcanvas v-model="show" :backdrop="true" title="Live Customizer" :placement="themeSchemeDirection !== 'ltr' ? 'start' : 'end'" class="live-customizer" id="live-customizer" :body-scrolling="true">
    <div class="row">
      <div class="col-lg-12">
        <div>
          <!-- Theme start here -->

          <div>
            <theme-scheme />
          </div>

          <!-- Theme end here -->

          <hr class="hr-horizontal" />
          <!-- Menu color start here -->
          <menu-color v-if="isShowSetting('isSidebar')" />
          <!-- Menu color end here -->

          <hr class="hr-horizontal" />

          <!-- Menu Style start here -->
          <menu-style v-if="isShowSetting('isSidebar')" />
          <!-- Menu Style end here -->

          <hr class="hr-horizontal" />

          <!-- Active Menu Style start here -->
          <menu-active-style v-if="isShowSetting('isSidebar')" />
          <!-- Active Menu Style end here -->

          <hr class="hr-horizontal" />

          <!-- Navbar style start here -->
          <navbar-style v-if="isShowSetting('isNavbar')" />
          <!-- Navbar style end here -->
        </div>
      </div>
    </div>
  </b-offcanvas>
  <a class="btn btn-fixed-end btn-warning btn-icon btn-setting" id="settingbutton" role="button" @click="open">
    <svg width="24" viewBox="0 0 24 24" class="animated-rotate" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8064 7.62361L20.184 6.54352C19.6574 5.6296 18.4905 5.31432 17.5753 5.83872V5.83872C17.1397 6.09534 16.6198 6.16815 16.1305 6.04109C15.6411 5.91402 15.2224 5.59752 14.9666 5.16137C14.8021 4.88415 14.7137 4.56839 14.7103 4.24604V4.24604C14.7251 3.72922 14.5302 3.2284 14.1698 2.85767C13.8094 2.48694 13.3143 2.27786 12.7973 2.27808H11.5433C11.0367 2.27807 10.5511 2.47991 10.1938 2.83895C9.83644 3.19798 9.63693 3.68459 9.63937 4.19112V4.19112C9.62435 5.23693 8.77224 6.07681 7.72632 6.0767C7.40397 6.07336 7.08821 5.98494 6.81099 5.82041V5.82041C5.89582 5.29601 4.72887 5.61129 4.20229 6.52522L3.5341 7.62361C3.00817 8.53639 3.31916 9.70261 4.22975 10.2323V10.2323C4.82166 10.574 5.18629 11.2056 5.18629 11.8891C5.18629 12.5725 4.82166 13.2041 4.22975 13.5458V13.5458C3.32031 14.0719 3.00898 15.2353 3.5341 16.1454V16.1454L4.16568 17.2346C4.4124 17.6798 4.82636 18.0083 5.31595 18.1474C5.80554 18.2866 6.3304 18.2249 6.77438 17.976V17.976C7.21084 17.7213 7.73094 17.6516 8.2191 17.7822C8.70725 17.9128 9.12299 18.233 9.37392 18.6717C9.53845 18.9489 9.62686 19.2646 9.63021 19.587V19.587C9.63021 20.6435 10.4867 21.5 11.5433 21.5H12.7973C13.8502 21.5001 14.7053 20.6491 14.7103 19.5962V19.5962C14.7079 19.088 14.9086 18.6 15.2679 18.2407C15.6272 17.8814 16.1152 17.6807 16.6233 17.6831C16.9449 17.6917 17.2594 17.7798 17.5387 17.9394V17.9394C18.4515 18.4653 19.6177 18.1544 20.1474 17.2438V17.2438L20.8064 16.1454C21.0615 15.7075 21.1315 15.186 21.001 14.6964C20.8704 14.2067 20.55 13.7894 20.1108 13.5367V13.5367C19.6715 13.284 19.3511 12.8666 19.2206 12.3769C19.09 11.8873 19.16 11.3658 19.4151 10.928C19.581 10.6383 19.8211 10.3982 20.1108 10.2323V10.2323C21.0159 9.70289 21.3262 8.54349 20.8064 7.63277V7.63277V7.62361Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      <circle cx="12.1747" cy="11.8891" r="2.63616" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>
    </svg>
  </a>
  <!-- Settings sidebar end here -->
</template>
<script>
// Vue / Vuex Functions
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

// Style Components
import ThemeScheme from './sections/ThemeScheme.vue'
import MenuColor from './sections/MenuColor.vue'
import MenuStyle from './sections/MenuStyle.vue'
import MenuActiveStyle from './sections/MenuActiveStyle.vue'
import NavbarStyle from './sections/NavbarStyle.vue'
// Utilities
import { copyToClipboard } from '@/utilities/dom'
export default {
  name: 'SettingOffcanvas',
  components: {
    // Style Components
    ThemeScheme,
    MenuColor,
    MenuStyle,
    MenuActiveStyle,
    NavbarStyle
  },
  setup() {
    // Store objects
    const store = useStore()
    const route = useRoute()
    const themeSchemeDirection = computed(() => store.getters['setting/theme_scheme_direction'])

    // Variables
    const show = ref(false)

    // Functions
    const close = () => {
      show.value = false
    }
    const open = () => {
      show.value = true
    }
    const onClick = (e) => {
      if (show.value) {
        if (e.target.closest('.live-customizer') == null && e.target.closest('#settingbutton') == null) {
          show.value = false
        }
      }
    }
    const copyConfig = () => {
      copyToClipboard(store.state.setting)
    }
    const defaultSetting = () => {
      store.dispatch('setting/reset_state')
    }
    const isShowSetting = (name) => {
      return !route.meta[name]
    }

    // Life cycle hooks
    watch(themeSchemeDirection, () => {
      show.value = false
    })
    onMounted(() => {
      document.body.addEventListener('click', onClick)
    })
    onUnmounted(() => {
      document.body.removeEventListener('click', onClick)
    })

    // Return functions & variables
    return {
      themeSchemeDirection,
      show,
      isShowSetting,
      copyConfig,
      defaultSetting,
      close,
      open
    }
  }
}
</script>
<style>
.live-customizer .offcanvas-title {
  font-size: calc(1.269rem + 0.228vw);
  flex: 1;
}
@media (min-width: 1200px) {
  .live-customizer .offcanvas-title {
    font-size: 1.44rem;
  }
}
</style>

<template>
  <span class="uisheet screen-darken"></span>
  <div id="main" class="header" :style="`background: url(${require('@/assets/images/dashboard/top-image.jpg')}); background-size: cover; background-repeat: no-repeat; height: 100vh;position: relative;`">
    <div class="main-img">
      <b-container>
        <svg width="150" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="-0.423828" y="34.5762" width="50" height="7.14286" rx="3.57143" transform="rotate(-45 -0.423828 34.5762)" fill="white" />
          <rect x="14.7295" y="49.7266" width="50" height="7.14286" rx="3.57143" transform="rotate(-45 14.7295 49.7266)" fill="white" />
          <rect x="19.7432" y="29.4902" width="28.5714" height="7.14286" rx="3.57143" transform="rotate(45 19.7432 29.4902)" fill="white" />
          <rect x="19.7783" y="-0.779297" width="50" height="7.14286" rx="3.57143" transform="rotate(45 19.7783 -0.779297)" fill="white" />
        </svg>
        <h1 class="my-4">
          <span>{{ appName }} - Design System</span>
        </h1>
        <h4 class="text-white mb-5">Production ready FREE Open Source <b>Dashboard UI Kit</b> and <b>Design System</b>.</h4>
        <div class="d-flex justify-content-center align-items-center">
          <div>
            <router-link :to="{ name: 'default.dashboard' }" target="_blank" class="btn btn-light bg-white">
              <svg width="22" height="22" class="me-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Dashboard Demo</router-link
            >
          </div>
          <div class="ms-3">
            <a class="bg-white btn btn-light d-flex" target="_blank" href="https://github.com/iqonicdesignofficial/hope-ui-vue-dashboard"><img class="avatar-23" src="@/assets/images/brands/23.png" style="width: 24px; height: 24px" /><span class="mx-2 text-danger fw-bold">STAR US</span> <span>ON GITHUB</span></a>
          </div>
        </div>
      </b-container>
    </div>
    <b-container>
      <nav class="nav navbar navbar-expand-lg navbar-light top-1 rounded">
        <b-container fluid>
          <a class="navbar-brand mx-2" href="#">
            <svg width="30" class="text-primary" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor"></rect>
              <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor"></rect>
              <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor"></rect>
              <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor"></rect>
            </svg>
            <h5 class="logo-title">{{ appName }}</h5>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-2" aria-controls="navbar-2" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbar-2">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-start">
              <li class="nav-item me-3">
                <a class="nav-link" aria-current="page" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/" target="_blank">Documentation</a>
              </li>
              <li class="nav-item me-3">
                <a class="nav-link" aria-current="page" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Changelog" target="_blank">Change Log</a>
              </li>
              <li class="nav-item me-3">
                <a class="btn btn-primary d-flex align-items-center gap-2" aria-current="page" href="https://hopeui.iqonic.design/pro/vue/" target="_blank">
                  <icon-component type="dual-tone" icon-name="location-arrow" :size="20"></icon-component>
                  Go Pro
                </a>
              </li>
              <li class="nav-item">
                <a class="btn btn-success d-flex align-items-center gap-2" aria-current="page" href="https://iqonic.design/product/admin-templates/hope-ui-open-source-vue-js-admin-template/" target="_blank">
                  <svg class="icon-22" width="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M5.91064 20.5886C5.91064 19.7486 6.59064 19.0686 7.43064 19.0686C8.26064 19.0686 8.94064 19.7486 8.94064 20.5886C8.94064 21.4186 8.26064 22.0986 7.43064 22.0986C6.59064 22.0986 5.91064 21.4186 5.91064 20.5886ZM17.1606 20.5886C17.1606 19.7486 17.8406 19.0686 18.6806 19.0686C19.5106 19.0686 20.1906 19.7486 20.1906 20.5886C20.1906 21.4186 19.5106 22.0986 18.6806 22.0986C17.8406 22.0986 17.1606 21.4186 17.1606 20.5886Z" fill="currentColor"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1907 6.34909C20.8007 6.34909 21.2007 6.55909 21.6007 7.01909C22.0007 7.47909 22.0707 8.13909 21.9807 8.73809L21.0307 15.2981C20.8507 16.5591 19.7707 17.4881 18.5007 17.4881H7.59074C6.26074 17.4881 5.16074 16.4681 5.05074 15.1491L4.13074 4.24809L2.62074 3.98809C2.22074 3.91809 1.94074 3.52809 2.01074 3.12809C2.08074 2.71809 2.47074 2.44809 2.88074 2.50809L5.26574 2.86809C5.60574 2.92909 5.85574 3.20809 5.88574 3.54809L6.07574 5.78809C6.10574 6.10909 6.36574 6.34909 6.68574 6.34909H20.1907ZM14.1307 11.5481H16.9007C17.3207 11.5481 17.6507 11.2081 17.6507 10.7981C17.6507 10.3781 17.3207 10.0481 16.9007 10.0481H14.1307C13.7107 10.0481 13.3807 10.3781 13.3807 10.7981C13.3807 11.2081 13.7107 11.5481 14.1307 11.5481Z" fill="currentColor"></path>
                  </svg>
                  Download
                </a>
              </li>
            </ul>
          </div>
        </b-container>
      </nav>
    </b-container>
  </div>
  <div class="sidebar-body pt-0 mb-5 pb-5">
    <div class="body-class-1 container">
      <aside :class="show ? 'mobile-offcanvas bd-aside card iq-document-card sticky-xl-top text-muted align-self-start mb-5 mt-n5 show data-scrollbar' : ' data-scrollbar mobile-offcanvas bd-aside card iq-document-card sticky-xl-top text-muted align-self-start mb-5 mt-n5'" id="left-side-bar">
        <div class="offcanvas-header p-0">
          <button @click="show = false" class="btn-close float-end"></button>
        </div>
        <h2 class="h6 pb-2 border-bottom">On this page</h2>
        <nav className="small " id="elements-section">
          <ul class="list-unstyled mb-0">
            <li class="mt-2">
              <b-button v-b-toggle.components-collapse variant=" d-inline-flex align-items-center">
                <i class="right-icon me-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </i>
                Components
              </b-button>
              <b-collapse tag="ul" id="components-collapse" class="list-unstyled ps-3">
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#accordion"> accordion </a>
                </li>
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#alerts"> alert </a>
                </li>
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#badge"> badge </a>
                </li>
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#breadcrumb"> breadcrumb </a>
                </li>
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#buttons"> button </a>
                </li>
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#button-group"> button-group </a>
                </li>
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#Calendar"> Calendar </a>
                </li>
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#dropdowns"> dropdown </a>
                </li>
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#card"> card </a>
                </li>
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#carousel"> carousel </a>
                </li>
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#collapse"> collapse </a>
                </li>
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#list-group"> list-group </a>
                </li>
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#modal"> modal </a>
                </li>
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#navs"> navs </a>
                </li>
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#navbar"> navbar </a>
                </li>
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#off-canvas"> offcanvas </a>
                </li>
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#pagination"> pagination </a>
                </li>
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#popovers"> popovers </a>
                </li>
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#progress"> progress </a>
                </li>
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#scrollspy"> scrollspy </a>
                </li>
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#spinners"> spinner </a>
                </li>
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#toasts"> toast </a>
                </li>
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#tooltips"> tooltips </a>
                </li>
              </b-collapse>
            </li>
            <li class="my-2">
              <b-button v-b-toggle.forms-collapse variant=" d-inline-flex align-items-center">
                <i class="right-icon me-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </i>
                Forms
              </b-button>
              <b-collapse class="list-unstyled ps-3" tag="ul" id="forms-collapse">
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#formOverview"> overview </a>
                </li>
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#formDisabled"> disable </a>
                </li>
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#formSizing"> sizing </a>
                </li>
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#formInputGroup"> input-group </a>
                </li>
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#formAlertnateInput"> alternate </a>
                </li>
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#formFloatingLabels"> floating-label </a>
                </li>
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#formAlertnateFloatLabels"> alternate-label </a>
                </li>
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#formToggleButton"> toggle </a>
                </li>
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#formValidation"> validation </a>
                </li>
              </b-collapse>
            </li>
            <li class="mb-2">
              <b-button v-b-toggle.contents-collapse variant=" d-inline-flex align-items-center">
                <i class="right-icon me-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </i>
                Contents
              </b-button>
              <b-collapse tag="ul" class="list-unstyled ps-3" id="contents-collapse">
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#typography"> typography </a>
                </li>
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#images"> image </a>
                </li>
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#tables"> table </a>
                </li>
                <li>
                  <a class="nav-link d-inline-flex align-items-center rounded" href="#figures"> figure </a>
                </li>
              </b-collapse>
            </li>
          </ul>
        </nav>
      </aside>
      <div class="bd-cheatsheet container-fluid bg-trasprent mt-n5">
        <section id="components">
          <div class="iq-side-content sticky-xl-top">
            <b-card>
              <h4 class="fw-bold">Components</h4>
            </b-card>
          </div>
          <accordion-section></accordion-section>
          <alerts-section></alerts-section>
          <badge-section></badge-section>
          <breadcrumb-section></breadcrumb-section>
          <button-section></button-section>
          <buttonGroup-section></buttonGroup-section>
          <calendar-section></calendar-section>
          <card-section></card-section>
          <carousel-section></carousel-section>
          <dropdown-section></dropdown-section>
          <listGroup-section></listGroup-section>
          <modal-section></modal-section>
          <navs-section></navs-section>
          <navbar-section></navbar-section>
          <offCanvas-section></offCanvas-section>
          <pagination-section></pagination-section>
          <popovers-section></popovers-section>
          <progress-section></progress-section>
          <!-- <ribbon-section></ribbon-section> -->
          <scrollspy-section></scrollspy-section>
          <spinners-section></spinners-section>
          <toasts-section></toasts-section>
          <tooltips-section></tooltips-section>
        </section>

        <section id="forms">
          <div class="iq-side-content sticky-xl-top">
            <b-card>
              <h4 class="fw-bold">Forms</h4>
            </b-card>
          </div>
          <formOverview-section></formOverview-section>
          <formDisabled-section></formDisabled-section>
          <formSizing-section></formSizing-section>
          <formInputGroup-section></formInputGroup-section>
          <formAlertnateInput-section></formAlertnateInput-section>
          <formFloatingLabels-section></formFloatingLabels-section>
          <formAlertnateFloatLabels-section></formAlertnateFloatLabels-section>
          <formToggleButton-section></formToggleButton-section>
          <formValidation-section></formValidation-section>
        </section>

        <section id="content">
          <div class="iq-side-content sticky-xl-top">
            <div class="card">
              <div class="card-body">
                <h4 class="fw-bold">Contents</h4>
              </div>
            </div>
          </div>
          <typography-section></typography-section>
          <images-section></images-section>
          <tables-section></tables-section>
          <figures-section></figures-section>
        </section>
      </div>
    </div>
  </div>
  <div id="back-to-top" style="display: none">
    <a class="btn btn-primary btn-xs p-0 position-fixed top" id="top" href="#main">
      <svg width="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 15.5L12 8.5L19 15.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </a>
  </div>
  <div class="middle" style="display: none">
    <button data-trigger="left-side-bar" @click="show = true" class="d-xl-none btn btn-xs mid-menu" type="button">
      <i class="icon">
        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.75 11.7256L4.75 11.7256" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M13.7002 5.70124L19.7502 11.7252L13.7002 17.7502" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </i>
    </button>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import AccordionSection from '@/views/design-system/sections/accordion/AccordionSection.vue'
import AlertsSection from '@/views/design-system/sections/alert/AlertsSection'
import BadgeSection from '@/views/design-system/sections/badge/BadgeSection.vue'
import BreadcrumbSection from '@/views/design-system/sections/breadcrumb/BreadcrumbSection.vue'
import ButtonSection from '@/views/design-system/sections/button/ButtonSection.vue'
import ButtonGroupSection from '@/views/design-system/sections/buttongroup/ButtonGroupSection.vue'
import DropdownSection from '@/views/design-system/sections/dropdown/DropdownSection.vue'
import CardSection from '@/views/design-system/sections/card/CardSection.vue'
import ListGroupSection from '@/views/design-system/sections/listgroup/ListGroupSection.vue'
import PaginationSection from '@/views/design-system/sections/pagination/PaginationSection.vue'
import CarouselSection from '@/views/design-system/sections/carousel/CarouselSection.vue'
import ModalSection from '@/views/design-system/sections/modal/ModalSection.vue'
import NavsSection from '@/views/design-system/sections/navs/NavsSection.vue'
import NavbarSection from '@/views/design-system/sections/navbar/NavbarSection.vue'
import OffCanvasSection from '@/views/design-system/sections/offcanvas/OffCanvasSection.vue'
import PopoversSection from '@/views/design-system/sections/popovers/PopoversSection.vue'
import ScrollspySection from '@/views/design-system/sections/scrollspy/ScrollspySection.vue'
import TooltipsSection from '@/views/design-system/sections/tooltips/TooltipsSection.vue'
import ProgressSection from '@/views/design-system/sections/progress/ProgressSection.vue'
import SpinnersSection from '@/views/design-system/sections/spinners/SpinnersSection.vue'
import ToastsSection from '@/views/design-system/sections/toasts/ToastsSection.vue'
import FiguresSection from '@/views/design-system/sections/figures/FiguresSection.vue'
import TablesSection from '@/views/design-system/sections/tables/TablesSection.vue'
import ImagesSection from '@/views/design-system/sections/images/ImagesSection.vue'
import TypographySection from '@/views/design-system/sections/typography/TypographySection.vue'

// form
import FormOverviewSection from '@/views/design-system/sections/formoverview/FormOverviewSection.vue'
import FormDisabledSection from '@/views/design-system/sections/formdisabled/FormDisabledSection.vue'
import FormSizingSection from '@/views/design-system/sections/formsizing/FormSizingSection.vue'
import FormInputGroupSection from '@/views/design-system/sections/forminputgroup/FormInputGroupSection.vue'
import calendarSection from '@/views/design-system/sections/calendar/calendarSection.vue'
import FormAlertnateInputSection from '@/views/design-system/sections/formalertnateinput/FormAlertnateInputSection.vue'
import FormFloatingLabelsSection from '@/views/design-system/sections/formfloatinglabels/FormFloatingLabelsSection.vue'
import FormAlertnateFloatLabelsSection from '@/views/design-system/sections/formalertnatefloatlabels/FormAlertnateFloatLabelsSection.vue'
import FormToggleButtonSection from '@/views/design-system/sections/formtogglebutton/FormToggleButtonSection.vue'
import FormValidationSection from '@/views/design-system/sections/formvalidation/FormValidationSection.vue'

export default {
  components: {
    AccordionSection,
    AlertsSection,
    BadgeSection,
    BreadcrumbSection,
    ButtonSection,
    ButtonGroupSection,
    DropdownSection,
    CardSection,
    ListGroupSection,
    PaginationSection,
    CarouselSection,
    ModalSection,
    NavsSection,
    NavbarSection,
    OffCanvasSection,
    PopoversSection,
    ScrollspySection,

    TooltipsSection,
    ProgressSection,
    SpinnersSection,
    ToastsSection,
    FiguresSection,
    TablesSection,
    ImagesSection,
    TypographySection,
    FormOverviewSection,
    FormDisabledSection,
    FormSizingSection,
    FormInputGroupSection,
    calendarSection,
    FormAlertnateInputSection,
    FormFloatingLabelsSection,
    FormAlertnateFloatLabelsSection,
    FormToggleButtonSection,
    FormValidationSection
  },
  setup() {
    const store = useStore()
    const appName = computed(() => store.getters['setting/app_name'])
    const show = ref(false)
    return {
      appName,
      show
    }
  }
}
</script>

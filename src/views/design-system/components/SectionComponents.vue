<template>
  <b-card class="iq-document-card" no-body>
    <div class="d-flex justify-content-end">
      <ul class="nav nav-tabs nav-tunnel">
        <li class="nav-item" role="presentation">
          <tab-button :target="`#${targetpreview}`" class="nav-link d-flex align-items-center" :id="targetpreview" :active="true">
            <icon-component type="outlined" icon-name="eye-fish" :size="24" class="me-1"></icon-component>
            Preview
          </tab-button>
        </li>
        <li class="nav-item" role="presentation">
          <tab-button class="nav-link d-flex align-items-center" :id="targetcode" :target="`#${targetcode}`">
            <icon-component type="outlined" icon-name="document-code" :size="24" class="me-1"></icon-component>
            Code
          </tab-button>
        </li>
      </ul>
    </div>
    <div class="tab-content w-100" id="v-pills-tabContent">
      <tab-pane :id="targetpreview" :tab-for="`#${targetpreview}`" class="bd-heading-1">
        <component :is="previewComponent" />
        <!-- <formSizing-preview /> -->
      </tab-pane>
      <tab-pane :id="targetcode" :tab-for="`#${targetcode}`" class="bd-heading-1">
        <component :is="codeComponent" />
        <!-- <formSizing-code /> -->
      </tab-pane>
    </div>
  </b-card>
</template>
<script>
import AccordionCode from '../sections/accordion/AccordionCode.vue'
import AccordionPreview from '../sections/accordion/AccordionPreview'
import FormSizingPreview from '../sections/formsizing/FormSizingPreview.vue'
import FormSizingCode from '../sections/formsizing/FormSizingCode.vue'
import AlertsPreview from '../sections/alert/AlertsPreview.vue'
import AlertsCode from '../sections/alert/AlertsCode.vue'
import BadgePreview from '../sections/badge/BadgePreview'
import BadgeCode from '../sections/badge/BadgeCode.vue'
import BreadcrumbPreview from '../sections/breadcrumb/BreadcrumbPreview.vue'
import BreadcrumbCode from '../sections/breadcrumb/BreadcrumbCode.vue'
import ButtonPreview from '../sections/button/ButtonPreview.vue'
import ButtonCode from '../sections/button/ButtonCode.vue'
import ButtonGroupPreview from '../sections/buttongroup/ButtonGroupPreview.vue'
import ButtonGroupCode from '../sections/buttongroup/ButtonGroupCode.vue'
import CardPreview from '../sections/card/CardPreview.vue'
import CardCode from '../sections/card/CardCode.vue'
import CarouselCode from '../sections/carousel/CarouselCode.vue'
import CarouselPreview from '../sections/carousel/CarouselPreview'

import DropdownPreview from '../sections/dropdown/DropdownPreview.vue'
import DropdownCode from '../sections/dropdown/DropdownCode.vue'
import FiguresPreview from '../sections/figures/FiguresPreview.vue'
import FiguresCode from '../sections/figures/FiguresCode.vue'

// form
import FormAlertnateFloatLabelsPreview from '../sections/formalertnatefloatlabels/FormAlertnateFloatLabelsPreview.vue'
import FormAlertnateFloatLabelsCode from '../sections/formalertnatefloatlabels/FormAlertnateFloatLabelsCode.vue'
import FormAlertnateInputPreview from '../sections/formalertnateinput/FormAlertnateInputPreview.vue'
import FormAlertnateInputCode from '../sections/formalertnateinput/FormAlertnateInputCode.vue'
import FormDisabledPreview from '../sections/formdisabled/FormDisabledPreview.vue'
import FormDisabledCode from '../sections/formdisabled/FormDisabledCode.vue'
import CalendarPreview from '../sections/calendar/CalendarPreview.vue'
import CalendarCode from '../sections/calendar/CalendarCode.vue'
import FormFloatingLabelsPreview from '../sections/formfloatinglabels/FormFloatingLabelsPreview.vue'
import FormFloatingLabelsCode from '../sections/formfloatinglabels/FormFloatingLabelsCode.vue'
import FormInputGroupPreview from '../sections/forminputgroup/FormInputGroupPreview.vue'
import FormInputGroupCode from '../sections/forminputgroup/FormInputGroupCode.vue'
import FormOverviewPreview from '../sections/formoverview/FormOverviewPreview.vue'
import FormOverviewCode from '../sections/formoverview/FormOverviewCode.vue'
import FormToggleButtonPreview from '../sections/formtogglebutton/FormToggleButtonPreview.vue'
import FormToggleButtonCode from '../sections/formtogglebutton/FormToggleButtonCode.vue'
import FormValidationPreview from '../sections/formvalidation/FormValidationPreview.vue'
import FormValidationCode from '../sections/formvalidation/FormValidationCode.vue'

import ImagesPreview from '../sections/images/ImagesPreview.vue'
import ImagesCode from '../sections/images/ImagesCode.vue'
import ListGroupPreview from '../sections/listgroup/ListGroupPreview.vue'
import ListGroupCode from '../sections/listgroup/ListGroupCode.vue'
import ModalCode from '../sections/modal/ModalCode.vue'
import ModalPreview from '../sections/modal/ModalPreview.vue'
import NavbarPreview from '../sections/navbar/NavbarPreview.vue'
import NavbarCode from '../sections/navbar/NavbarCode.vue'
import NavsPreview from '../sections/navs/NavsPreview.vue'
import NavsCode from '../sections/navs/NavsCode.vue'
import OffCanvasCode from '../sections/offcanvas/OffCanvasCode.vue'
import OffCanvasPreview from '../sections/offcanvas/OffCanvasPreview'
import PaginationPreview from '../sections/pagination/PaginationPreview.vue'
import PaginationCode from '../sections/pagination/PaginationCode.vue'
import PopoversPreview from '../sections/popovers/PopoversPreview.vue'
import PopoversCode from '../sections/popovers/PopoversCode.vue'
import ProgressPreview from '../sections/progress/ProgressPreview.vue'
import ProgressCode from '../sections/progress/ProgressCode.vue'
import ScrollspyPreview from '../sections/scrollspy/ScrollspyPreview.vue'
import ScrollspyCode from '../sections/scrollspy/ScrollspyCode.vue'
import SpinnersPreview from '../sections/spinners/SpinnersPreview.vue'
import SpinnersCode from '../sections/spinners/SpinnersCode.vue'
import TablesPreview from '../sections/tables/TablesPreview.vue'
import TablesCode from '../sections/tables/TablesCode.vue'
import ToastsPreview from '../sections/toasts/ToastsPreview.vue'
import ToastsCode from '../sections/toasts/ToastsCode.vue'
import TooltipsCode from '../sections/tooltips/TooltipsCode.vue'
import TooltipsPreview from '../sections/tooltips/TooltipsPreview'
import TypographyPreview from '../sections/typography/TypographyPreview.vue'
import TypographyCode from '../sections/typography/TypographyCode.vue'

export default {
  components: {
    AccordionCode,
    AccordionPreview,
    AlertsPreview,
    AlertsCode,
    BadgePreview,
    BadgeCode,
    ButtonPreview,
    ButtonCode,
    BreadcrumbCode,
    BreadcrumbPreview,
    ButtonGroupPreview,
    ButtonGroupCode,
    FormSizingPreview,
    FormSizingCode,
    CardPreview,
    CardCode,
    CarouselCode,
    CarouselPreview,
    DropdownPreview,
    DropdownCode,
    FiguresPreview,
    FiguresCode,
    FormAlertnateFloatLabelsPreview,
    FormAlertnateFloatLabelsCode,
    FormAlertnateInputPreview,
    FormAlertnateInputCode,
    FormDisabledPreview,
    FormDisabledCode,
    CalendarPreview,
    CalendarCode,
    FormFloatingLabelsPreview,
    FormFloatingLabelsCode,
    FormInputGroupPreview,
    FormInputGroupCode,
    FormOverviewPreview,
    FormOverviewCode,
    FormToggleButtonPreview,
    FormToggleButtonCode,
    FormValidationPreview,
    FormValidationCode,
    ImagesPreview,
    ImagesCode,
    ListGroupPreview,
    ListGroupCode,
    ModalCode,
    ModalPreview,
    NavbarPreview,
    NavbarCode,
    NavsPreview,
    NavsCode,
    OffCanvasCode,
    OffCanvasPreview,
    PaginationPreview,
    PaginationCode,
    PopoversPreview,
    PopoversCode,
    ProgressPreview,
    ProgressCode,
    ScrollspyPreview,
    ScrollspyCode,
    SpinnersPreview,
    SpinnersCode,
    TablesPreview,
    TablesCode,
    ToastsPreview,
    ToastsCode,
    TooltipsCode,
    TooltipsPreview,
    TypographyPreview,
    TypographyCode
  },
  props: {
    targetpreview: { type: String, required: true },
    targetcode: { type: String, required: true },

    previewComponent: {
      type: String,
      required: true
    },
    codeComponent: {
      type: String,
      required: true
    }
  }
}
</script>

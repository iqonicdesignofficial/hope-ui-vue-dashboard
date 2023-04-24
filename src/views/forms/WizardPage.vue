<template>
  <b-row>
    <b-col sm="12">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>{{ 'sidebar.simple-wizard' }}</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <b-form id="form-wizard1" class="text-center mt-3">
            <ul id="top-tab-list" class="p-0 row list-inline">
              <li :class="`${currentindex == 1 ? 'active' : ''} ${currentindex > 1 ? 'done active' : ''} col-lg-3 col-md-6 mb-2 text-start `" id="account">
                <a href="javascript:void(0);">
                  <div class="iq-icon me-3">
                    <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <span>Account</span>
                </a>
              </li>
              <li :class="`${currentindex == 2 ? 'active' : ''} ${currentindex > 2 ? 'done active' : ''} col-lg-3 col-md-6 mb-2 text-start `" id="personal">
                <a href="javascript:void(0);">
                  <div class="iq-icon me-3">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <span class="dark-wizard">Personal</span>
                </a>
              </li>
              <li :class="`${currentindex == 3 ? 'active' : ''} ${currentindex > 3 ? 'done active' : ''} col-lg-3 col-md-6 mb-2 text-start `" id="payment">
                <a href="javascript:void(0);">
                  <div class="iq-icon me-3">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <span class="dark-wizard">Image</span>
                </a>
              </li>
              <li :class="`${currentindex == 4 ? 'active' : ''} ${currentindex > 4 ? 'done' : ''} col-lg-3 col-md-6 mb-2 text-start `" id="confirm">
                <a href="javascript:void(0);">
                  <div class="iq-icon me-3">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span class="dark-wizard">Finish</span>
                </a>
              </li>
            </ul>
            <div :class="`${currentindex == 1 ? 'show' : 'd-none'}`">
              <account-component @onClick="changeTab"></account-component>
            </div>
            <div :class="`${currentindex == 2 ? 'show' : 'd-none'}`">
              <personal-component @onClick="changeTab"></personal-component>
            </div>
            <div id="payment" :class="`${currentindex == 3 ? 'show' : 'd-none'}`">
              <image-component @onClick="changeTab"></image-component>
            </div>
            <div id="confirm" :class="`${currentindex == 4 ? 'show' : 'd-none'}`">
              <finish-component @onClick="changeTab"></finish-component>
            </div>
          </b-form>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
import AccountComponent from '@/components/widgets/wizard/AccountComponent.vue'
import PersonalComponent from '@/components/widgets/wizard/PersonalComponent.vue'
import ImageComponent from '@/components/widgets/wizard/ImageComponent.vue'
import FinishComponent from '@/components/widgets/wizard/FinishComponent.vue'
export default {
  name: 'WizardPage',
  components: {
    AccountComponent,
    PersonalComponent,
    ImageComponent,
    FinishComponent
  },
  data() {
    return {
      currentindex: 1
    }
  },
  methods: {
    changeTab(val) {
      this.currentindex = val
    }
  }
}
</script>

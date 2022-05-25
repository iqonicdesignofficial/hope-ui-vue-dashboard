<template>
  <page-header title="Calender">
    <b-button variant="primary">Back</b-button>
    <b-button variant="primary ms-2" @click="show = true">
      <icon-component type="solid" icon-name="plus" :size="20"></icon-component>
      <span class="ms-1">New Event</span>
    </b-button>
  </page-header>
  <b-card>
    <full-calender :events="events" @onDateSelect="dateSelected" @onEventSelect="eventSelected"></full-calender>
  </b-card>
  <b-modal v-model="show" title="Add a events">
    <div class="d-flex flex-column align-items-start">
      <div class="nav me-3 form-group btn-group" id="v-pills-tab" role="tablist">
        <tab-button class="btn btn-primary" target="#event" id="event" :active="true">Event</tab-button>
        <tab-button class="btn btn-primary" target="#task" id="task">Task</tab-button>
        <tab-button class="btn btn-primary" target="#reminder" id="reminder">Reminder</tab-button>
      </div>
      <div class="tab-content w-100" id="v-pills-tabContent">
        <tab-pane id="event" tab-for="#event">
          <b-row>
            <b-col cols="12">
              <b-row class="g-3 align-items-center form-group">
                <b-col cols="2">
                  <label class="col-form-label">Title</label>
                </b-col>
                <b-col cols="10">
                  <input type="text" class="form-control" />
                </b-col>
              </b-row>
              <b-row class="g-3 align-items-center form-group">
                <b-col cols="2">
                  <label class="col-form-label">
                    <icon-component type="outlined" icon-name="calendar" :size="24"></icon-component>
                  </label>
                </b-col>
                <b-col cols="10">
                  <flat-picker v-model="date" class="form-control" :config="dateOption" placeholder="24 Jan 2022 to 23 Feb 2022"></flat-picker>
                </b-col>
              </b-row>
              <b-row class="g-3 align-items-center form-group">
                <b-col cols="2">
                  <label class="col-form-label">
                    <icon-component type="outlined" icon-name="clock-circle" :size="24"></icon-component>
                  </label>
                </b-col>
                <b-col cols="10" class="d-flex align-items-center justify-content-center">
                  <flat-picker v-model="startTime" class="form-control" :config="timeOption"></flat-picker>
                  <span class="mx-2">To</span>
                  <flat-picker v-model="endTime" class="form-control" :config="timeOption"></flat-picker>
                </b-col>
              </b-row>
              <b-row class="g-3 align-items-center form-group">
                <b-col cols="2">
                  <label class="col-form-label">
                    <icon-component type="outlined" icon-name="users" :size="24"></icon-component>
                  </label>
                </b-col>
                <b-col cols="10">
                  <select name="guest" class="form-select" id="guest">
                    <option value="">Select Guest</option>
                    <option value="anni">Anni</option>
                    <option value="bini">Bini</option>
                    <option value="chimpi">Chimpi</option>
                  </select>
                </b-col>
              </b-row>
              <b-row class="g-3 align-items-center form-group">
                <b-col cols="2">
                  <label class="col-form-label">
                    <icon-component type="outlined" icon-name="pencil-alt" :size="24"></icon-component>
                  </label>
                </b-col>
                <b-col cols="10">
                  <textarea name="description" id="description" class="form-control" rows="3" placeholder="Description" spellcheck="false"></textarea>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </tab-pane>
        <tab-pane id="task" tab-for="#task">
          <b-row>
            <b-col md="12">
              <b-row class="g-3 align-items-center form-group">
                <b-col cols="2">
                  <label class="col-form-label">Title</label>
                </b-col>
                <b-col cols="10">
                  <input type="text" class="form-control" />
                </b-col>
              </b-row>
              <b-row class="g-3 align-items-center form-group">
                <b-col cols="2">
                  <label class="col-form-label">
                    <icon-component type="outlined" icon-name="calendar" :size="24"></icon-component>
                  </label>
                </b-col>
                <b-col cols="10">
                  <flat-picker v-model="date" class="form-control" :config="dateOption"></flat-picker>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </tab-pane>
        <tab-pane id="reminder" tab-for="#reminder">
          <b-row>
            <b-col md="12">
              <b-row class="g-3 align-items-center form-group">
                <b-col cols="2">
                  <label class="col-form-label">Title</label>
                </b-col>
                <b-col cols="10">
                  <input type="text" class="form-control" />
                </b-col>
              </b-row>
              <div class="col-md-12">
                <b-row>
                  <b-col md="6">
                    <div class="row g-3 align-items-center form-group">
                      <b-col cols="2">
                        <label class="col-form-label">
                          <icon-component type="outlined" icon-name="calendar" :size="24"></icon-component>
                        </label>
                      </b-col>
                      <b-col cols="10">
                        <flat-picker v-model="date" class="form-control" :config="dateOption"></flat-picker>
                      </b-col>
                    </div>
                  </b-col>
                  <div class="col-md-6">
                    <b-row class="g-3 align-items-center form-group">
                      <b-col cols="2">
                        <icon-component type="outlined" icon-name="bell" :size="24"></icon-component>
                      </b-col>
                      <b-col cols="10">
                        <select class="form-select">
                          <option>Repeat</option>
                          <option>Every 4 Day</option>
                          <option>Every 7 Day</option>
                          <option>Every 10 Day</option>
                        </select>
                      </b-col>
                    </b-row>
                  </div>
                </b-row>
              </div>
            </b-col>
          </b-row>
        </tab-pane>
      </div>
    </div>
  </b-modal>
</template>

<script setup>
// Library
import { ref } from 'vue'
import moment from 'moment'

// Library Components
import FlatPicker from 'vue-flatpickr-component'

// Components
import PageHeader from '@/components/custom/header/PageHeader.vue'
import FullCalender from '@/components/custom/calender/FullCalender.vue'

// Variables
const date = ref('')
const startTime = ref('')
const endTime = ref('')
const show = ref(false)
const dateOption = ref({
  mode: 'range'
})
const timeOption = ref({
  enableTime: true,
  noCalendar: true,
  dateFormat: 'H:i'
})
const events = ref([
  {
    title: 'Click for Google',
    url: 'http://google.com/',
    start: moment(new Date(), 'YYYY-MM-DD').add(-20, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
    backgroundColor: 'rgba(58,87,232,0.2)',
    textColor: 'rgba(58,87,232,1)',
    borderColor: 'rgba(58,87,232,1)'
  },
  {
    title: 'Long Event',
    start: moment(new Date(), 'YYYY-MM-DD').add(-18, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
    color: 'green'
  },
  {
    title: 'Long Event',
    start: moment(new Date(), 'YYYY-MM-DD').add(-16, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
    end: moment(new Date(), 'YYYY-MM-DD').add(-13, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
    backgroundColor: 'rgba(8,130,12,0.2)',
    textColor: 'rgba(8,130,12,1)',
    borderColor: 'rgba(8,130,12,1)'
  },
  {
    groupId: '999',
    title: 'Repeating Event',
    start: moment(new Date(), 'YYYY-MM-DD').add(-14, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
    color: '#047685',
    backgroundColor: 'rgba(4,118,133,0.2)',
    textColor: 'rgba(4,118,133,1)',
    borderColor: 'rgba(4,118,133,1)'
  },
  {
    groupId: '999',
    title: 'Repeating Event',
    start: moment(new Date(), 'YYYY-MM-DD').add(-12, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
    backgroundColor: 'rgba(235,153,27,0.2)',
    textColor: 'rgba(235,153,27,1)',
    borderColor: 'rgba(235,153,27,1)'
  },
  {
    groupId: '999',
    title: 'Repeating Event',
    start: moment(new Date(), 'YYYY-MM-DD').add(-10, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
    backgroundColor: 'rgba(206,32,20,0.2)',
    textColor: 'rgba(206,32,20,1)',
    borderColor: 'rgba(206,32,20,1)'
  },
  {
    title: 'Birthday Party',
    start: moment(new Date(), 'YYYY-MM-DD').add(-8, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
    backgroundColor: 'rgba(58,87,232,0.2)',
    textColor: 'rgba(58,87,232,1)',
    borderColor: 'rgba(58,87,232,1)'
  },
  {
    title: 'Meeting',
    start: moment(new Date(), 'YYYY-MM-DD').add(-6, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
    backgroundColor: 'rgba(58,87,232,0.2)',
    textColor: 'rgba(58,87,232,1)',
    borderColor: 'rgba(58,87,232,1)'
  },
  {
    title: 'Birthday Party',
    start: moment(new Date(), 'YYYY-MM-DD').add(-5, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
    backgroundColor: 'rgba(235,153,27,0.2)',
    textColor: 'rgba(235,153,27,1)',
    borderColor: 'rgba(235,153,27,1)'
  },
  {
    title: 'Birthday Party',
    start: moment(new Date(), 'YYYY-MM-DD').add(-2, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
    backgroundColor: 'rgba(235,153,27,0.2)',
    textColor: 'rgba(235,153,27,1)',
    borderColor: 'rgba(235,153,27,1)'
  },

  {
    title: 'Meeting',
    start: moment(new Date(), 'YYYY-MM-DD').add(0, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
    backgroundColor: 'rgba(58,87,232,0.2)',
    textColor: 'rgba(58,87,232,1)',
    borderColor: 'rgba(58,87,232,1)'
  },
  {
    title: 'Click for Google',
    url: 'http://google.com/',
    start: moment(new Date(), 'YYYY-MM-DD').add(0, 'days').format('YYYY-MM-DD') + 'T06:30:00.000Z',
    backgroundColor: 'rgba(58,87,232,0.2)',
    textColor: 'rgba(58,87,232,1)',
    borderColor: 'rgba(58,87,232,1)'
  },
  {
    groupId: '999',
    title: 'Repeating Event',
    start: moment(new Date(), 'YYYY-MM-DD').add(0, 'days').format('YYYY-MM-DD') + 'T07:30:00.000Z',
    backgroundColor: 'rgba(58,87,232,0.2)',
    textColor: 'rgba(58,87,232,1)',
    borderColor: 'rgba(58,87,232,1)'
  },
  {
    title: 'Birthday Party',
    start: moment(new Date(), 'YYYY-MM-DD').add(0, 'days').format('YYYY-MM-DD') + 'T08:30:00.000Z',
    backgroundColor: 'rgba(235,153,27,0.2)',
    textColor: 'rgba(235,153,27,1)',
    borderColor: 'rgba(235,153,27,1)'
  },
  {
    title: 'Doctor Meeting',
    start: moment(new Date(), 'YYYY-MM-DD').add(0, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
    backgroundColor: 'rgba(235,153,27,0.2)',
    textColor: 'rgba(235,153,27,1)',
    borderColor: 'rgba(235,153,27,1)'
  },
  {
    title: 'All Day Event',
    start: moment(new Date(), 'YYYY-MM-DD').add(1, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
    backgroundColor: 'rgba(58,87,232,0.2)',
    textColor: 'rgba(58,87,232,1)',
    borderColor: 'rgba(58,87,232,1)'
  },
  {
    groupId: '999',
    title: 'Repeating Event',
    start: moment(new Date(), 'YYYY-MM-DD').add(8, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
    backgroundColor: 'rgba(58,87,232,0.2)',
    textColor: 'rgba(58,87,232,1)',
    borderColor: 'rgba(58,87,232,1)'
  },
  {
    groupId: '999',
    title: 'Repeating Event',
    start: moment(new Date(), 'YYYY-MM-DD').add(10, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
    backgroundColor: 'rgba(58,87,232,0.2)',
    textColor: 'rgba(58,87,232,1)',
    borderColor: 'rgba(58,87,232,1)'
  }
])
// Functions
const dateSelected = (e) => {
  console.log(e)
  show.value = true
}
const eventSelected = (e) => {
  console.log(e)
  show.value = true
}
</script>

<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <div class="card  ">
                    <div class="card-body d-flex justify-content-between align-items-center">
                        <div class="card-title mb-0">
                            <h4 class="mb-0">Calender</h4>
                        </div>
                        <div class="card-action">
                            <a href="#" class="btn btn-primary" role="button">Back</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card  ">
                            <div class="card-body">
                                <div id="calendar1" class="calendar-s"></div>
                                <FullCalendar :options="calendarOptions"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3'
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import bootstrapPlugin from '@fullcalendar/bootstrap'
import moment from 'moment'
export default {
  name: 'Calender',
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data () {
    return {
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin, // needed for dateClick
          listPlugin,
          bootstrapPlugin
        ],
        timeZone: 'UTC',
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        weekNumbers: false,
        initialView: 'dayGridMonth',
        editable: true,
        dayMaxEvents: true,
        select: this.handleDateSelect,
        events: [
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
        ]
      }
    }
  }
}
</script>

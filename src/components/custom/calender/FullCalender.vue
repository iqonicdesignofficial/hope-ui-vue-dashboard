<template>
  <full-calendar :options="options"></full-calendar>
</template>

<script>
import '@fullcalendar/core/vdom'
import FullCalendar from '@fullcalendar/vue3'
import InteractionPlugin from '@fullcalendar/interaction'
import DayGridPlugin from '@fullcalendar/daygrid'
import TimeGridPlugin from '@fullcalendar/timegrid'
import ListPlugin from '@fullcalendar/list'
import BootstrapPlugin from '@fullcalendar/bootstrap'
export default {
  name: 'FullCalender',
  props: {
    events: {
      type: Array,
      default: () => []
    }
  },
  setup(props, { emit }) {
    const handleDateSelect = (e) => {
      emit('onDateSelect', e)
    }
    const handleEventSelect = (e) => {
      emit('onDateSelect', e)
    }
    const options = {
      plugins: [
        DayGridPlugin,
        TimeGridPlugin,
        InteractionPlugin, // needed for dateClick
        ListPlugin,
        BootstrapPlugin
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
      select: handleEventSelect,
      dateClick: handleDateSelect,
      events: props.events
    }
    return {
      options
    }
  },
  components: {
    FullCalendar
  }
}
</script>

<style>
@import '@fullcalendar/common/main.css';
@import '@fullcalendar/bootstrap/main.css';
@import '@fullcalendar/daygrid/main.css';
@import '@fullcalendar/timegrid/main.css';
@import '@fullcalendar/list/main.css';
.fc .fc-button {
  text-transform: capitalize;
}
</style>

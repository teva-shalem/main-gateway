<template>
  <vue-cal v-bind="vueCalProps" :style="{height: height+'px'}"
    todayButton :disable-views="['years', 'year', 'month', 'day']"
  >
    <template #title="{view}" v-if="filterTitleByStartDate">
      <div>{{filterTitleByStartDate(view.startDate)}}</div>
    </template>

    <template #arrow-prev>
      <slot name="arrow-before"/>
    </template>

    <template #arrow-next>
      <slot name="arrow-after"/>
    </template>

    <template #today-button>
      <slot name="today-button"/>
    </template>

    <template #weekday-heading="{heading}">
      <slot name="weekday-heading" :heading="heading" />
    </template>

    <template #event="{event}">
      <slot name="moeed" :event="event" />
    </template>
  </vue-cal>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue'
import VueCal, {
  Event as VueCalEvent, Props as VueCalProps, OnEventClick
  } from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import 'vue-cal/dist/i18n/he.js'

export interface CalendarEvent {
  start: string | Date;
  end: string | Date;
  title: string;
  titleFull: string;
  subtitle?: string;
  description: string;
  isBackground?: boolean;
  className?: string;
}

function transformCalendarEvent(eventData: CalendarEvent): VueCalEvent & {subtitle?: string, titleFull: string} {
  const {start, end, title, subtitle, titleFull, description, className, isBackground} = eventData

  return {
    start, end, title, subtitle, titleFull,
    contentFull: description, 
    class: className, 
    background: isBackground
  }
}

export default Vue.extend({
  name    : 'Calendar',
  components: { VueCal },
  props: {
    height: {type: Number},
    minimalUi: {type: Boolean, default: true},
    israelize: {type: Boolean, default: true},
    hideShabat: {type: Boolean, default: true},
    hourFrom: {type: Number, required: false},
    hourTo: {type: Number, required: false},
    filterTitleByStartDate: {
      type: Function as PropType<(date: Date) => string>,
      required: false
    },
    onMoeedClickEvent: {
      type: Function as PropType<OnEventClick>,
      required: false
    },
    events: {type: Array as PropType<CalendarEvent[]>},
  },
  computed: {
    vueCalProps(): VueCalProps {
      const props: VueCalProps = {
        events: this.events.map(transformCalendarEvent),
        maxDate: '12/24/2021'
      }

      if (this.minimalUi) {
        props.hideViewSelector = true
        props.dblclickToNavigate = false
      }
      
      if (this.hideShabat) {
        props.hideWeekdays = [6]
      }

      if (this.israelize) {
        props.locale = "he"
        props.startWeekOnSunday = true
      }

      if (this.hourFrom) {
        props.timeFrom = this.hourFrom * 60
      }

      if (this.hourTo) {
        props.timeTo = this.hourTo * 60
      }

      if (this.onMoeedClickEvent) {
        props.onEventClick = this.onMoeedClickEvent
      }
      
      return props
    }
  },
})
</script>

<style lang="scss">
[lang="he"] {
  .vuecal__weekdays-headings {
    padding-right: 3em;
    padding-left: 0;
  }
}

.vuecal__event {cursor: pointer;}
</style>

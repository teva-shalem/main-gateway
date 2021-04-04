<template>
  <div>
    <Calendar :height="640"
    :hourFrom="9" :hourTo="22"
    :filterTitleByStartDate="filterTitleByStartDate"
    @onMoeedClick="onMoeedClickEvent"
    :events="events">

      <template #arrow-before>
        <button type="button" aria-label="שבוע הקודם" class="vuecal__arrow vuecal__arrow--prev" style="font-size: 1.2em;">🡒</button>
      </template>

      <template #arrow-after>
        <button type="button" aria-label="שבוע הבא" class="vuecal__arrow vuecal__arrow--next" style="font-size: 1.2em;">🡐</button>
      </template>
      
      <template #today-button><button>היום</button></template>

      <template #weekday-heading={heading}>
        <div class="d-flex flex-column flex-md-row">
          <span class="ml-1 mb-n1">{{heading.label}}</span>
          <span>{{heading.date.format('D.M')}}</span>
        </div>
      </template>

      <template #moeed="{ event }">
        <div class="vuecal__event-content flex-column">
          <div>{{event.title}}</div>
          <small class="d-none d-md-block">{{event.subtitle}}</small>
        </div>
      </template>
    </Calendar>

    <b-modal id="calendar-modal" hide-header-close hide-footer centered>
      <template #modal-header class="d-flex">
        <h5 class="modal-title">{{selectedEvent.titleFull}}</h5>
        <h5 class="modal-title text-left">{{selectedEvent.start.formatTime()}}-{{selectedEvent.end.formatTime()}}</h5>
      </template>
      
      <template #default>
        <p v-html="selectedEvent.contentFull"></p>
      </template>
    </b-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Calendar, {CalendarEvent} from '@/components/Calendar.vue'
import sohhbetSettings from '@/content/sohhbet-settings.json'
import sohhbetMentors from '@/content/sohhbet-mentors.json'
import luzPeima, {MoeedPeima} from '@/content/luz-peima.json'
import oganeyZman from '@/content/oganey-zman.json'

export default Vue.extend({
  name    : 'SchoolCalendar',
  components: { Calendar },
  computed: {
    events(): CalendarEvent[] {
      return luzPeima.moadim.map(moeed => {
        const settingData = sohhbetSettings[moeed.setting]

        if (!settingData)
          throw Error('Wrong school setting')

        const mergeMoeedWithSetting = (moeed: MoeedPeima): MoeedPeima => {
          const {class: settingClass, duration, isBackground, mentors} = settingData
          
          return {
            ...{class: settingClass, duration, isBackground, mentors},
            ...moeed
          }
        }
        
        const {zman, isBackground, class: className, duration, mentors} = mergeMoeedWithSetting(moeed)
        const mentorsData = (mentors && mentors.length) ? mentors.map(_ => sohhbetMentors[_]) : null

        const {subject, discipline, content} = settingData

        const title = subject
        const subtitle = discipline
        const titleFull = title + `${subtitle ? ': ' + subtitle : ''}`
        const description = content
        const descriptionFooter = mentorsData ? `<footer>מעבירים: ${mentorsData.map(_ => _.name).join(', ')}</footer>` : '' 
        
        const zmanToTime = (zman: [string, number, string]) => {
          const [shavuaa, yom, shaaa] = zman

          const sunday = new Date(`${oganeyZman.shavuot[shavuaa]}T${shaaa}`)
          const day = sunday.addDays(yom - 1)

          return new Date(day)
        }

        const start = zmanToTime(zman)
        const decimalTimeToMilliseconds = (time: number): number => 
          time * 60 * 60 * 1000

        const end = new Date(start.getTime() + decimalTimeToMilliseconds(duration))
        
        return {
          start, end, title, subtitle, titleFull,
          description: description + descriptionFooter, 
          className, 
          isBackground: isBackground || false
        }
      })
    }
  },
  methods: {
    filterTitleByStartDate(date: Date): string {
      const timeToShavuaa = (date: Date): string => {
        const weekFound = Object.entries(oganeyZman.shavuot)
          .find(([, week]) => week === date.format(''))

        return weekFound ? weekFound[0] : 'null'
      }
      return timeToShavuaa(date)
    },

    onMoeedClickEvent(event: any) {
      this.$root.$emit('bv::hide::modal', 'calendar-modal')

      this.selectedEvent = event
      this.$bvModal.show('calendar-modal')
    }
  },
  data: () => ({
    selectedEvent: {},
    showDialog: false,
  })
})
</script>

<style lang="scss">
@import '@/styles/variables';

.vuecal__cell {
  &:nth-of-type(1) {
    background-color: fade-out($blue, 0.9);
  }
  &:nth-of-type(2) {
    background-color: fade-out($indigo, 0.9);
  }
  &:nth-of-type(3) {
    background-color: fade-out($pink, 0.9);
  }
  &:nth-of-type(4) {
    background-color: fade-out($orange, 0.9);
  }
  &:nth-of-type(5) {
    background-color: fade-out($yellow, 0.9);
  }
  &:nth-of-type(6) {
    background-color: fade-out($cyan, 0.9);
  }
}

.vuecal__event {
  cursor: pointer;
  color: black;
  border-width: 1px;
  border-style: solid;
  border-color: darken(white, 26%);

  &.movement {
    background-color: fade-out($blue, 0.3);
    border-color: darken($blue, 26%);
  }
  &.blima {
    background-color: fade-out($orange, 0.3);
    border-color: darken($orange, 26%);
  }
  &.creative {
    background-color: fade-out($yellow, 0.3);
    border-color: darken($yellow, 26%);
  }
  &.foundations {
    background-color: fade-out($cyan, 0.3);
    border-color: darken($cyan, 26%);
  }
}

.vuecal__event-content {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.vuecal__event--background {
  background: repeating-linear-gradient(45deg, transparent, transparent 10px, #f2f2f2 10px, #f2f2f2 20px);
  color: #333;
  &:hover {
    outline: 1px solid darkgrey;
  }
}

.vuecal__today-btn {
  
}
</style>

<template>
  <div>
    <Calendar :height="640"
    :hourFrom="9" :hourTo="22"
    :filterTitleByStartDate="filterTitleByStartDate"
    @onMoeedClick="onMoeedClickEvent"
    :events="events">

      <template #arrow-before>
        <button type="button" aria-label="שבוע הקודם" class="vuecal__arrow vuecal__arrow--prev" style="    font-size: 1.2em;">🡒</button>
      </template>

      <template #arrow-after>
        <button type="button" aria-label="שבוע הבא" class="vuecal__arrow vuecal__arrow--next" style="    font-size: 1.2em;">🡐</button>
      </template>
      
      <template #today-button>היום</template>

      <template #moeed="{ event }">
        <div class="vuecal__event-content">
          <!-- <span>{{event.title}}</span> -->
          <span class="d-md-none">{{event.title.split(':')[0]}}</span>
          <span class="d-none d-md-block">{{event.title}}</span>
        </div>
      </template>
    </Calendar>

    <b-modal id="calendar-modal" hide-header-close hide-footer centered>
      <template #modal-header>
        <h5 class="modal-title">{{selectedEvent.title}}</h5>
      </template>
      <template #default>
        <h4>{{/*selectedEvent*/}}</h4>
        <p class="my-4">{{selectedEvent.contentFull}}</p>
      </template>
    </b-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Calendar, {CalendarEvent} from '@/components/Calendar.vue'
import sohhbetSettings from '@/content/sohhbet-settings.json'
import luzPeima from '@/content/luz-peima.json'
import oganeyZman from '@/content/oganey-zman.json'

export default Vue.extend({
  name    : 'SchoolCalendar',
  components: { Calendar },
  computed: {
    events(): CalendarEvent[] {
      return luzPeima.moadim.map(moeed => {
        const {zman, setting} = moeed
        const settingData = sohhbetSettings[setting] 
        
        if (!settingData)
          throw Error('Wrong school setting')

        const {subject, discipline, content, duration} = settingData
        const title = subject + `${discipline ? ': '+discipline : ''}`
        
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
        
        return {start, end, title, description: content}
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

    onMoeedClickEvent(event) {
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

.vuecal__event {background-color: rgba(253, 156, 66, 0.9);border: 1px solid rgb(233, 136, 46);color: #fff;}

.vuecal__event-content {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>

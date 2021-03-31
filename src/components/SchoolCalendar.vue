<template>
  <div>
    <Calendar :height="640"
    :hourFrom="9" :hourTo="22"
    :events="events" />
  </div>
</template>

<script lang="ts">
import Vue, {PropType, VNode} from 'vue'

import Calendar, {CalendarEvent} from '@/components/Calendar.vue'
import sohhbetSettings from '@/content/sohhbet-settings.json'

interface SchoolCalendarEvent {
  setting: string;
  start: string;
  end: string;
}

const events = Array<SchoolCalendarEvent>(
  {
    setting: 'solidGrasp',
    start: '2021-04-04 10:00',
    end: '2021-04-04 12:00',
  },
  {
    setting: 'pulsingMeetingArt',
    start: '2021-04-05 19:00',
    end: '2021-04-05 21:00',
  },
  {
    setting: 'springOfWisdom',
    start: '2021-04-06 10:00',
    end: '2021-04-06 12:00', 
  },
  {
    setting: 'treeOfKing',
    start: '2021-04-06 19:00',
    end: '2021-04-06 21:00',
  },
  {
    setting: 'psychophysicalFocusing',
    start: '2021-04-07 15:00',
    end: '2021-04-07 17:00',
  },
  {
    setting: 'solidMovement',
    start: '2021-04-07 19:00',
    end: '2021-04-07 21:00',
  },
  {
    setting: 'solidPulsingHealing',
    start: '2021-04-08 10:00',
    end: '2021-04-08 12:00',
  },
  {
    setting: 'jamSession',
    start: '2021-04-08 19:00',
    end: '2021-04-08 21:00',
  },
  {
    setting: 'storyOfUnit',
    start: '2021-04-09 12:00',
    end: '2021-04-09 14:00',
  },
  {
    setting: 'shabatWelcoming',
    start: '2021-04-10 18:00',
    end: '2021-04-10 20:00',
  },
)

export default Vue.extend({
  name    : 'SchoolCalendar',
  components: { Calendar },
  computed: {
    events(): CalendarEvent[] {
      return events.map(event => {
        const {start, end, setting} = event
        const settingData = sohhbetSettings[setting] 
        
        if (!settingData)
          throw Error('Wrong school setting')

        const {subject, discipline, content} = settingData
        const title = subject + `${discipline ? ': '+discipline : ''}`

        return {start, end, title, description: content}
      })
    }
  },
})
</script>

<style scoped lang="scss">
</style>

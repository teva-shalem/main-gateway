<script lang="ts">
import Vue, {PropType, VNode} from 'vue'
import VueCal, {
  Event as VueCalEvent, Props as VueCalProps
  } from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import 'vue-cal/dist/i18n/he.js'

export interface CalendarEvent {
  start: string;
  end: string;
  title: string;
  description: string;
}

function transformCalendarEvent(eventData: CalendarEvent): VueCalEvent {
  const {start, end, title, description} = eventData
  return {start, end, title, contentFull: description}
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
    events: {type: Array as PropType<CalendarEvent[]>},
  },
  render(_): VNode {
    return _('vue-cal', {
      props: this.vueCalProps,
      style: {height: this.height + 'px'}
    })
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
      
      return props
    }
  },
})
</script>

<style scoped lang="scss">
</style>

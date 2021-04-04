<template>
  <b-container>
    <b-row>
      <b-col xl="6" lg="7" md="9" class="mx-auto mt-3">
        <h1>לוח זמנים הדרכות בית הספר</h1>
        <h2 class="text-left">כולנו מוזמנים ללמוד!</h2>
      </b-col>
    </b-row>
    <b-row><b-col>
      <SchoolCalendar />
    </b-col></b-row>
    <b-row>
      <b-col xl="6" lg="7" md="9" class="mx-auto mt-3">
        <p>בית ספר פעימה פתוח ומזמין את הקהל הרחב להשתתף בלימוד השיעורים השונים שבית הספר מציע. הלו״ז מורכב משמונה אומנויות שונות הבונות את <DrashTooltip term="pulseWay">דרך הפעימה</DrashTooltip>. מערכת הלימוד מתמירה התמודדות למנהיגות, תומכת באדם בבניית מערכת חיים אישית, ובבניית גוף ידע עצמאי.</p>
        <p>קהל היעד ללימוד ייחודי זה הוא שש מאות אלף בני ישראל, כלומר כל־אדם שעוצמת הטוּב, האמת, וריפוי הנפש הם המובילים את צעדיו, גם במחיר עימות עם המציאות, חריגות, ושונות. הלימוד מהווה כלי להרחבת הדעת ובמקביל להשבת הנפש, למח וללב, ללוגיקה ולאינטואיציה, ומוביל את האדם לטבע שונה של חיים שהוא יחיד מסוגו.</p>

        <h2>Setting - מסגרת</h2>
        <ul>
          <li>מחיר: 50 ש"ח לאדם למפגש. התשלום בסיום המפגש בביט או במזומן</li>
          <li>מיקום: <b-link to="/home">טרפון 42</b-link>, שכונת התקווה תל אביב</li>
          <li>הלו״ז מורכב מתבנית מחזורית ותמורות משתנות</li>
          <li>אין התחייבות למספר שיעורים</li>
          <li>יש לתאם הגעה ב<DrashTooltip term="contactPhone">וואטצאפ</DrashTooltip> של דוד</li>
          <li>מספר המשתתפים במפגש: 1-6</li>
        </ul>
      </b-col>
    </b-row>


  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'

import SchoolCalendar  from '@/components/SchoolCalendar.vue'
import DrashTooltip from '@/components/DrashTooltip.vue'

export default Vue.extend({
  components: {SchoolCalendar, DrashTooltip},
  data: function() {
    return {}
  }
})
</script>

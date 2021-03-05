<template>
  <b-container class="school">
    <b-row>
      <b-col xl="6" lg="7" md="9" class="mx-auto mt-3">
        <h1>בית ספר פעימה</h1>
        <p>בית הספר מהווה מרכז של חקר ולימוד הנפש. מטרת בית הספר היא מתוך לימוד זה, להקים מערך הדרכה ארצי ועולמי לרפואת והתפתחות נפש האדם. בית ספר פעימה הוקם ע״י דוד ישראל כהן ב-2002. כחלק ממסע אישי לתיקון נפשי והתגברות על אתגרי חיים. מתיקון אישי לתיקון עולם.</p>
        
        <hr />

        <h3>קהילה</h3>
        <p>הקהילה של בית ספר פעימה מהווה את הגרעין של הנהגת <DrashTooltip term="shalemKingdom">ממלכת שלם</DrashTooltip>, שנוסדה בישראל ביולי 2020. <b-link target="_blank" href="https://mm.tt/1572616351?t=CGMORfbFOW">הקהילה מורכבת</b-link> מהמייסד דוד ישראל כהן ו-52 אבות <DrashTooltip term="flock">העדה</DrashTooltip> המשמשים בתפקידי כהן ראשי, לוי ראשי, וראשי משמרות, אשר נחלקים על פי בתים. ישנם 12 בתים על פי 12 שבטי ישראל. החל מ-2024 מצטרפת לכל שבט אומה בעולם ונבנות 12 ממלכות ברחבי כל כדור הארץ.</p>
        <p><b-link target="_blank" href="https://docs.google.com/spreadsheets/d/1yNdlZKS5oS16m8E9-tRnDQemRwh1GTzR4ETgiuTGryU/">מבנה ממלכת שלם</b-link> בונה פתרון שלם למעבר ממשבר עולמי לצמיחה מתמשכת.</p>
        <hr />
        <h3>שיח קהילתי</h3>
        <p>אתם מוזמנים ל<DrashTooltip term="discord">דיסקורד</DrashTooltip> של טבע שלם. ימי שלישי 19:00-21:00 אנחנו פעילים ועונים על תשובות. אנחנו ברשת גם הרבה מלבד השעתיים הייעודיות. בואו תראו מה-השיח. <b-link href="https://discord.gg/zHjczWb">לחצו כאן</b-link> לקבל הזמנה.</p>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <b-img fluid class="w-100" src="/img/school-principles.png" />
        <b-img fluid class="w-100" src="/img/school-creation.png" />
      </b-col>
    </b-row>

  </b-container>
</template>

<script lang="ts">
import DrashTooltip  from '@/components/DrashTooltip.vue'
// import {getMetaInfo} from '@/utils/getMetaInfo'

export default {
  // metaInfo: getMetaInfo('school'),
  components: {DrashTooltip}
}
</script>

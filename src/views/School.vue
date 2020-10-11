<template>
  <b-container class="school">
    <b-row>
      <b-col xl="6" lg="7" md="9" class="mx-auto mt-3">
        <h1>בית ספר פעימה</h1>
        <p>בית הספר מהווה מרכז של חקר ולימוד הנפש. מטרת בית הספר היא מתוך לימוד זה, להקים מערך הדרכה ארצי ועולמי לרפואת והתפתחות נפש האדם. בית ספר פעימה הוקם ע״י דוד ישראל כהן ב-2002. כחלק ממסע אישי לתיקון נפשי והתגברות על אתגרי חיים. מתיקון אישי לתיקון עולם.</p>
        <hr />
        <h3>קבוצת תנועה פתוחה - 5 נוסחאות הפעימה</h3>
        <p>כלי עבודה משולב גוף-נפש. בסיס השיטה הוא 5 אלמנטים - או רכיבים - החיוניים לחייו של האדם. לכל רכיב נוסחה מתמטית ותרגיל פיזי המעודדים את בריאת אותו הרכיב בחייו של המתרגל. השיטה משלבת ידע עיוני ושיטות תרגול פיזיות המשולבות תרבויות רבות. השיטה נותנת מענה למגוון הסימפטומים הנפשיים והפיזיולוגיים.</p>
        <p>הקבוצה נפגשת פעם בשבוע. <br/>ימי רביעי ב19:00 בערב בפארק צ׳ארלס קלור.<br/> עלות מפגש 50 שקלים.</p>
        <p>יש לתאם הגעה <DrashTooltip term="contactPhone">בוואטצאפ</DrashTooltip>.</p>
        <hr />
        <h3>קבלת שירות הדרכה - אישי/קבוצתי</h3>
        <p>זהו שירות חיוני למצב ההתמודדות הנוכחי של משבר הקורונה, הכולל בניית סדר ואורח חיים יציב ותקין, רווחה נפשית ופיזית, בניית אסטרטגיית עבודה, ו<b-link target="_blank" href="https://www.notion.so/62111a02e11347fcb32c2dff5af40a72">ניהול נכון של חיים בתוך תקופת המשבר</b-link>.</p>
        <p><strong>ליחיד</strong> - הדרכה אישית עפ״י דרך הפעימה - ע"י מדריך מוסמך.<br/>
          פגישה פעם בשבוע לשעתיים תמורת 150 שקלים. משלב שיחה, תנועה ויצירה. הרכבת מעשה המרכבה האישי.  מיפוי ובניית אסטרטגיית עבודה.  למידה ויישום.  לכיוון בריאות ומימוש.</p>

        <p><strong>לקבוצה</strong> - הדרכת אומנות הפעימה בדגש על שילוב ידע עיוני ומעשי פיזי. <br/> דינמיקה קבוצתית שיתופית של למידה והתפתחות.</p>

        <p>מוזמנים ליצור קשר <DrashTooltip term="contactPhone">בוואטצאפ</DrashTooltip>.</p>
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

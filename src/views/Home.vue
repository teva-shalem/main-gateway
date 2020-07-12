<template>
  <b-container class="home">
    <b-row>
      <b-col><h2>תהליך לימוד הנפש שלך</h2></b-col>
    </b-row>
    <b-row>
      <b-col align-self="center">
        <p>שלום וברוכים הבאים,<br/>
        שמי דוד ישראל כהן, יליד 1979. נולדתי וגדלתי בירושלים. שירתתי בצבא כ<DrashTooltip term="captainOfShip">מפקד ספינה</DrashTooltip>. משנת <DrashTooltip term="2002">2002</DrashTooltip> אני מתמודד עם סכיזופרניה ופוסט טראומה, ונמצא במסע חקר ולימוד נפש האדם.</p>
      </b-col>

      <b-col align-self="center" style="flex: 0 1 33%;">
        <b-img src="@/assets/merkavah-logo.jpg" fluid />
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <p>
          <DrashTooltip term="wholeNature">טבע שלם</DrashTooltip> הוא פרוייקט חדש תחת השמש הבנוי על יסודות קדמונים.
          הוא נקרא גם פרוייקט <DrashTooltip term="wholeSystem">המשי"ח</DrashTooltip> - מערכת שלמה ישראל חיה.
          מטרתו היא קיימות של המין האנושי על פני אדמות.
          קהל היעד הוא כל <DrashTooltip term="earthDwellers">תושבי כדור הארץ</DrashTooltip>, והוא נועד להשיג אושר, שפע ושלום לכלל התושבים.
          לב הפרוייקט הוא <DrashTooltip term="heartLearningSystem">מעל"ה</DrashTooltip> - <strong>מערכת לימוד הנפש</strong>.
          המערכת בנויה ע"פ מודל <DrashTooltip image="king-tree-system">עץ המלך</DrashTooltip> - 12 <DrashTooltip term="branches">ענפים</DrashTooltip> ו12 <DrashTooltip term="halls">היכלות</DrashTooltip> של העמקה בריפוי והתפתחות הנפש, עד <DrashTooltip image="innermost-point">לנקודה הפנימית ביותר</DrashTooltip> של אדם
          וטבע כמיכלול שלם.
          <DrashTooltip term="uniqueness">הייחוד</DrashTooltip>.
        </p>

        <p>
        מערכת לימוד הנפש מפתחת גוף ידע ייחודי ומשולב אשר נבנה מתוך מסע התמודדות של המחברים. <b-link href="https://books.teva-shalem.com/">גוף הידע</b-link> מהווה גשר בין תחומי החיים והטבע השונים, בין שפות שונות, ובונה תהליך של התהוות תורת חיים משותפת לאנושות.
        </p>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <p>בשנת 2002 הקמתי את <b-link to="/school">בית ספר פעימה</b-link> ללימוד הנפש ככלי להתמודדות אישית ובניית שיטת עבודה כללית. משנת 2009 אני עוסק ב<b-link to="/art">אומנות</b-link> והדרכה לבריאות הנפש. ב<DrashTooltip term="2013">2013</DrashTooltip> ייסדתי את פרוייקט mind&fitness - מרכז גוף נפש למתמודדים נפשית. ב<DrashTooltip term="2018">2018</DrashTooltip> פיתחתי את דרך הפעימה לריפוי והתפתחות נפש האדם. ב2020 פיתחתי את מעל"ה - מערכת לימוד הנפש - ואת <DrashTooltip term="2020">נוסחאות הפעימה</DrashTooltip>.</p>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="strong-invitation" lg align-self="center">
        <p>הנכם מוזמנים למצוא את <DrashTooltip term="personalConnection">החיבור האישי</DrashTooltip> שלכם ל<DrashTooltip term="workOfChariot">מעשה המרכבה</DrashTooltip> הזה.</p>

        <p>למצוא <DrashTooltip term="homeForHeart">בית לנפש</DrashTooltip> ו<DrashTooltip term="balanceLeadership">הדרכה לרפואתה</DrashTooltip>.</p>

        <p>להיות שותפים לבנייה של <DrashTooltip term="sharedKingdom">ממלכה משותפת</DrashTooltip>, <DrashTooltip term="livingTheory">תורה חיה</DrashTooltip> וגן עדן עלי אדמות.</p>
      </b-col>

      <b-col lg>
        <p>לקבלת עדכונים, פרטים נוספים או השתלבות אישית בתכנית:</p>

        <ConvertKitForm class="mb-3"></ConvertKitForm>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import DrashTooltip from '@/components/DrashTooltip.vue'
import ConvertKitForm from '@/components/ConvertKitForm.vue'

export default {
  name: 'Home',
  components: {
    DrashTooltip,
    ConvertKitForm,
  }
}
</script>

<style lang="scss">
.strong-invitation {
  text-align: center;
  font-weight: bold;
}
</style>

<template>
  <b-container class="home">
    <b-row class="invitation">
      <b-col>
        <h1 class="text-center">תהליך לימוד הנפש שלך</h1>
        <p>שלום וברוכים הבאים,<br/>
        שמי דוד ישראל כהן, יליד 1979. נולדתי וגדלתי בירושלים. שירתתי בצבא כ<DrashTooltip term="captainOfShip">מפקד ספינה</DrashTooltip>. משנת <DrashTooltip term="2002">2002</DrashTooltip> אני מתמודד עם סכיזופרניה ופוסט טראומה, ונמצא במסע חקר ולימוד נפש האדם.</p>
        <p>
          <DrashTooltip term="wholeNature">טבע שלם</DrashTooltip> הוא פרוייקט חדש תחת השמש הבנוי על יסודות קדמונים.
          הוא נקרא גם פרוייקט <DrashTooltip term="wholeSystem">המשי"ח</DrashTooltip> - מערכת שלמה ישראל חיה.
          מטרתו היא קיימות של המין האנושי על פני אדמות.
          קהל היעד הוא כל <DrashTooltip term="earthDwellers">תושבי כדור הארץ</DrashTooltip>, והוא נועד להשיג אושר, שפע ושלום לכלל התושבים.
          לב הפרוייקט הוא <DrashTooltip term="heartLearningSystem">מעל"ה</DrashTooltip> - <strong>מערכת לימוד הנפש</strong>.
          המערכת בנויה ע"פ מודל <DrashTooltip image="king-tree-system">עץ המלך</DrashTooltip> - <DrashTooltip term="twelveBranches">12 ענפים</DrashTooltip> ו<DrashTooltip term="twelveHalls">12 היכלות</DrashTooltip> של העמקה בריפוי והתפתחות הנפש, עד <DrashTooltip image="innermost-point">לנקודה הפנימית ביותר</DrashTooltip> של אדם
          וטבע כמיכלול שלם.
          <DrashTooltip term="uniqueness">הייחוד</DrashTooltip>.
        </p>

        <p>
        מערכת לימוד הנפש מפתחת גוף ידע ייחודי ומשולב אשר נבנה מתוך מסע התמודדות של המחברים. <b-link href="https://books.teva-shalem.com/">גוף הידע</b-link> מהווה גשר בין תחומי החיים והטבע השונים, בין שפות שונות, ובונה תהליך של התהוות תורת חיים משותפת לאנושות.
        </p>
      </b-col>
    </b-row>

    <b-row class="who-am-i">
      <b-col>
        <p>בשנת 2002 הקמתי את <b-link to="/school">בית ספר פעימה</b-link> ללימוד הנפש ככלי להתמודדות אישית ובניית שיטת עבודה כללית. משנת 2009 אני עוסק ב<b-link to="/art">אומנות</b-link> והדרכה לבריאות הנפש. ב<DrashTooltip term="2013">2013</DrashTooltip> ייסדתי את פרוייקט mind&fitness - מרכז גוף נפש למתמודדים נפשית. ב<DrashTooltip term="2018">2018</DrashTooltip> פיתחתי את דרך הפעימה לריפוי והתפתחות נפש האדם. ב2020 פיתחתי את מעל"ה - מערכת לימוד הנפש - ואת <DrashTooltip term="2020">נוסחאות הפעימה</DrashTooltip>.</p>
      </b-col>
    </b-row>

    <b-row class="sub-invitation">
      <b-col lg>
        <p>הנכם מוזמנים למצוא את <DrashTooltip term="personalConnection">החיבור האישי</DrashTooltip> שלכם ל<DrashTooltip term="workOfChariot">מעשה המרכבה</DrashTooltip> הזה.</p>

        <p>למצוא <DrashTooltip term="homeForHeart">בית לנפש</DrashTooltip> ו<DrashTooltip term="balanceLeadership">הדרכה לרפואתה</DrashTooltip>.</p>

        <p>להיות שותפים לבנייה של <DrashTooltip term="sharedKingdom">ממלכה משותפת</DrashTooltip>, <DrashTooltip term="livingTheory">תורה חיה</DrashTooltip> וגן עדן עלי אדמות.</p>

        <p>לקבלת עדכונים, פרטים נוספים או השתלבות אישית בתכנית:</p>
      </b-col>
      <b-col lg>
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

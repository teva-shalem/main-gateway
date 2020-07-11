<template>
  <div class="home container">
    <div class="invitation row">
      <div class="col">
        <h1 class="text-center">מערכת ללימוד הנפש</h1>
        <h2>הזמנה</h2>
        <p>שלום וברוכים הבאים.
          <DrashTooltip term="wholeNature">טבע שלם</DrashTooltip> הוא פרוייקט חדש תחת השמש הבנוי על יסודות קדמונים.
          הוא נקרא גם פרוייקט <DrashTooltip term="wholeSystem">המשי"ח</DrashTooltip> - מערכת שלמה ישראל חיה.
          מטרתו היא קיימות של המין האנושי על פני אדמות.
          קהל היעד הוא כל <DrashTooltip term="earthDwellers">תושבי כדור הארץ</DrashTooltip>, והוא נועד להשיג אושר, שפע ושלום לכלל התושבים.
          לב הפרוייקט הוא <DrashTooltip term="heartLearningSystem">מעל"ה</DrashTooltip> - <strong>מערכת לימוד הנפש</strong>.
          המערכת בנויה ע"פ מודל <DrashTooltip image="king-tree-system">עץ המלך</DrashTooltip> - <DrashTooltip term="twelveBranches">12 ענפים</DrashTooltip> ו<DrashTooltip term="twelveHalls">12 היכלות</DrashTooltip> של העמקה בריפוי והתפתחות הנפש, עד <DrashTooltip image="innermost-point">לנקודה הפנימית ביותר</DrashTooltip> של אדם
          וטבע כמיכלול שלם.
          <DrashTooltip term="uniqueness">הייחוד</DrashTooltip>.
        </p>

        מערכת לימוד הנפש מפתחת גוף ידע ייחודי ומשולב אשר נבנה מתוך מסע התמודדות של המחברים. <b-link href="https://books.teva-shalem.com/">גוף הידע</b-link> מהווה גשר בין תחומי החיים והטבע השונים, בין שפות שונות, ובונה תהליך של התהוות תורת חיים משותפת לאנושות.
      </div>
    </div>

    <div class="who-am-i row">
      <div class="col">
        <h2>מי אני?</h2>

        <p>שמי דוד ישראל כהן. יליד 1979. נולדתי וגדלתי בירושלים. שירתתי בצבא כ<DrashTooltip term="captainOfShip">מפקד ספינה</DrashTooltip>. משנת <DrashTooltip term="2002">2002</DrashTooltip> מתמודד עם סכיזופרניה ופוסט טראומה, ונמצא במסע חקר ולימוד נפש האדם.</p>

        <p>משנת 2002 הקמת <b-link to="/school">בית ספר פעימה</b-link> ללימוד הנפש ככלי להתמודדות אישית ובניית שיטת עבודה כללית.</p>

        <p>משנת 2009 עוסק ב<b-link to="/art">אומנות</b-link> והדרכה לבריאות הנפש.</p>

        <p><DrashTooltip term="2013">2013</DrashTooltip> - ממייסדי פרוייקט mind&fitness - מרכז גוף נפש למתמודדים נפשית</p>

        <p><DrashTooltip term="2018">2018</DrashTooltip> - מפתח דרך הפעימה לריפוי והתפתחות נפש האדם.</p>

        <p>2020 - מפתח מעל"ה - מערכת לימוד הנפש.</p>

        <p>2020 - מפתח <DrashTooltip term="2020">נוסחאות הפעימה</DrashTooltip>.</p>
      </div>
    </div>

    <div class="sub-invitation row">
      <div class="col">
        <p class="text-center">הנכם מוזמנים למצוא את <DrashTooltip term="personalConnection">החיבור האישי</DrashTooltip> שלכם ל<DrashTooltip term="workOfChariot">מעשה המרכבה</DrashTooltip> הזה.</p>

        <p class="text-center">למצוא <DrashTooltip term="homeForHeart">בית לנפש</DrashTooltip> ו<DrashTooltip term="balanceLeadership">הדרכה לרפואתה</DrashTooltip>.</p>

        <p class="text-center">להיות שותפים לבנייה של <DrashTooltip term="sharedKingdom">ממלכה משותפת</DrashTooltip>, <DrashTooltip term="livingTheory">תורה חיה</DrashTooltip> וגן עדן עלי אדמות.</p>
      </div>
    </div>
    <ConvertKitForm></ConvertKitForm>
  </div>
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

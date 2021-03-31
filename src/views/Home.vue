<template>
  <b-container class="home mt-3">
    <b-row class="text-center">
      <b-col lg class="mb-6"><h2>מהתמודדות למנהיגות<br/>ממשבר לצמיחה</h2>
      <h1>לימוד ה<DrashTooltip term="heart" position="bottom" show-initially>נפש</DrashTooltip> שלך</h1></b-col>
      <b-col lg class="i-title">דרך הפעימה</b-col>
    </b-row>
    <b-row class="justify-content-between">
      <b-col xl="4" lg="6" md="6" cols="9" align-self="center" class="m-md-auto">
        <p>שלום וברוכים הבאים,<br/>
        שמי דוד ישראל כהן. נולדתי וגדלתי בירושלים. שירתתי בצבא כ<DrashTooltip term="captainOfShip">מפקד ספינה</DrashTooltip>. משנת <DrashTooltip term="2002">2002</DrashTooltip> אני מתמודד עם סכיזופרניה ופוסט טראומה, ונמצא במסע חקר ולימוד נפש האדם.</p>
      </b-col>

      <b-col xl="3" md="4" cols="3" align-self="center" class="mx-auto">
        <b-img src="@/assets/merkavah-logo.jpg" fluid />
      </b-col>
    </b-row>

    <b-row class="justify-content-center mt-2 mb-2">
      <b-col lg="6" md="8">
        <b-embed type="iframe" allowfullscreen
                 src="https://youtube.com/embed/UwHVBFvanlc"></b-embed>
      </b-col>
    </b-row>

    <b-row class="justify-content-center">
      <b-col lg="6" md="8">
        <p class="mt-2">
          <DrashTooltip term="wholeNature">טבע שלם</DrashTooltip> הוא פרוייקט חדש תחת השמש הבנוי על יסודות קדמונים.
          הוא נקרא גם פרוייקט <DrashTooltip term="wholeSystem">המשי"ח</DrashTooltip> - מערכת שלמה ישראל חיה.
          מטרתו היא קיימות של המין האנושי על פני אדמות.
          קהל היעד הוא כל <DrashTooltip term="earthDwellers">תושבי כדור הארץ</DrashTooltip>, והוא נועד להשיג אושר, שפע ושלום לכלל התושבים.
          המערכת בנויה ע"פ מודל <DrashTooltip term="kingTreeSystem">עץ המלך</DrashTooltip>: 12 <DrashTooltip term="branches">ענפים</DrashTooltip> ו-12 <DrashTooltip term="halls">היכלות</DrashTooltip> של העמקה בריפוי והתפתחות הנפש, עד <DrashTooltip term="innermostPoint">לנקודה הפנימית ביותר</DrashTooltip> של אדם וטבע כמיכלול שלם.
          <DrashTooltip term="uniqueness">הייחוד</DrashTooltip>.
        </p>

        <p>לב הפרוייקט הוא <DrashTooltip term="heartLearningSystem">מעל"ה</DrashTooltip> - <strong>מערכת לימוד הנפש</strong>.
        המערכת מפתחת גוף ידע ייחודי ומשולב אשר נבנה מתוך מסע התמודדות של המחברים. <b-link href="https://books.teva-shalem.com/">גוף הידע</b-link> מהווה גשר בין תחומי החיים והטבע השונים, בין שפות שונות, ומאפשר תהליך נובע של היבנות תורת חיים משותפת לאנושות.
        </p>

        <p>בשנת 2002 הקמתי את <b-link to="/school">בית ספר פעימה</b-link> ללימוד הנפש ככלי להתמודדות אישית ובניית שיטת עבודה כללית. משנת 2009 אני עוסק ב<b-link to="/art">אמנות</b-link> והדרכה לבריאות הנפש. ב-<DrashTooltip term="2013">2013</DrashTooltip> השתתפתי בייסוד פרוייקט mind&fitness - מרכז גוף נפש למתמודדים נפשית. ב-<DrashTooltip term="2018">2018</DrashTooltip> פיתחתי את דרך הפעימה לריפוי והתפתחות נפש האדם. ב-2020 פיתחתי את מעל"ה ואת <DrashTooltip term="2020">נוסחאות הפעימה</DrashTooltip>.</p>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="strong-invitation mx-auto" xl="7" lg="5" md="7" sm="11" cols="12" align-self="center">
        <p>הנכם מוזמנים למצוא את <DrashTooltip term="personalConnection">החיבור האישי</DrashTooltip> שלכם ל<DrashTooltip term="workOfChariot">מעשה המרכבה</DrashTooltip> הזה</p>

        <p>למצוא <DrashTooltip term="homeForHeart">בית לנפש</DrashTooltip> ו<DrashTooltip term="balanceLeadership">הדרכה לרפואתה</DrashTooltip></p>

        <p>להיות שותפים לבנייה של <DrashTooltip term="sharedKingdom">ממלכה משותפת</DrashTooltip>, <DrashTooltip term="livingTheory">תורה חיה</DrashTooltip> וגן <b-link target="_blank" href="https://www.google.com/maps/d/edit?mid=1dEhTJtIyM25EJDB6gC0jOnIqYz4XNAcW&usp=sharing">עדן עלי אדמות</b-link></p>
      </b-col>

      <b-col lg="5" class="mt-2">
        <ConvertKitForm class="mb-3 mx-auto"></ConvertKitForm>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import DrashTooltip   from '@/components/DrashTooltip.vue'
import ConvertKitForm from '@/components/ConvertKitForm.vue'
// import {getMetaInfo}  from '@/utils/getMetaInfo'

export default {
  name: 'Home',
  // metaInfo: getMetaInfo('home'),
  components: {
    DrashTooltip,
    ConvertKitForm,
  },
}
</script>

<style lang="scss">
.strong-invitation {
  text-align: center;
  font-weight: bold;
}
.i-title {
  font-size: 2rem;
  font-style: italic;

  @media (min-width: 992px) {
    position: absolute;
    text-align: right;
    justify-content: flex-start;
    align-items: center;
  }
}
</style>

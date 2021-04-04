<template>
  <b-container class="home mt-3">
    <b-row class="text-center">
      <b-col lg class="mb-6"><h2>מהתמודדות למנהיגות<br/>ממשבר לצמיחה</h2>
      <h1>לימוד ה<DrashTooltip term="heart" position="bottom" show-initially>נפש</DrashTooltip> שלך</h1></b-col>
      <b-col lg class="i-title">דרך הפעימה</b-col>
    </b-row>

    <b-row class="justify-content-center">
      <b-col lg="6" md="8">
        <b-row class="justify-content-between">
          <b-col md="8" cols="8" align-self="center" class="m-md-auto">
            <p>שלום וברוכים הבאים לאתר טבע שלם הנקרא גם <DrashTooltip term="meshutelahh">משוטל״ח</DrashTooltip> - מיזם לריפוי והתפתחות הנפש. </p>
          </b-col>

          <b-col md="4" cols="4" align-self="center" class="mx-auto">
            <b-img src="@/assets/merkavah-logo.jpg" fluid />
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-row class="justify-content-center">
      <b-col lg="6" md="8">
        <p class="mt-2">
          <DrashTooltip term="wholeNature">טבע שלם</DrashTooltip> מהווה עמוד תווך בבניין חברה ישראלית מתוקנת בימינו - או בית שלישי. המיזם שואף לבנות מערכת הדרכה נפשית־רוחנית לאדם המודרני המתמודד עם קשיי נפשו ויחסיו עם העולם. המערכת עוסקת בחלקה הפנימי בתפישה ע״י עיון ב<b-link href="https://books.teva-shalem.com/">ספרות הטבעדינמיקה</b-link>. מיסודות התפישה היא יוצרת <b-link to="/art">אמנות</b-link> לסוגיה הבונה נדבך בלימוד וריפוי הנפש. משם המערכת מלמדת תוכן ע״י <b-link to="/school">בית ספר פעימה</b-link> ב<b-link to="/luz">תוכנית שיעורים מסודרת</b-link> ושירותים שונים של בית הספר - לימודי דרך הפעימה. חלק מהשירותים ניתנים ב<b-link to="/home">טרפון 42</b-link>, משכן בית הספר המשמש בית שהוא מודל יזמי־חברתי מרפא בכוונה להשתכפל ולהתרחב. 
        </p>
        <p>
          היבנות הדדית זו קורית ב<b-link to="healing-space">מרחבי הבראה</b-link> ברחבי הארץ, שהם אזורים נרחבים עם מספר יישובים והקשרים ביניהם, בהם מעמיקה ומתרחבת ההיבנות והערבות ההדדית, בין השאר ע״י המודל הטכנולוגי החכם. 
        </p>
        <p>
          המערכת כולה המדריכה ומלווה את האדם נקראת <b-link to="/maala">מעל״ה</b-link> (מערכת לימוד הנפש) והיא נבנית מהשטח בשיתוף פעולה נובע ע״י בני ישראל.
        </p>
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
        <p>
           אתם מוזמנים להיכנס ולהתעניין, להשתמש באתר זה כחבר לשיחה או ככלי עבודה ולימוד, ככלי לריפוי והתפתחות הנפש, או כהשראה ליזמות אישית.
        </p>
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

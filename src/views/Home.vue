<template>
  <div class="home container">
    <div class="invitation row">
      <div class="col">
        <h2>הזמנה</h2>
        <p>שלום וברוכים הבאים.
          <Tooltip :content="drash['wholeNature']">טבע שלם</Tooltip> הוא פרוייקט חדש תחת השמש הבנוי על יסודות קדמונים.
          הוא נקרא גם פרוייקט <Tooltip :content="drash['wholeSystem']">המשי"ח</Tooltip> - מערכת שלמה ישראל חיה.
          מטרתו היא קיימות של המין האנושי על פני אדמות.
          קהל היעד הוא כל <Tooltip :content="drash['earthDwellers']">תושבי כדור הארץ</Tooltip>, והוא נועד להשיג אושר, שפע ושלום לכלל התושבים.
          לב הפרוייקט הוא <Tooltip :content="drash['heartLearningSystem']">מעל"ה</Tooltip> - מערכת לימוד הנפש.
          המערכת בנויה ע"פ מודל עץ המלך - <Tooltip :content="drash['twelveBranches']">12 ענפים</Tooltip> ו<Tooltip :content="drash['twelveHalls']">12 היכלות</Tooltip> של העמקה בריפוי והתפתחות הנפש, עד לנקודה הפנימית ביותר של אדם
          וטבע כמיכלול שלם.
          <Tooltip :content="drash['uniqueness']">הייחוד</Tooltip>.
        </p>

        <p>התהליך מתבצע במספר ערוצים:</p>
      </div>
    </div>

    <div class="channels">
      <b-card-group deck class="row mb-3">
        <Card title="פורום" text="דיונים ושיחות נפש"></Card>
        <Card title="ספרים" text="גוף הידע - 1א2" external-link="https://books.teva-shalem.com/"></Card>
        <Card title="אומנות" text="מולטימדיה" link="/art"></Card>
      </b-card-group>

      <b-card-group deck class="row mb-3">
        <Card title="בית ספר פעימה" text="" link="/school"></Card>
        <Card title="פורטל" text=""></Card>
        <Card title="פטריאון" text="מערכת תשלומים"></Card>
      </b-card-group>
    </div>
    <div class="sub-invitation row">
      <div class="col">
        <p class="text-center">הנכם מוזמנים למצוא את <Tooltip :content="drash['personalConnection']">החיבור האישי</Tooltip> שלכם ל<Tooltip :content="drash['workOfChariot']">מעשה המרכבה</Tooltip> הזה.</p>

        <p class="text-center">למצוא <Tooltip :content="drash['homeForHeart']">בית לנפש</Tooltip> ו<Tooltip :content="drash['balanceLeadership']">הדרכה לרפואתה</Tooltip>.</p>

        <p class="text-center">להיות שותפים לבנייה של <Tooltip :content="drash['sharedKingdom']">ממלכה משותפת</Tooltip>, <Tooltip :content="drash['livingTheory']">תורה חיה</Tooltip> וגן עדן עלי אדמות.</p>
      </div>
    </div>


    <div class="who-am-i row">
      <div class="col">
        <h2>מי אני?</h2>

        <p>שמי דוד ישראל כהן. יליד 1979. נולדתי וגדלתי בירושלים. שירתתי בצבא כ<Tooltip :content="drash['captainOfShip']">מפקד ספינה</Tooltip>. משנת <Tooltip :content="drash['2002']">2002</Tooltip> מתמודד עם סכיזופרניה ופוסט טראומה, ונמצא במסע חקר ולימוד נפש האדם.</p>

        <p>משנת <Tooltip :content="drash['2009']">2009</Tooltip> עוסק באומנות והדרכה לבריאות הנפש.</p>

        <p><Tooltip :content="drash['2013']">2013</Tooltip> - ממייסדי פרוייקט mind&fitness - מרכז גוף נפש למתמודדים נפשית</p>

        <p><Tooltip :content="drash['2018']">2018</Tooltip> - מפתח דרך הפעימה לריפוי והתפתחות נפש האדם.</p>

        <p>2020 - מפתח מעל"ה - מערכת לימוד הנפש.</p>

        <p>2020 - מפתח <Tooltip :content="drash['2020']">נוסחאות הפעימה</Tooltip>.</p>
      </div>
    </div>

    <p>מערכת טבע שלם נמצאת בהתהוות. לקבלת עדכונים, פרטים נוספים או השתלבות אישית בתכנית:</p>

    <ConvertKitForm></ConvertKitForm>
  </div>
</template>

<script>
import Tooltip from '@/components/Tooltip.vue'
import Card from '@/components/Card.vue'
import ConvertKitForm from '@/components/ConvertKitForm.vue'
import drash from '@/content/drash.json'

export default {
  name: 'Home',
  data: () => ({drash}),
  components: {
    Tooltip,
    Card,
    ConvertKitForm,
  }
}
</script>

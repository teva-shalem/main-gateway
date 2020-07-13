<template>
  <b-container class="art">
    <b-row>
      <b-col class="mt-3">
        <h1>אומנות</h1>
        <h2>אומנות פועמת ללימוד הנפש</h2>
        <p>נועדה לקרב את האדם לליבו. נועדה לתת שקט והשראה לתודעה, רגש ועומק לנפש, בטחון קיומי לפיזי. ידע לעין הימנית הלוגית ולעין השמאלית האינטואיטיבית. תובנה לגבי מהות הקיום, חיבור בין האמת למציאות, בית לנפש ופתיחת הלב.</p>
        <p>עקרון העבודה הוא השילוב הפועם בין טכניקה ומיומנות לחופש ואינטואיציה. בין דמיון לריאליזם, בין דיוק להבעה, בין התפרצות ואומץ למים שקטים חודרים עמוק. בין מכנה משותף גבוה, לבין ארציות וחספוס. בין הפנימי לחיצוני. בין הפיזי למטאפיזי.</p>

        <b-tabs content-class="mt-3">
          <b-tab title="ציורים" active>
            <ImageGallery :images="paintings"></ImageGallery>
          </b-tab>

          <b-tab title="וידאו">
            <div v-for="video in videos" :key="video" class="mb-3">
              <b-embed type="iframe" allowfullscreen
                       :src="video"></b-embed>
            </div>
          </b-tab>
        </b-tabs>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import ImageGallery from '@/components/ImageGallery.vue'

export default {
  components: {ImageGallery},
  computed: {
    paintings() {
      return new Array(10).fill('/img/painting-').map((_, i) => (_ + (i + 1) + '.jpg'))
    },
    videos() {
      return ['UztiH2FJHjQ','mR8DAB3YlzM','NMzZZwJoLJo','Q2HSjAX_YiI'].map(_ => 'https://www.youtube.com/embed/' + _)
    }
  }
}
</script>

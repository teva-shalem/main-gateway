<template>
  <b-container class="art">
    <b-row>
      <b-col xl="6" lg="7" md="9" class="mx-auto mt-3">
        <h1>אמנות פועמת ללימוד הנפש</h1>
        <p>אמנות נועדה לקרב את האדם לליבו. נועדה לתת שקט והשראה לתודעה, רגש ועומק לנפש, בטחון וקיום לפיזי. ידע לעין הימנית הלוגית ולעין השמאלית האינטואיטיבית. תובנה לגבי מהות הקיום, חיבור בין האמת למציאות, בית לנפש ופתיחות ללב.</p>
        <p>עקרון העבודה הוא השילוב הפועם בין טכניקה ומיומנות לחופש ואינטואיציה. בין דמיון לריאליזם, בין דיוק להבעה, בין התפרצות ואומץ למים שקטים חודרים עמוק. בין מכנה משותף גבוה, לבין ארציות וחספוס. בין הפנימי לחיצוני. בין הפיזי למטאפיזי.</p>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
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

          <b-tab title="הרצאות">
            <div v-for="lecture in lectures" :key="lecture" class="responsive-google-slides mb-3">
              <b-embed type="iframe" allowfullscreen
                       :src="lecture"></b-embed>
            </div>
          </b-tab>

          <b-tab title="סכמות" active>
            <ImageGallery :images="schemes"></ImageGallery>
          </b-tab>
        </b-tabs>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import ImageGallery  from '@/components/ImageGallery.vue'
// import {getMetaInfo} from '@/utils/getMetaInfo'

export default {
  // metaInfo: getMetaInfo('art'),
  components: {ImageGallery},
  computed: {
    schemes() {
      return ['/img/scheme-battlefield.jpg', '/img/scheme-solider.jpg', '/img/scheme-manganon.jpg', 
      '/img/scheme-history.jpg', '/img/scheme-dimensions.jpg', '/img/scheme-moment.jpg', 
      '/img/scheme-mental-industry.jpg', '/img/scheme-humangineering.jpg', '/img/scheme-kingdom.jpg']
    },
    paintings() {
      return Array(10).fill('/img/painting-').map((_, i) => (_ + (i + 1) + '.jpg'))
    },
    videos() {
      return ['UztiH2FJHjQ','mR8DAB3YlzM','NMzZZwJoLJo','Q2HSjAX_YiI'].map(_ => 'https://www.youtube.com/embed/' + _)
    },
    lectures() {
      return ['2PACX-1vQGwSeEcGePtDoX3M5tYWKP5aOReKzdtun6ENazvFS5o5XtzqaOWzeDEoTQNVQeKTsrm8ukyTCNAuyp', '2PACX-1vTQeZJi8owYzDzB0a1D3zgtfVvBhjhhysmNw0gUmC-SCOQ4YbLf2cmqpJAOEnc0W4PMze2ypGxhyH-7', '2PACX-1vRYfyhyMnoRsWhogJoJwjwsbmyCipl8o9HGNYAv-qAo64Kk_Dak8puhWk7IkaKAaTVGE4_4rHIqHx0N'].map(_ => 'https://docs.google.com/presentation/d/e/' + _ + '/embed')
    },
  }
}
</script>

<style lang="scss">
  .responsive-google-slides {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 Ratio */
    height: 0;
    overflow: hidden;
  }
  .responsive-google-slides iframe {
    border: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
  }
</style>
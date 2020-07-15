import {MetaInfo} from 'vue-meta'

interface PageMeta {
  title: string;
  description: string;
}

const pageMeta: Record<string, PageMeta> = {
  home         : {
    title: 'השער',
    description: 'שער לעולם חדש הבנוי על יסודות קדמונים. פרוייקט חברתי שיתופי של התפתחות אישית וכללית ממשבר עולמי לחברה מתקדמת',
  },
  art        : {
    title: 'אמנות',
    description: 'האמנות נועדה לקרב את האדם לליבו וללמוד את נפשו. האמנות הפועמת משלבת מיומנות ואינטואיציה, הבעה וריאליזם.',
  },
  school: {
    title: 'בית ספר פעימה',
    description: 'בית ספר פעימה מהווה מרכז חקר ולימוד הנפש. מטרתו הקמת מערך הדרכה לנפש האדם. כולם מוזמנים.',
  },
}

export const getMetaInfo = (pageName: string): MetaInfo => {
  const {title, description} = pageMeta[pageName]

  const metaInfo: MetaInfo = {
    titleTemplate: 'טבע שלם | %s',
    title        : title,
    meta         : [
      {property: 'og:type', content : 'website'},
      {property: 'og:title', content : title},
      {property: 'og:title', content : title},
      {property: 'og:title', content : title},
      {property: 'og:description', content : description},
      {property: 'og:image', content : '/img/merkavah-logo.jpg'},
      {name: 'description', content: description},
    ],
  }

  return metaInfo
}

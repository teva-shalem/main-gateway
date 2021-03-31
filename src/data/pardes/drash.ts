import {string, number, enums, assign, Infer, object, tuple, array, is} from 'superstruct'

import {JsonData} from '@/data/JsonData'
import { indexedObject } from '@/data/structs'

import drashTehiruContent from '@/content/drash-tehiru.json'

const DrashTehiru = object({
    text: array(string()),
    image: array(string())
})

const tehiru = new JsonData(drashTehiruContent, DrashTehiru)

const DarushTextKeys = tehiru.data.text
const DarushTextKey = enums(DarushTextKeys)
type DarushTextKey = Infer<typeof DarushTextKey>

const DarushImageKeys = tehiru.data.image
const DarushImageKey = enums(DarushImageKeys)
type DarushImageKey = Infer<typeof DarushImageKey>

const DarushTexts = indexedObject(
    DarushTextKeys, string()
)
const DarushImages = indexedObject(
    DarushImageKeys, tuple([string(), number(), number()])
)

export const Drash = assign(
    DarushTexts, DarushImages,
)
export type Drash = Infer<typeof Drash>

export function isTermDrashText(term: string): term is DarushTextKey {
    return is(term, DarushTextKey)
}

export function isTermDrashImage(term: string): term is DarushImageKey {
    return is(term, DarushImageKey)
}
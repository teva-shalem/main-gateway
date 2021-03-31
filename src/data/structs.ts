import { Struct, object } from 'superstruct';

export function indexedObject(keys: string[], valueStruct: Struct<any>): ReturnType<typeof object> {
    return object(Object.fromEntries(
        keys.map(key => ([key, valueStruct]))
    ))
}

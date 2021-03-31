import {Struct, create, Infer, tuple, is} from 'superstruct'

export class JsonData<T> {
    data: T

    constructor(json: unknown, private struct: Struct<T>) {
        try {
            this.data = create(json, struct)
        } catch(e) {
            console.error('JsonData:', e)
            throw e
        }
    }

    is(anything: unknown): anything is T {
        return is(anything, this.struct)
    }
}

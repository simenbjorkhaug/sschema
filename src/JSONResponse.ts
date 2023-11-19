import { JSONLD } from './json-ld/index.ts'
import { HATEOASResource } from './hateoas/index.ts'

export class JSONResponse<T = unknown> extends Response {
  constructor(
    data: HATEOASResource<T> & JSONLD & { [key: string]: unknown },
    init?: ResponseInit | undefined,
  ) {
    super(JSON.stringify(data), init)
  }
}

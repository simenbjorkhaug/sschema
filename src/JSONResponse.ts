import { JSONLD } from './json-ld/index.ts'
import { HATEOASResource } from './hateoas/index.ts'
import type { ResponseInit } from './types.ts'

export class JSONResponse<T = unknown> extends Response {
  constructor(
    data: HATEOASResource<T> & JSONLD & { [key: string]: unknown },
    init?: ResponseInit | undefined,
  ) {
    super(JSON.stringify(data), init)
  }
}

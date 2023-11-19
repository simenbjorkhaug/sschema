import { HATEOASResource } from './hateoas/index.ts'
import type { ResponseInit } from './types.ts'

export class HATEOASResponse<T = unknown> extends Response {
  constructor(
    data: HATEOASResource<T> & { [key: string]: unknown },
    init?: ResponseInit | undefined,
  ) {
    super(JSON.stringify(data), init)
  }
}

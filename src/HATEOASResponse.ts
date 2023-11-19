import { HATEOASResource } from './hateoas/index.ts'

export class HATEOASResponse<T = unknown> extends Response {
  constructor(
    data: HATEOASResource<T> & { [key: string]: unknown },
    init?: ResponseInit | undefined,
  ) {
    super(JSON.stringify(data), init)
  }
}

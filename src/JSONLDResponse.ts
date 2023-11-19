import { JSONLD } from './json-ld/index.ts'
import type { ResponseInit } from './types.ts'

export class JSONLDResponse extends Response {
  constructor(
    data: JSONLD & { [key: string]: unknown },
    init?: ResponseInit | undefined,
  ) {
    super(JSON.stringify(data), init)
  }
}

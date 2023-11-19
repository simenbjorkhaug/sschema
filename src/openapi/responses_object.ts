import type { ReferenceObject } from './reference_object.ts'
import type { ResponseObject } from './response_object.ts'

export type ResponsesObject = {
  // deno-lint-ignore ban-ts-comment
  // @ts-ignore
  default?: ResponseObject | ReferenceObject
  [statusCode: string]: ResponseObject | ReferenceObject
}

import type { HeaderObject } from './header_object.ts'
import type { ReferenceObject } from './reference_object.ts'

export type EncodingObject = {
  contentType?: string
  headers?: { [header: string]: HeaderObject | ReferenceObject }
  style?: string
  explode?: boolean
  allowReserved?: boolean
}

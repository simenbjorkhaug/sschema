import type { HeaderObject } from './header_object.ts'
import type { LinkObject } from './link_object.ts'
import type { MediaTypeObject } from './media_type_object.ts'
import type { ReferenceObject } from './reference_object.ts'

export type ResponseObject = {
  description: string
  headers?: { [header: string]: HeaderObject | ReferenceObject }
  content?: { [mediaType: string]: MediaTypeObject }
  links?: { [link: string]: LinkObject | ReferenceObject }
}

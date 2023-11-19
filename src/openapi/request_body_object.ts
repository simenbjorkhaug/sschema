import type { MediaTypeObject } from './media_type_object.ts'

export type RequestBodyObject = {
  description?: string
  content: { [mediaType: string]: MediaTypeObject }
  required?: boolean
}

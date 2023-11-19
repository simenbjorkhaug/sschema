import type { ExternalDocumentationObject } from './external_documentation_object.ts'

export type TagObject = {
  name: string
  description?: string
  externalDocs?: ExternalDocumentationObject
}

import type { ComponentsObject } from './components_object.ts'
import type { ExternalDocumentationObject } from './external_documentation_object.ts'
import type { InfoObject } from './info_object.ts'
import type { PathsObject } from './paths_object.ts'
import type { SecurityRequirementObject } from './security_requirement_object.ts'
import type { ServerObject } from './server_object.ts'
import type { TagObject } from './tag_object.ts'

export type OpenAPI = {
  openapi: string
  info: InfoObject
  servers?: ServerObject[]
  paths: PathsObject
  components?: ComponentsObject
  security?: SecurityRequirementObject[]
  tags?: TagObject[]
  externalDocs?: ExternalDocumentationObject
}

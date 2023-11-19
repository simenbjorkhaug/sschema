import type { ComponentsObject } from './components_object.ts'
import type { ExternalDocumentationObject } from './external_documentation_object.ts'
import type { InfoObject } from './info_object.ts'
import type { PathsObject } from './paths_object.ts'
import type { SecurityRequirementObject } from './security_requirement_object.ts'
import type { ServerObject } from './server_object.ts'
import type { TagObject } from './tag_object.ts'

export * from './callback_object.ts'
export * from './components_object.ts'
export * from './contact_object.ts'
export * from './encoding_object.ts'
export * from './example_object.ts'
export * from './external_documentation_object.ts'
export * from './header_object.ts'
export * from './info_object.ts'
export * from './license_object.ts'
export * from './link_object.ts'
export * from './media_type_object.ts'
export * from './oauth_flows_object.ts'
export * from './oauth_flow_object.ts'
export * from './operation_object.ts'
export * from './parameter_object.ts'
export * from './path_item_object.ts'
export * from './paths_object.ts'
export * from './reference_object.ts'
export * from './request_body_object.ts'
export * from './response_object.ts'
export * from './responses_object.ts'
export * from './security_requirement_object.ts'
export * from './security_scheme_object.ts'
export * from './server_object.ts'
export * from './server_variable_object.ts'
export * from './tag_object.ts'

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

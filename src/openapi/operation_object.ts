import type { CallbackObject } from './callback_object.ts'
import type { ExternalDocumentationObject } from './external_documentation_object.ts'
import type { ParameterObject } from './parameter_object.ts'
import type { ReferenceObject } from './reference_object.ts'
import type { RequestBodyObject } from './request_body_object.ts'
import type { ResponsesObject } from './responses_object.ts'
import type { SecurityRequirementObject } from './security_requirement_object.ts'
import type { ServerObject } from './server_object.ts'

export type OperationObject = {
  tags?: string[]
  summary?: string
  description?: string
  externalDocs?: ExternalDocumentationObject
  operationId?: string
  parameters?: (ParameterObject | ReferenceObject)[]
  requestBody?: RequestBodyObject | ReferenceObject
  responses: ResponsesObject
  callbacks?: { [callback: string]: CallbackObject | ReferenceObject }
  deprecated?: boolean
  security?: SecurityRequirementObject[]
  servers?: ServerObject[]
}

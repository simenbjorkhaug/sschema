import type { JSONSchema } from '../schema.ts'
import type { CallbackObject } from './callback_object.ts'
import type { ExampleObject } from './example_object.ts'
import type { HeaderObject } from './header_object.ts'
import type { LinkObject } from './link_object.ts'
import type { ParameterObject } from './parameter_object.ts'
import type { ReferenceObject } from './reference_object.ts'
import type { RequestBodyObject } from './request_body_object.ts'
import type { ResponseObject } from './response_object.ts'
import type { SecuritySchemeObject } from './security_scheme_object.ts'

export type ComponentsObject = {
  schemas?: { [key: string]: JSONSchema | ReferenceObject }
  responses?: { [key: string]: ResponseObject | ReferenceObject }
  parameters?: { [key: string]: ParameterObject | ReferenceObject }
  examples?: { [key: string]: ExampleObject | ReferenceObject }
  requestBodies?: { [key: string]: RequestBodyObject | ReferenceObject }
  headers?: { [key: string]: HeaderObject | ReferenceObject }
  securitySchemes?: { [key: string]: SecuritySchemeObject | ReferenceObject }
  links?: { [key: string]: LinkObject | ReferenceObject }
  callbacks?: { [key: string]: CallbackObject | ReferenceObject }
}

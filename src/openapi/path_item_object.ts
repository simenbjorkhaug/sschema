import type { OperationObject } from './operation_object.ts'
import type { ParameterObject } from './parameter_object.ts'
import type { ReferenceObject } from './reference_object.ts'
import type { ServerObject } from './server_object.ts'

export type PathItemObject = {
  $ref?: string
  summary?: string
  description?: string
  get?: OperationObject
  put?: OperationObject
  post?: OperationObject
  delete?: OperationObject
  options?: OperationObject
  head?: OperationObject
  patch?: OperationObject
  trace?: OperationObject
  servers?: ServerObject[]
  parameters?: (ParameterObject | ReferenceObject)[]
}

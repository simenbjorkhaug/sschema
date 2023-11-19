// deno-lint-ignore-file no-explicit-any
import type { JSONSchema } from '../schema.ts'
import type { ExampleObject } from './example_object.ts'
import type { ReferenceObject } from './reference_object.ts'

export type ParameterObject = {
  name: string
  in: 'query' | 'header' | 'path' | 'cookie'
  description?: string
  required?: boolean
  deprecated?: boolean
  allowEmptyValue?: boolean
  style?: string
  explode?: boolean
  allowReserved?: boolean
  schema?: JSONSchema | ReferenceObject
  example?: any
  examples?: { [example: string]: ExampleObject | ReferenceObject }
}

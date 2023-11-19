import type { JSONSchema } from '../schema.ts'
import type { EncodingObject } from './encoding_object.ts'
import type { ExampleObject } from './example_object.ts'
import type { ReferenceObject } from './reference_object.ts'

export type MediaTypeObject = {
  schema?: JSONSchema | ReferenceObject
  example?: any
  examples?: { [example: string]: ExampleObject | ReferenceObject }
  encoding?: { [encoding: string]: EncodingObject }
}

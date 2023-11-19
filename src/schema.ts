// deno-lint-ignore-file no-explicit-any

type BaseJSONSchema = {
  $id?: string
  $schema?: string
  $ref?: string
  $comment?: string
  $defs?: {
    [key: string]: JSONSchema
  }
  title?: string
  default?: any
  description?: string
  examples?: any[]
  readOnly?: boolean
  writeOnly?: boolean
}

export type JSONSchema =
  | BaseJSONSchema
    & (
      | {
        type: 'string'
        format?: string
        maxLength?: number
        minLength?: number
        pattern?: string
        enum?: string[]
        const?: string
      }
      | {
        type: 'number'
        multipleOf?: number
        maximum?: number
        exclusiveMaximum?: number
        minimum?: number
        exclusiveMinimum?: number
        enum?: number[]
        const?: number
      }
      | {
        type: 'integer'
        multipleOf?: number
        maximum?: number
        exclusiveMaximum?: number
        minimum?: number
        exclusiveMinimum?: number
        enum?: number[]
        const?: number
      }
      | { type: 'boolean'; enum?: boolean[]; const?: boolean }
      | { type: 'null'; const?: null }
      | {
        type: 'array'
        items: JSONSchema | JSONSchema[]
        maxItems?: number
        minItems?: number
        uniqueItems?: boolean
        enum?: any[]
        const?: any[]
      }
      | {
        type: 'object'
        properties: { [key: string]: JSONSchema }
        required?: string[]
        additionalProperties?: boolean | JSONSchema
        maxProperties?: number
        minProperties?: number
        enum?: any[]
        const?: any[]
      }
      | {
        allOf?: JSONSchema[]
        anyOf?: JSONSchema[]
        oneOf?: JSONSchema[]
        not?: JSONSchema
        if?: JSONSchema
        then?: JSONSchema
        else?: JSONSchema
      }
    )
  | boolean

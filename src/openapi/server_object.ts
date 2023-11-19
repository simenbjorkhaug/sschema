import type { ServerVariableObject } from './server_variable_object.ts'

export type ServerObject = {
  url: string
  description?: string
  variables?: { [variable: string]: ServerVariableObject }
}

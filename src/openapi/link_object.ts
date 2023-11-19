import type { ServerObject } from './server_object.ts'

export type LinkObject = {
  operationRef?: string
  operationId?: string
  parameters?: { [parameter: string]: any }
  requestBody?: any
  description?: string
  server?: ServerObject
}

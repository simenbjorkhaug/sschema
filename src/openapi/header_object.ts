import type { ParameterObject } from './parameter_object.ts'

export type HeaderObject = Omit<ParameterObject, 'name' | 'in'>

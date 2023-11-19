import { type ContactObject } from './contact_object.ts'
import { type LicenseObject } from './license_object.ts'

export type InfoObject = {
  title: string
  description?: string
  termsOfService?: string
  contact?: ContactObject
  license?: LicenseObject
  version: string
}

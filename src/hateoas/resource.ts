import { HATEOASLink } from './link.ts'

export type HATEOASResource<T> = {
  data: T
  links: HATEOASLink[]
  metadata?: { [key: string]: any }
}

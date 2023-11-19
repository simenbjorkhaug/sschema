type ContextEntry = {
  '@id'?: string
  '@type'?: string
  '@language'?: string
  '@container'?: '@list' | '@set' | '@language' | '@index' | '@id' | '@type'
  '@reverse'?: boolean
}

export type JSONLD = {
  '@context'?:
    | string
    | { [key: string]: string | ContextEntry }
    | Array<string | { [key: string]: string | ContextEntry }>
  '@id'?: string
  '@type'?: string | string[]
  [key: string]: any
}

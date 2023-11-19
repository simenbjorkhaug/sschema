type HeadersInit = Iterable<string[]> | Record<string, string>

export type ResponseInit = {
  status?: number
  statusText?: string
  headers?: HeadersInit
}

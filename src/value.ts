type PrmitiveValue = null | boolean | string | number

export type JSONObject = { [key: string]: JSONValue }
export type JSONArray = JSONValue[]
export type JSONValue = PrmitiveValue | JSONObject | JSONArray

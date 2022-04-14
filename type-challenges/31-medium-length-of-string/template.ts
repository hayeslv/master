// type LengthOfString<S extends string> = any

type StrTransArray<S extends string> = S extends `${infer First}${infer Rest}`
  ? [First, ...StrTransArray<Rest>]
  : []

type LengthOfString<S extends string> = StrTransArray<S>["length"]


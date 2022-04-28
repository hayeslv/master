// type Fibonacci<T extends number> = any

type Fibonacci<
  T extends number,
  Result extends any[] = [[never], [never]]
> = T extends 1 | 2
  ? 1
  : T extends Result["length"]
    ? Result[0]["length"]
    : Fibonacci<T, [[...Result[0], ...Result[1]], ...Result]>
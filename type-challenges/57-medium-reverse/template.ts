// type Reverse<T> = any

type Reverse<T extends any[], Result extends any[] = []> = T extends [infer First, ...infer Rest]
  ? Reverse<Rest, [First, ...Result]>
  : Result

type p2 = Reverse<['a', 'b']>
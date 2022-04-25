// type Shift<T> = any

type Shift<T> = T extends [infer _, ...infer Rest]
  ? Rest
  : T
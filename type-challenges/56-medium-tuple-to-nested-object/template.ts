// type TupleToNestedObject<T, U> = any

type TupleToNestedObject<T extends any[], U> = T extends [infer First, ...infer Rest]
  ? Record<First & string, TupleToNestedObject<Rest, U>>
  : U

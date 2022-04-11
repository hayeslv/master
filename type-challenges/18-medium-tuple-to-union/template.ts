// type TupleToUnion<T> = any

type TupleToUnion<T extends any[]> = T[number]
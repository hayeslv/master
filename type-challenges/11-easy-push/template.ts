// type Push<T, U> = any

type Push<T extends any[], U> = [...T, U]

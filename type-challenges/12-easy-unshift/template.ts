// type Unshift<T, U> = any

type Unshift<T extends any[], U> = [U, ...T]

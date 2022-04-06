// type MyExclude<T, U> = any

type MyExclude<T, U> = T extends U ? never : T
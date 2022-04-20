
// type ReplaceKeys<U, T, Y> = any


type ReplaceKeys<U, T, Y> = U extends any
  ? {[K in keyof U]: K extends T
    ? K extends keyof Y
      ? Y[K]
      : never
    : U[K]}
  : never
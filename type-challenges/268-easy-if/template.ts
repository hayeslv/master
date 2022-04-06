// type If<C, T, F> = any

type If<C extends boolean, T, F> = C extends true ? T : F
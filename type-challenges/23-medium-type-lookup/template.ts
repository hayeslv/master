// type LookUp<T, U> = any

type LookUp<T extends { type: string }, U extends string> = T extends { type: U } ? T : never

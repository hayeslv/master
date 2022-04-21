// type DropChar<S, C> = any

type DropChar<S extends string, C extends string> = S extends `${infer First}${C}${infer Last}` 
  ? DropChar<`${First}${Last}`, C> 
  : S

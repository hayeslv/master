// type BEM<B extends string, E extends string[], M extends string[]> = any

type Prefix<B extends string, E extends string[]> = E extends [string]
  ? `${B}__${E[0]}`
  : B

type BEM<
  B extends string, 
  E extends string[], 
  M extends string[],
  BE extends string = Prefix<B, E>
> = M extends [] ? BE : `${BE}--${M[number]}`
// type CamelCase<S> = any;

type CamelCase<S extends string> = S extends `${infer F}-${infer R}` 
  ? R extends Capitalize<R> 
      ? `${F}-${CamelCase<R>}` 
      : `${F}${CamelCase<Capitalize<R>>}`
  : S


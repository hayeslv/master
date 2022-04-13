// type MyCapitalize<T extends string> = any

type MyCapitalize<T extends string> = T extends `${infer First}${infer Rest}` 
  ? `${Uppercase<First>}${Rest}`
  : T
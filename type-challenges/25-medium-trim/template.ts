// type Trim<T extends string> = any

// type Trim<T extends string> = T extends `${" " | "\n" | "\t"}${infer R}`
//   ? Trim<R>
//   : T extends `${infer U}${" " | "\n" | "\t"}`
//     ? Trim<U>
//     : T


type Whitespace = " " | "\n" | "\t"
type Trim_Left<T> = T extends `${Whitespace}${infer Rest}` ? Trim_Left<Rest> : T
type Trim_Right<T> = T extends `${infer Rest}${Whitespace}` ? Trim_Right<Rest> : T
type Trim<T extends string> = Trim_Left<Trim_Right<T>>
// type DeepReadonly<T> = any

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Record<string, unknown>
    ? DeepReadonly<T[P]>
    : T[P]
}




interface User {
  name: string
  age: number
}

let user: Record<number, User> = {
  0: { name: "hay0", age: 18 },
  1: { name: "hay1", age: 20 }
}

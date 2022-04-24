// type Mutable<T> = any

type Mutable<T> = {
  - readonly [P in keyof T]: T[P]
}

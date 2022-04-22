// type PartialByKeys<T, K> = any

type Copy<T> = {
  [P in keyof T]: T[P]
}

type PartialByKeys<T, K = keyof T> = Copy<Omit<T, K & keyof T> & {
  [P in K & keyof T]?: T[P]
}>


interface User {
  name: string
  age: number
  address: string
}
type p1 = PartialByKeys<User, 'name'>
type p2 = PartialByKeys<User, 'name' | 'unknown'>
type p3 = PartialByKeys<User, 'name' | 'age'>
type p4 = PartialByKeys<User>
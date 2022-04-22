// type PickByType<T, U> = any

type PickByType<T, U> = {
  [P in keyof T as T[P] extends U ? P : never]: T[P]
}
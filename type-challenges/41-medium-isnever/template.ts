
// type IsNever = any


type IsNever<T> = [T] extends [never]
  ? true
  : false
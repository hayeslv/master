// type RequiredByKeys<T, K> = any

type RequiredByKeys<T, K = keyof T> = Copy<
  Required<Pick<T, K & keyof T>> 
  & Omit<T, K & keyof T>
>

// interface User1 {
//   name?: string
//   age?: number
//   address?: string
// }

// type p1 = RequiredByKeys<User1, 'name'>
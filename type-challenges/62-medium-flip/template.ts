// type Flip<T> = any

type Flip<T> = {
  [P in keyof T as `${T[P] & (string | number | boolean)}`]: P
}

type p11 = Flip<{ pi: 3.14; bool: true }>
// type FlipArguments<T> = any

type FlipArguments<T> = T extends (...args: infer Args) => infer Result
  ? (...args: Reverse<Args>) => Result
  : T
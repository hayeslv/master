// type AppendArgument<Fn, A> = any

type AppendArgument<Fn, A> = Fn extends (...args: infer Args) => infer ReturnType
  ? (...args: [...Args, A]) => ReturnType
  : Fn
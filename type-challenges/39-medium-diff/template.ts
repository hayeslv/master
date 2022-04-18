// type Diff<O, O1> = any

type Diff<O, O1> = {
  [P in Exclude<keyof O, keyof O1> | Exclude<keyof O1, keyof O>]: P extends keyof O
    ? O[P]
    : P extends keyof O1
      ? O1[P]
      :never
}


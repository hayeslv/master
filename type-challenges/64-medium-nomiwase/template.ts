// type AllCombinations<S> = any

// 1.将字符串转化为联合类型
type String2Union<S extends string> = S extends `${infer L}${infer R}`
  ? L | String2Union<R>
  : S

// 2.联合类型两两合并
type Combination<A extends string, B extends string> = A | B | `${A}${B}` | `${B}${A}`

// 测试
type p4 = Combination<'A'|'B', 'C'|'D'>

// 3.联合类型的合并，利用联合类型默认可拆解
type UnionCombination<
  A extends string, 
  B extends string = A
> = A extends B
  ? Combination<A, UnionCombination<Exclude<B, A>>>
  : never


type AllCombinations<S extends string> = UnionCombination<String2Union<S>>
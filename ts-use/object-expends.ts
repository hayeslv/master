// 在 TS 类型中，我们进行类型的调用，有时会不显示对应的结果，只显示相关类型的调用
// 例如下面几个例子：

// !1.keyof
type obj10 = {
  name: string
  age: number
}
// 这里我们想要显示的实际是：name | age
type keyofTest = keyof obj10 // type keyofTest = keyof obj10

// !2.类型别名
type CxrObject = {
  age: number
}
type CxrUnion = boolean | number

// 2.1 union
// 实际想要：boolean | number | string
type unionCase = CxrObject | string // type unionCase = string | CxrObject

// 2.2 嵌套
type obj11 = {
  c: CxrObject // 这里希望展开
  // c: CxrUnion // ?缺陷：对象中的 union 无法展开（但是单纯的union可以展开）
  name: string
}

// !3.泛型函数
type Expected10 = {
  readonly x: {
    readonly a: 1
    readonly b: "hi"
  }
  readonly y: "hey"
}
type De = {
  x: {
    a: 1
    b: "hi"
  }
  y: "hey"
}
type Todo10 = DeepReadonly10<De> // 这里希望展开
type DeepReadonly10<T> = {
  readonly [P in keyof T]: T[P] extends Record<string, unknown>
    ? DeepReadonly<T[P]>
    : T[P]
}




/**
 * ----------------------- 类型展开实现 -----------------------
 */
type Expand1<T> = T extends infer O ? O : never

// !展开 keyof
type r1 = Expand1<keyofTest>

// !展开类型别名（发现此时 Expand1 并没有起作用），因为这里我们遇到的是对象，对象需要额外处理一下
type r2 = Expand1<unionCase>

type Expand2<T> = T extends infer O 
  ? {
    [K in keyof O]: O[K]
  }
  : never

type r3 = Expand2<unionCase> // 此时就展开了

// !处理递归
type r4 = Expand2<obj11> // 这里因为有对象的嵌套，所以需要再进行递归一下

type ExpandRecursive<T> = T extends object 
  ? T extends infer O 
    ? {[K in keyof O]: ExpandRecursive<O[K]>}
    : never
  : T
  
type r5 = ExpandRecursive<obj11> // 此时就展开了

// !展开泛型函数
type r6 = ExpandRecursive<Todo10>


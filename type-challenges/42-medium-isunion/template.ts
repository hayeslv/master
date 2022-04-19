// type IsUnion<T> = any

type IsUnion<T, U = T> = T extends U 
  ? [U] extends [T]
    ? false
    : true
  : never

// type IsUnion<T> = T[] extends (T extends any ? T[] : never)
//   ? false
//   : true


// 在条件类型中，联合将是分配的，看看下面的例子：
type Test<T, T2 = T> = T extends T2 ? {t: T, t2: T2} : true
type a = Test<string|number|void> // {t: string, t2: string | number} | {t: number, t2: string | number}
type b = Test<string> // {t: string, t2: string}
// 当分布发生时，T和T2之间存在差异。现在我们可以通过将T2赋回T来判断T是否为并集类型。这次我们用方括号来避免分配。
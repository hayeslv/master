// type MyPick<T, K> = any


// keyof T：获取T中所有的key
// K extends：约束 K 是属于 keyof T 的。这里会过滤掉不属于 keyof T 的内容
// [P in K]：遍历K，P就是每一次遍历的值
// T[P]：取值

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

// 1. 返回一个对象
// 2. 遍历：[P in K]
// 3. 取值：T[P]
// 4. 看看 key 是否在对象中：K extends keyof T

// keyof 相当于 lookup（查阅）
// extends 如果在 <> 中，就相当于约束。
// -- keyof T 是一个 union 类型，K 也是一个 union 类型，extends 会依次进行对比
// -- 相当于两个数组进行对比
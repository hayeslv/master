实现一个类型`IsTuple`，它接受一个输入类型`T`，并返回`T`是否为元组类型。

For example:

```typescript
type case1 = IsTuple<[number]> // true
type case2 = IsTuple<readonly [number]> // true
type case3 = IsTuple<number[]> // false
```
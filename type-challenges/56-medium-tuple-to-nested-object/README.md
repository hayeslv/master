给定一个只包含字符串类型的元组类型'T'，以及一个类型'U'，递归地构建一个对象。

```typescript
type a = TupleToNestedObject<['a'], string> // {a: string}
type b = TupleToNestedObject<['a', 'b'], number> // {a: {b: number}}
type c = TupleToNestedObject<[], boolean> // boolean. if the tuple is empty, just return the U type
```
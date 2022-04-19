实现一个类型IsNever，它接受输入类型'T'。

如果类型解析为“never”，则返回“true”，否则返回“false”。

For example:

```ts
type A = IsNever<never>  // expected to be true
type B = IsNever<undefined> // expected to be false
type C = IsNever<null> // expected to be false
type D = IsNever<[]> // expected to be false
type E = IsNever<number> // expected to be false
```
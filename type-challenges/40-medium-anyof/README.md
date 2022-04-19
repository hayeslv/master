在类型系统中实现类似Python的'any'函数。类型接受数组，如果数组中的任何元素为true，则返回'true'。如果数组为空，则返回'false'。

For example:

```ts
type Sample1 = AnyOf<[1, "", false, [], {}]>; // expected to be true.
type Sample2 = AnyOf<[0, "", false, [], {}]>; // expected to be false.
```
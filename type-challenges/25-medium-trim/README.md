实现`Trim<T>`，它是一个字符串类型，并返回一个新字符串，其中两端的空白符都已被删除。

例如

```ts
type trimed = Trim<'  Hello World  '> // expected to be 'Hello World'
```
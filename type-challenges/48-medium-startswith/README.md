实现'StartsWith<T，U>'，它接受两种精确的字符串类型，并返回'T'是否以'U'开头

For example

```typescript
type a = StartsWith<'abc', 'ac'> // expected to be false
type b = StartsWith<'abc', 'ab'> // expected to be true
type c = StartsWith<'abc', 'abcd'> // expected to be false
```
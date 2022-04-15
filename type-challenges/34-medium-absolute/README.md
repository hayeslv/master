实现一个接收string,number或bigInt类型参数的`Absolute`类型,返回一个正数字符串。

例如

```ts
type Test = -100;
type Result = Absolute<Test>; // expected to be "100"
```
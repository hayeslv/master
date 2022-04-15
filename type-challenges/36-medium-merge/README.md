将两个类型合并成一个类型，第二个类型的键会覆盖第一个类型的键。

例如

```ts
type foo = {
  name: string;
  age: string;
}
type coo = {
  age: number;
  sex: string
}
type Result = Merge<foo,coo>; // expected to be {name: string, age: number, sex: string}
```
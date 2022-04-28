实现一个通用的 `Fibonacci<T>` ，获取一个数字T并返回它对应的 [Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number).

斐波那契序列数据:
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

For example
```ts
type Result1 = Fibonacci<3> // 2
type Result2 = Fibonacci<8> // 21
```
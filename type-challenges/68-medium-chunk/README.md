

你知道lodash吗 `Chunk` 是其中一个非常有用的函数，现在让我们来实现它。

`Chunk<T，N>` 接受两个必需的类型参数，`T`必须是 `tuple`，`N`必须是`integer>=1`

```ts
type exp1 = Chunk<[1, 2, 3], 2> // expected to be [[1, 2], [3]]
type exp2 = Chunk<[1, 2, 3], 4> // expected to be [[1, 2, 3]]
type exp3 = Chunk<[1, 2, 3], 1> // expected to be [[1], [2], [3]]
```
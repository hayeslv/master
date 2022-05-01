在这个挑战中，您应该实现一个类型`Zip<T，U>`，T和U必须是`Tuple`

```ts
type exp = Zip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]
```
实现通用的`Mutable<T>`，它使`T`中的所有属性都是可变的（而不是只读的）。

For example

```typescript
interface Todo {
  readonly title: string
  readonly description: string
  readonly completed: boolean
}
type MutableTodo = Mutable<Todo> // { title: string; description: string; completed: boolean; }
```
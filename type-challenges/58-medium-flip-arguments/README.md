实现类型版本的 `lodash` 中的 ``_.flip``。

类型 `FlipArguments<T>` 需要函数类型 `T`，并返回一个新函数类型，该函数类型的返回类型与 `T` 相同，但参数相反。

For example:

```typescript
type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void> 
// (arg0: boolean, arg1: number, arg2: string) => void
```
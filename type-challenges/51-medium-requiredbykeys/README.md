
实现一个通用的'RequiredByKeys<T，K>'，它接受两种类型的参数'T'和'K'。

`K`指定应设置为必需的`T`属性集。当没有提供'K'时，它应该使所有所需的属性都像正常的'required<T>'一样。

For example

```typescript
interface User {
  name?: string
  age?: number
  address?: string
}
type UserPartialName = RequiredByKeys<User, 'name'> // { name: string; age?: number; address?: string }
```
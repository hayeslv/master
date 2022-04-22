实现一个通用的'PartialByKeys<T，K>'，它接受两种类型的参数'T'和'K'。

`K`指定应设置为可选的`T`属性集。当没有提供'K'时，它应该使所有属性都是可选的，就像正常的'Partial<T>'”。

For example

```typescript
interface User {
  name: string
  age: number
  address: string
}
type UserPartialName = PartialByKeys<User, 'name'> // { name?:string; age:number; address:string }
```
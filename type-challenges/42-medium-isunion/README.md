实现一个类型'IsUnion'，它接受输入类型'T'，并返回'T'是否解析为联合类型。

For example:
  
  ```ts
  type case1 = IsUnion<string>  // false
  type case2 = IsUnion<string|number>  // true
  type case3 = IsUnion<[string|number]>  // false
  ```
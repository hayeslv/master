实现二叉树的类型版本以便遍历。

For example:

```typescript
const tree1 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
} as const
type A = InorderTraversal<typeof tree1> // [1, 3, 2]
```
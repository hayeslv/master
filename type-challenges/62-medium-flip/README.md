实现类型 `just-flip-object`. 

Examples:

```typescript
Flip<{ a: "x", b: "y", c: "z" }>; // {x: 'a', y: 'b', z: 'c'}
Flip<{ a: 1, b: 2, c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
flip<{ a: false, b: true }>; // {false: 'a', true: 'b'}
```

不需要支持嵌套对象和不能作为对象键的值，例如数组
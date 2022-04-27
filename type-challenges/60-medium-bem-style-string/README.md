块、元素、修饰符方法（BEM）是CSS中类的常用命名约定。

For example, the block component would be represented as `btn`, element that depends upon the block would be represented as `btn__price`, modifier that changes the style of the block would be represented as `btn--big` or `btn__price--warning`.

例如，块组件将表示为 `btn`，依赖于块的元素将表示为 `btn__price`，更改块样式的修改器将表示为 `btn--big` 或 `btn__price--warning`。

实现 `BEM<B，E，M>` ，它从这三个参数生成字符串并集。其中 `B` 是字符串文字，`E` 和 `M` 是字符串数组（可以为空）。

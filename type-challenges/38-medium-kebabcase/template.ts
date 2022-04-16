// type KebabCase<S> = any

type KebabCase<S> = S extends `${infer First}${infer Second}${infer Rest}`
? ( First extends Uncapitalize<First> 
  ? ( Second extends Uncapitalize<Second> 
    ? `${First}${KebabCase<`${Second}${Rest}`>}`
    : `${First}-${KebabCase<`${Uncapitalize<Second>}${Rest}`>}`)
  : ( Second extends Uncapitalize<Second> 
    ? `${Uncapitalize<First>}${KebabCase<`${Second}${Rest}`>}` 
    : `${Uncapitalize<First>}-${KebabCase<`${Uncapitalize<Second>}${Rest}`>}`))
: S
// type EndsWith<T extends string, U extends string> = any

type EndsWith<T extends string, U extends string> = T extends `${string}${U}` ? true : false
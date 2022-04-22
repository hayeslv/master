// type StartsWith<T extends string, U extends string> = any


type StartsWith<T extends string, U extends string> = T extends `${U}${string}` ? true : false



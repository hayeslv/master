// type Length<T extends any> = any

type Length<T extends readonly any[]> = T["length"]


// type Pop<T extends any[]> = any

type Pop<T extends any[]> = T extends [...infer Rest, any] ? Rest : never
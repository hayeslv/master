// type Last<T extends any[]> = any

type Last<T extends any[]> = T extends [...any[], infer Last] ? Last : never
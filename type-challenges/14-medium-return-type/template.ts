// type MyReturnType<T> = any

type MyReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer P ? P : any


